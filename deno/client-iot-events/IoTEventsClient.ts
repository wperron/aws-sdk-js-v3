import {
  CreateDetectorModelCommandInput,
  CreateDetectorModelCommandOutput
} from "./commands/CreateDetectorModelCommand.ts";
import {
  CreateInputCommandInput,
  CreateInputCommandOutput
} from "./commands/CreateInputCommand.ts";
import {
  DeleteDetectorModelCommandInput,
  DeleteDetectorModelCommandOutput
} from "./commands/DeleteDetectorModelCommand.ts";
import {
  DeleteInputCommandInput,
  DeleteInputCommandOutput
} from "./commands/DeleteInputCommand.ts";
import {
  DescribeDetectorModelCommandInput,
  DescribeDetectorModelCommandOutput
} from "./commands/DescribeDetectorModelCommand.ts";
import {
  DescribeInputCommandInput,
  DescribeInputCommandOutput
} from "./commands/DescribeInputCommand.ts";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput
} from "./commands/DescribeLoggingOptionsCommand.ts";
import {
  ListDetectorModelVersionsCommandInput,
  ListDetectorModelVersionsCommandOutput
} from "./commands/ListDetectorModelVersionsCommand.ts";
import {
  ListDetectorModelsCommandInput,
  ListDetectorModelsCommandOutput
} from "./commands/ListDetectorModelsCommand.ts";
import {
  ListInputsCommandInput,
  ListInputsCommandOutput
} from "./commands/ListInputsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand.ts";
import {
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput
} from "./commands/PutLoggingOptionsCommand.ts";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand.ts";
import {
  UpdateDetectorModelCommandInput,
  UpdateDetectorModelCommandOutput
} from "./commands/UpdateDetectorModelCommand.ts";
import {
  UpdateInputCommandInput,
  UpdateInputCommandOutput
} from "./commands/UpdateInputCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "../middleware-host-header/mod.ts";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "../smithy-client/mod.ts";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateDetectorModelCommandInput
  | CreateInputCommandInput
  | DeleteDetectorModelCommandInput
  | DeleteInputCommandInput
  | DescribeDetectorModelCommandInput
  | DescribeInputCommandInput
  | DescribeLoggingOptionsCommandInput
  | ListDetectorModelVersionsCommandInput
  | ListDetectorModelsCommandInput
  | ListInputsCommandInput
  | ListTagsForResourceCommandInput
  | PutLoggingOptionsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDetectorModelCommandInput
  | UpdateInputCommandInput;

export type ServiceOutputTypes =
  | CreateDetectorModelCommandOutput
  | CreateInputCommandOutput
  | DeleteDetectorModelCommandOutput
  | DeleteInputCommandOutput
  | DescribeDetectorModelCommandOutput
  | DescribeInputCommandOutput
  | DescribeLoggingOptionsCommandOutput
  | ListDetectorModelVersionsCommandOutput
  | ListDetectorModelsCommandOutput
  | ListInputsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLoggingOptionsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDetectorModelCommandOutput
  | UpdateInputCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type IoTEventsClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type IoTEventsClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation,
 *         and triggers actions when such events occur. AWS IoT Events API commands enable you to create, read,
 *         update and delete inputs and detector models, and to list their versions.</p>
 */
export class IoTEventsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTEventsClientResolvedConfig
> {
  readonly config: IoTEventsClientResolvedConfig;

  constructor(configuration: IoTEventsClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
