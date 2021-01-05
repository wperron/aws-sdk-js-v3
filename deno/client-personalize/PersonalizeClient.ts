import {
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput,
} from "./commands/CreateBatchInferenceJobCommand.ts";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "./commands/CreateCampaignCommand.ts";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand.ts";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "./commands/CreateDatasetGroupCommand.ts";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "./commands/CreateDatasetImportJobCommand.ts";
import { CreateEventTrackerCommandInput, CreateEventTrackerCommandOutput } from "./commands/CreateEventTrackerCommand.ts";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand.ts";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand.ts";
import { CreateSolutionCommandInput, CreateSolutionCommandOutput } from "./commands/CreateSolutionCommand.ts";
import {
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput,
} from "./commands/CreateSolutionVersionCommand.ts";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "./commands/DeleteCampaignCommand.ts";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand.ts";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "./commands/DeleteDatasetGroupCommand.ts";
import { DeleteEventTrackerCommandInput, DeleteEventTrackerCommandOutput } from "./commands/DeleteEventTrackerCommand.ts";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand.ts";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand.ts";
import { DeleteSolutionCommandInput, DeleteSolutionCommandOutput } from "./commands/DeleteSolutionCommand.ts";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "./commands/DescribeAlgorithmCommand.ts";
import {
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput,
} from "./commands/DescribeBatchInferenceJobCommand.ts";
import { DescribeCampaignCommandInput, DescribeCampaignCommandOutput } from "./commands/DescribeCampaignCommand.ts";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand.ts";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "./commands/DescribeDatasetGroupCommand.ts";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "./commands/DescribeDatasetImportJobCommand.ts";
import {
  DescribeEventTrackerCommandInput,
  DescribeEventTrackerCommandOutput,
} from "./commands/DescribeEventTrackerCommand.ts";
import {
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput,
} from "./commands/DescribeFeatureTransformationCommand.ts";
import { DescribeFilterCommandInput, DescribeFilterCommandOutput } from "./commands/DescribeFilterCommand.ts";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "./commands/DescribeRecipeCommand.ts";
import { DescribeSchemaCommandInput, DescribeSchemaCommandOutput } from "./commands/DescribeSchemaCommand.ts";
import { DescribeSolutionCommandInput, DescribeSolutionCommandOutput } from "./commands/DescribeSolutionCommand.ts";
import {
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput,
} from "./commands/DescribeSolutionVersionCommand.ts";
import { GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput } from "./commands/GetSolutionMetricsCommand.ts";
import {
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput,
} from "./commands/ListBatchInferenceJobsCommand.ts";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "./commands/ListCampaignsCommand.ts";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "./commands/ListDatasetGroupsCommand.ts";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "./commands/ListDatasetImportJobsCommand.ts";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand.ts";
import { ListEventTrackersCommandInput, ListEventTrackersCommandOutput } from "./commands/ListEventTrackersCommand.ts";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand.ts";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand.ts";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand.ts";
import {
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
} from "./commands/ListSolutionVersionsCommand.ts";
import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "./commands/ListSolutionsCommand.ts";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "./commands/UpdateCampaignCommand.ts";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig.ts";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "../config-resolver/mod.ts";
import { getContentLengthPlugin } from "../middleware-content-length/mod.ts";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "../middleware-host-header/mod.ts";
import { getLoggerPlugin } from "../middleware-logger/mod.ts";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "../middleware-retry/mod.ts";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "../middleware-signing/mod.ts";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "../middleware-user-agent/mod.ts";
import { HttpHandler as __HttpHandler } from "../protocol-http/mod.ts";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "../smithy-client/mod.ts";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateBatchInferenceJobCommandInput
  | CreateCampaignCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetGroupCommandInput
  | CreateDatasetImportJobCommandInput
  | CreateEventTrackerCommandInput
  | CreateFilterCommandInput
  | CreateSchemaCommandInput
  | CreateSolutionCommandInput
  | CreateSolutionVersionCommandInput
  | DeleteCampaignCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetGroupCommandInput
  | DeleteEventTrackerCommandInput
  | DeleteFilterCommandInput
  | DeleteSchemaCommandInput
  | DeleteSolutionCommandInput
  | DescribeAlgorithmCommandInput
  | DescribeBatchInferenceJobCommandInput
  | DescribeCampaignCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatasetGroupCommandInput
  | DescribeDatasetImportJobCommandInput
  | DescribeEventTrackerCommandInput
  | DescribeFeatureTransformationCommandInput
  | DescribeFilterCommandInput
  | DescribeRecipeCommandInput
  | DescribeSchemaCommandInput
  | DescribeSolutionCommandInput
  | DescribeSolutionVersionCommandInput
  | GetSolutionMetricsCommandInput
  | ListBatchInferenceJobsCommandInput
  | ListCampaignsCommandInput
  | ListDatasetGroupsCommandInput
  | ListDatasetImportJobsCommandInput
  | ListDatasetsCommandInput
  | ListEventTrackersCommandInput
  | ListFiltersCommandInput
  | ListRecipesCommandInput
  | ListSchemasCommandInput
  | ListSolutionVersionsCommandInput
  | ListSolutionsCommandInput
  | UpdateCampaignCommandInput;

export type ServiceOutputTypes =
  | CreateBatchInferenceJobCommandOutput
  | CreateCampaignCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetGroupCommandOutput
  | CreateDatasetImportJobCommandOutput
  | CreateEventTrackerCommandOutput
  | CreateFilterCommandOutput
  | CreateSchemaCommandOutput
  | CreateSolutionCommandOutput
  | CreateSolutionVersionCommandOutput
  | DeleteCampaignCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetGroupCommandOutput
  | DeleteEventTrackerCommandOutput
  | DeleteFilterCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteSolutionCommandOutput
  | DescribeAlgorithmCommandOutput
  | DescribeBatchInferenceJobCommandOutput
  | DescribeCampaignCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatasetGroupCommandOutput
  | DescribeDatasetImportJobCommandOutput
  | DescribeEventTrackerCommandOutput
  | DescribeFeatureTransformationCommandOutput
  | DescribeFilterCommandOutput
  | DescribeRecipeCommandOutput
  | DescribeSchemaCommandOutput
  | DescribeSolutionCommandOutput
  | DescribeSolutionVersionCommandOutput
  | GetSolutionMetricsCommandOutput
  | ListBatchInferenceJobsCommandOutput
  | ListCampaignsCommandOutput
  | ListDatasetGroupsCommandOutput
  | ListDatasetImportJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListEventTrackersCommandOutput
  | ListFiltersCommandOutput
  | ListRecipesCommandOutput
  | ListSchemasCommandOutput
  | ListSolutionVersionsCommandOutput
  | ListSolutionsCommandOutput
  | UpdateCampaignCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

export type PersonalizeClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;

export type PersonalizeClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 */
export class PersonalizeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PersonalizeClientResolvedConfig
> {
  readonly config: PersonalizeClientResolvedConfig;

  constructor(configuration: PersonalizeClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveHostHeaderConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
