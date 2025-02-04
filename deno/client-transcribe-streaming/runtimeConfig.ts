const packageInfo = { version: "3.1.0" };

import { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } from "../config-resolver/mod.ts";
import { defaultProvider as credentialDefaultProvider } from "../credential-provider-node/mod.ts";
import { eventStreamPayloadHandlerProvider } from "../eventstream-handler-node/mod.ts";
import { eventStreamSerdeProvider } from "../eventstream-serde-browser/mod.ts";
import { Hash } from "https://jspm.dev/@aws-sdk/hash-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS } from "../middleware-retry/mod.ts";
import { loadConfig as loadNodeConfig } from "../node-config-provider/mod.ts";
import { NodeHttp2Handler, streamCollector } from "../node-http-handler/mod.ts";
import { parseUrl } from "../url-parser-node/mod.ts";
import { fromBase64, toBase64 } from "../util-base64-node/mod.ts";
import { calculateBodyLength } from "../util-body-length-node/mod.ts";
import { defaultUserAgent } from "../util-user-agent-node/mod.ts";
import { fromUtf8, toUtf8 } from "../util-utf8-node/mod.ts";
import { ClientDefaults } from "./TranscribeStreamingClient.ts";
import { ClientSharedValues } from "./runtimeConfig.shared.ts";

/**
 * @internal
 */
export const ClientDefaultValues: Required<ClientDefaults> = {
  ...ClientSharedValues,
  runtime: "deno",
  base64Decoder: fromBase64,
  base64Encoder: toBase64,
  bodyLengthChecker: calculateBodyLength,
  credentialDefaultProvider,
  defaultUserAgentProvider: defaultUserAgent({
    serviceId: ClientSharedValues.serviceId,
    clientVersion: packageInfo.version,
  }),
  eventStreamPayloadHandlerProvider,
  eventStreamSerdeProvider,
  maxAttempts: loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
  region: loadNodeConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
  requestHandler: new NodeHttp2Handler(),
  sha256: Hash.bind(null, "sha256"),
  streamCollector,
  urlParser: parseUrl,
  utf8Decoder: fromUtf8,
  utf8Encoder: toUtf8,
};
