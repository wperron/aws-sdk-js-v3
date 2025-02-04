import process from "https://deno.land/std@0.79.0/node/process.ts";
import { Buffer } from "https://deno.land/std@0.79.0/node/buffer.ts";

import { ProviderError } from "../property-provider/mod.ts";
import { CredentialProvider } from "../types/mod.ts";
type RequestOptions = any;
import { parseUrl as parse } from "../url-parser-browser/mod.ts";

import { httpRequest } from "./remoteProvider/httpRequest.ts";
import { fromImdsCredentials, isImdsCredentials } from "./remoteProvider/ImdsCredentials.ts";
import { providerConfigFromInit, RemoteProviderInit } from "./remoteProvider/RemoteProviderInit.ts";
import { retry } from "./remoteProvider/retry.ts";

export const ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
export const ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
export const ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";

/**
 * Creates a credential provider that will source credentials from the ECS
 * Container Metadata Service
 */
export function fromContainerMetadata(init: RemoteProviderInit = {}): CredentialProvider {
  const { timeout, maxRetries } = providerConfigFromInit(init);
  return () => {
    return getCmdsUri().then((url) =>
      retry(async () => {
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, url));
        if (!isImdsCredentials(credsResponse)) {
          throw new ProviderError("Invalid response received from instance metadata service.");
        }

        return fromImdsCredentials(credsResponse);
      }, maxRetries)
    );
  };
}

function requestFromEcsImds(timeout: number, options: RequestOptions): Promise<string> {
  if (process.env[ENV_CMDS_AUTH_TOKEN]) {
    const { headers = {} } = options;
    headers.Authorization = process.env[ENV_CMDS_AUTH_TOKEN];
    options.headers = headers;
  }

  return httpRequest({
    ...options,
    timeout,
  }).then((buffer) => buffer.toString());
}

const CMDS_IP = "169.254.170.2";
const GREENGRASS_HOSTS = {
  localhost: true,
  "127.0.0.1": true,
};
const GREENGRASS_PROTOCOLS = {
  "http:": true,
  "https:": true,
};

function getCmdsUri(): Promise<RequestOptions> {
  if (process.env[ENV_CMDS_RELATIVE_URI]) {
    return Promise.resolve({
      hostname: CMDS_IP,
      path: process.env[ENV_CMDS_RELATIVE_URI],
    });
  }

  if (process.env[ENV_CMDS_FULL_URI]) {
    const parsed = parse(process.env[ENV_CMDS_FULL_URI]!);
    if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
      return Promise.reject(
        new ProviderError(`${parsed.hostname} is not a valid container metadata service hostname`, false)
      );
    }

    if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
      return Promise.reject(
        new ProviderError(`${parsed.protocol} is not a valid container metadata service protocol`, false)
      );
    }

    return Promise.resolve({
      ...parsed,
      port: parsed.port ? parsed.port : undefined,
    });
  }

  return Promise.reject(
    new ProviderError(
      "The container metadata credential provider cannot be used unless" +
        ` the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment` +
        " variable is set",
      false
    )
  );
}
