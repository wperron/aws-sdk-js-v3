import {
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
} from "./commands/CreateConnectorProfileCommand.ts";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand.ts";
import {
  DeleteConnectorProfileCommandInput,
  DeleteConnectorProfileCommandOutput,
} from "./commands/DeleteConnectorProfileCommand.ts";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand.ts";
import {
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
} from "./commands/DescribeConnectorEntityCommand.ts";
import {
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "./commands/DescribeConnectorProfilesCommand.ts";
import { DescribeConnectorsCommandInput, DescribeConnectorsCommandOutput } from "./commands/DescribeConnectorsCommand.ts";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "./commands/DescribeFlowCommand.ts";
import {
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "./commands/DescribeFlowExecutionRecordsCommand.ts";
import {
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
} from "./commands/ListConnectorEntitiesCommand.ts";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand.ts";
import { StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand.ts";
import { StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand.ts";
import {
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
} from "./commands/UpdateConnectorProfileCommand.ts";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand.ts";
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
} from "../types/mod.ts";

export type ServiceInputTypes =
  | CreateConnectorProfileCommandInput
  | CreateFlowCommandInput
  | DeleteConnectorProfileCommandInput
  | DeleteFlowCommandInput
  | DescribeConnectorEntityCommandInput
  | DescribeConnectorProfilesCommandInput
  | DescribeConnectorsCommandInput
  | DescribeFlowCommandInput
  | DescribeFlowExecutionRecordsCommandInput
  | ListConnectorEntitiesCommandInput
  | ListFlowsCommandInput
  | ListTagsForResourceCommandInput
  | StartFlowCommandInput
  | StopFlowCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConnectorProfileCommandInput
  | UpdateFlowCommandInput;

export type ServiceOutputTypes =
  | CreateConnectorProfileCommandOutput
  | CreateFlowCommandOutput
  | DeleteConnectorProfileCommandOutput
  | DeleteFlowCommandOutput
  | DescribeConnectorEntityCommandOutput
  | DescribeConnectorProfilesCommandOutput
  | DescribeConnectorsCommandOutput
  | DescribeFlowCommandOutput
  | DescribeFlowExecutionRecordsCommandOutput
  | ListConnectorEntitiesCommandOutput
  | ListFlowsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartFlowCommandOutput
  | StopFlowCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConnectorProfileCommandOutput
  | UpdateFlowCommandOutput;

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
}

export type AppflowClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type AppflowClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p>
 *
 *          <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift. </p>
 *
 *
 *
 *          <p>Use the following links to get started on the Amazon AppFlow API:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *
 *          <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p>
 *          <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm">
 *                <i>Authorize Apps with OAuth</i>
 *             </a> documentation.</p>
 */
export class AppflowClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppflowClientResolvedConfig
> {
  readonly config: AppflowClientResolvedConfig;

  constructor(configuration: AppflowClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
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
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
