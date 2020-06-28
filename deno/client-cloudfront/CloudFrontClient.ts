import {
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand.ts";
import {
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput
} from "./commands/CreateDistributionCommand.ts";
import {
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput
} from "./commands/CreateDistributionWithTagsCommand.ts";
import {
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput
} from "./commands/CreateFieldLevelEncryptionConfigCommand.ts";
import {
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput
} from "./commands/CreateFieldLevelEncryptionProfileCommand.ts";
import {
  CreateInvalidationCommandInput,
  CreateInvalidationCommandOutput
} from "./commands/CreateInvalidationCommand.ts";
import {
  CreatePublicKeyCommandInput,
  CreatePublicKeyCommandOutput
} from "./commands/CreatePublicKeyCommand.ts";
import {
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput
} from "./commands/CreateStreamingDistributionCommand.ts";
import {
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput
} from "./commands/CreateStreamingDistributionWithTagsCommand.ts";
import {
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand.ts";
import {
  DeleteDistributionCommandInput,
  DeleteDistributionCommandOutput
} from "./commands/DeleteDistributionCommand.ts";
import {
  DeleteFieldLevelEncryptionConfigCommandInput,
  DeleteFieldLevelEncryptionConfigCommandOutput
} from "./commands/DeleteFieldLevelEncryptionConfigCommand.ts";
import {
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput
} from "./commands/DeleteFieldLevelEncryptionProfileCommand.ts";
import {
  DeletePublicKeyCommandInput,
  DeletePublicKeyCommandOutput
} from "./commands/DeletePublicKeyCommand.ts";
import {
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput
} from "./commands/DeleteStreamingDistributionCommand.ts";
import {
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput
} from "./commands/GetCloudFrontOriginAccessIdentityCommand.ts";
import {
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput
} from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand.ts";
import {
  GetDistributionCommandInput,
  GetDistributionCommandOutput
} from "./commands/GetDistributionCommand.ts";
import {
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput
} from "./commands/GetDistributionConfigCommand.ts";
import {
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput
} from "./commands/GetFieldLevelEncryptionCommand.ts";
import {
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput
} from "./commands/GetFieldLevelEncryptionConfigCommand.ts";
import {
  GetFieldLevelEncryptionProfileCommandInput,
  GetFieldLevelEncryptionProfileCommandOutput
} from "./commands/GetFieldLevelEncryptionProfileCommand.ts";
import {
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput
} from "./commands/GetFieldLevelEncryptionProfileConfigCommand.ts";
import {
  GetInvalidationCommandInput,
  GetInvalidationCommandOutput
} from "./commands/GetInvalidationCommand.ts";
import {
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput
} from "./commands/GetPublicKeyCommand.ts";
import {
  GetPublicKeyConfigCommandInput,
  GetPublicKeyConfigCommandOutput
} from "./commands/GetPublicKeyConfigCommand.ts";
import {
  GetStreamingDistributionCommandInput,
  GetStreamingDistributionCommandOutput
} from "./commands/GetStreamingDistributionCommand.ts";
import {
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput
} from "./commands/GetStreamingDistributionConfigCommand.ts";
import {
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput
} from "./commands/ListCloudFrontOriginAccessIdentitiesCommand.ts";
import {
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput
} from "./commands/ListDistributionsByWebACLIdCommand.ts";
import {
  ListDistributionsCommandInput,
  ListDistributionsCommandOutput
} from "./commands/ListDistributionsCommand.ts";
import {
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput
} from "./commands/ListFieldLevelEncryptionConfigsCommand.ts";
import {
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput
} from "./commands/ListFieldLevelEncryptionProfilesCommand.ts";
import {
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput
} from "./commands/ListInvalidationsCommand.ts";
import {
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput
} from "./commands/ListPublicKeysCommand.ts";
import {
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput
} from "./commands/ListStreamingDistributionsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand.ts";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand.ts";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand.ts";
import {
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput
} from "./commands/UpdateCloudFrontOriginAccessIdentityCommand.ts";
import {
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput
} from "./commands/UpdateDistributionCommand.ts";
import {
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput
} from "./commands/UpdateFieldLevelEncryptionConfigCommand.ts";
import {
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput
} from "./commands/UpdateFieldLevelEncryptionProfileCommand.ts";
import {
  UpdatePublicKeyCommandInput,
  UpdatePublicKeyCommandOutput
} from "./commands/UpdatePublicKeyCommand.ts";
import {
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput
} from "./commands/UpdateStreamingDistributionCommand.ts";
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
  | CreateCloudFrontOriginAccessIdentityCommandInput
  | CreateDistributionCommandInput
  | CreateDistributionWithTagsCommandInput
  | CreateFieldLevelEncryptionConfigCommandInput
  | CreateFieldLevelEncryptionProfileCommandInput
  | CreateInvalidationCommandInput
  | CreatePublicKeyCommandInput
  | CreateStreamingDistributionCommandInput
  | CreateStreamingDistributionWithTagsCommandInput
  | DeleteCloudFrontOriginAccessIdentityCommandInput
  | DeleteDistributionCommandInput
  | DeleteFieldLevelEncryptionConfigCommandInput
  | DeleteFieldLevelEncryptionProfileCommandInput
  | DeletePublicKeyCommandInput
  | DeleteStreamingDistributionCommandInput
  | GetCloudFrontOriginAccessIdentityCommandInput
  | GetCloudFrontOriginAccessIdentityConfigCommandInput
  | GetDistributionCommandInput
  | GetDistributionConfigCommandInput
  | GetFieldLevelEncryptionCommandInput
  | GetFieldLevelEncryptionConfigCommandInput
  | GetFieldLevelEncryptionProfileCommandInput
  | GetFieldLevelEncryptionProfileConfigCommandInput
  | GetInvalidationCommandInput
  | GetPublicKeyCommandInput
  | GetPublicKeyConfigCommandInput
  | GetStreamingDistributionCommandInput
  | GetStreamingDistributionConfigCommandInput
  | ListCloudFrontOriginAccessIdentitiesCommandInput
  | ListDistributionsByWebACLIdCommandInput
  | ListDistributionsCommandInput
  | ListFieldLevelEncryptionConfigsCommandInput
  | ListFieldLevelEncryptionProfilesCommandInput
  | ListInvalidationsCommandInput
  | ListPublicKeysCommandInput
  | ListStreamingDistributionsCommandInput
  | ListTagsForResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCloudFrontOriginAccessIdentityCommandInput
  | UpdateDistributionCommandInput
  | UpdateFieldLevelEncryptionConfigCommandInput
  | UpdateFieldLevelEncryptionProfileCommandInput
  | UpdatePublicKeyCommandInput
  | UpdateStreamingDistributionCommandInput;

export type ServiceOutputTypes =
  | CreateCloudFrontOriginAccessIdentityCommandOutput
  | CreateDistributionCommandOutput
  | CreateDistributionWithTagsCommandOutput
  | CreateFieldLevelEncryptionConfigCommandOutput
  | CreateFieldLevelEncryptionProfileCommandOutput
  | CreateInvalidationCommandOutput
  | CreatePublicKeyCommandOutput
  | CreateStreamingDistributionCommandOutput
  | CreateStreamingDistributionWithTagsCommandOutput
  | DeleteCloudFrontOriginAccessIdentityCommandOutput
  | DeleteDistributionCommandOutput
  | DeleteFieldLevelEncryptionConfigCommandOutput
  | DeleteFieldLevelEncryptionProfileCommandOutput
  | DeletePublicKeyCommandOutput
  | DeleteStreamingDistributionCommandOutput
  | GetCloudFrontOriginAccessIdentityCommandOutput
  | GetCloudFrontOriginAccessIdentityConfigCommandOutput
  | GetDistributionCommandOutput
  | GetDistributionConfigCommandOutput
  | GetFieldLevelEncryptionCommandOutput
  | GetFieldLevelEncryptionConfigCommandOutput
  | GetFieldLevelEncryptionProfileCommandOutput
  | GetFieldLevelEncryptionProfileConfigCommandOutput
  | GetInvalidationCommandOutput
  | GetPublicKeyCommandOutput
  | GetPublicKeyConfigCommandOutput
  | GetStreamingDistributionCommandOutput
  | GetStreamingDistributionConfigCommandOutput
  | ListCloudFrontOriginAccessIdentitiesCommandOutput
  | ListDistributionsByWebACLIdCommandOutput
  | ListDistributionsCommandOutput
  | ListFieldLevelEncryptionConfigsCommandOutput
  | ListFieldLevelEncryptionProfilesCommandOutput
  | ListInvalidationsCommandOutput
  | ListPublicKeysCommandOutput
  | ListStreamingDistributionsCommandOutput
  | ListTagsForResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCloudFrontOriginAccessIdentityCommandOutput
  | UpdateDistributionCommandOutput
  | UpdateFieldLevelEncryptionConfigCommandOutput
  | UpdateFieldLevelEncryptionProfileCommandOutput
  | UpdatePublicKeyCommandOutput
  | UpdateStreamingDistributionCommandOutput;

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

export type CloudFrontClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CloudFrontClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>Amazon CloudFront</fullname>
 * 		       <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about
 * 			CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class CloudFrontClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudFrontClientResolvedConfig
> {
  readonly config: CloudFrontClientResolvedConfig;

  constructor(configuration: CloudFrontClientConfig) {
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
