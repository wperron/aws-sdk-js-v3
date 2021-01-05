import {
  AcceptQualificationRequestCommandInput,
  AcceptQualificationRequestCommandOutput,
} from "./commands/AcceptQualificationRequestCommand.ts";
import { ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput } from "./commands/ApproveAssignmentCommand.ts";
import {
  AssociateQualificationWithWorkerCommandInput,
  AssociateQualificationWithWorkerCommandOutput,
} from "./commands/AssociateQualificationWithWorkerCommand.ts";
import {
  CreateAdditionalAssignmentsForHITCommandInput,
  CreateAdditionalAssignmentsForHITCommandOutput,
} from "./commands/CreateAdditionalAssignmentsForHITCommand.ts";
import { CreateHITCommandInput, CreateHITCommandOutput } from "./commands/CreateHITCommand.ts";
import { CreateHITTypeCommandInput, CreateHITTypeCommandOutput } from "./commands/CreateHITTypeCommand.ts";
import {
  CreateHITWithHITTypeCommandInput,
  CreateHITWithHITTypeCommandOutput,
} from "./commands/CreateHITWithHITTypeCommand.ts";
import {
  CreateQualificationTypeCommandInput,
  CreateQualificationTypeCommandOutput,
} from "./commands/CreateQualificationTypeCommand.ts";
import { CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput } from "./commands/CreateWorkerBlockCommand.ts";
import { DeleteHITCommandInput, DeleteHITCommandOutput } from "./commands/DeleteHITCommand.ts";
import {
  DeleteQualificationTypeCommandInput,
  DeleteQualificationTypeCommandOutput,
} from "./commands/DeleteQualificationTypeCommand.ts";
import { DeleteWorkerBlockCommandInput, DeleteWorkerBlockCommandOutput } from "./commands/DeleteWorkerBlockCommand.ts";
import {
  DisassociateQualificationFromWorkerCommandInput,
  DisassociateQualificationFromWorkerCommandOutput,
} from "./commands/DisassociateQualificationFromWorkerCommand.ts";
import { GetAccountBalanceCommandInput, GetAccountBalanceCommandOutput } from "./commands/GetAccountBalanceCommand.ts";
import { GetAssignmentCommandInput, GetAssignmentCommandOutput } from "./commands/GetAssignmentCommand.ts";
import { GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput } from "./commands/GetFileUploadURLCommand.ts";
import { GetHITCommandInput, GetHITCommandOutput } from "./commands/GetHITCommand.ts";
import {
  GetQualificationScoreCommandInput,
  GetQualificationScoreCommandOutput,
} from "./commands/GetQualificationScoreCommand.ts";
import {
  GetQualificationTypeCommandInput,
  GetQualificationTypeCommandOutput,
} from "./commands/GetQualificationTypeCommand.ts";
import {
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
} from "./commands/ListAssignmentsForHITCommand.ts";
import { ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput } from "./commands/ListBonusPaymentsCommand.ts";
import { ListHITsCommandInput, ListHITsCommandOutput } from "./commands/ListHITsCommand.ts";
import {
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
} from "./commands/ListHITsForQualificationTypeCommand.ts";
import {
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
} from "./commands/ListQualificationRequestsCommand.ts";
import {
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
} from "./commands/ListQualificationTypesCommand.ts";
import {
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
} from "./commands/ListReviewPolicyResultsForHITCommand.ts";
import { ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput } from "./commands/ListReviewableHITsCommand.ts";
import { ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput } from "./commands/ListWorkerBlocksCommand.ts";
import {
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
} from "./commands/ListWorkersWithQualificationTypeCommand.ts";
import { NotifyWorkersCommandInput, NotifyWorkersCommandOutput } from "./commands/NotifyWorkersCommand.ts";
import { RejectAssignmentCommandInput, RejectAssignmentCommandOutput } from "./commands/RejectAssignmentCommand.ts";
import {
  RejectQualificationRequestCommandInput,
  RejectQualificationRequestCommandOutput,
} from "./commands/RejectQualificationRequestCommand.ts";
import { SendBonusCommandInput, SendBonusCommandOutput } from "./commands/SendBonusCommand.ts";
import {
  SendTestEventNotificationCommandInput,
  SendTestEventNotificationCommandOutput,
} from "./commands/SendTestEventNotificationCommand.ts";
import {
  UpdateExpirationForHITCommandInput,
  UpdateExpirationForHITCommandOutput,
} from "./commands/UpdateExpirationForHITCommand.ts";
import {
  UpdateHITReviewStatusCommandInput,
  UpdateHITReviewStatusCommandOutput,
} from "./commands/UpdateHITReviewStatusCommand.ts";
import { UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput } from "./commands/UpdateHITTypeOfHITCommand.ts";
import {
  UpdateNotificationSettingsCommandInput,
  UpdateNotificationSettingsCommandOutput,
} from "./commands/UpdateNotificationSettingsCommand.ts";
import {
  UpdateQualificationTypeCommandInput,
  UpdateQualificationTypeCommandOutput,
} from "./commands/UpdateQualificationTypeCommand.ts";
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
  | AcceptQualificationRequestCommandInput
  | ApproveAssignmentCommandInput
  | AssociateQualificationWithWorkerCommandInput
  | CreateAdditionalAssignmentsForHITCommandInput
  | CreateHITCommandInput
  | CreateHITTypeCommandInput
  | CreateHITWithHITTypeCommandInput
  | CreateQualificationTypeCommandInput
  | CreateWorkerBlockCommandInput
  | DeleteHITCommandInput
  | DeleteQualificationTypeCommandInput
  | DeleteWorkerBlockCommandInput
  | DisassociateQualificationFromWorkerCommandInput
  | GetAccountBalanceCommandInput
  | GetAssignmentCommandInput
  | GetFileUploadURLCommandInput
  | GetHITCommandInput
  | GetQualificationScoreCommandInput
  | GetQualificationTypeCommandInput
  | ListAssignmentsForHITCommandInput
  | ListBonusPaymentsCommandInput
  | ListHITsCommandInput
  | ListHITsForQualificationTypeCommandInput
  | ListQualificationRequestsCommandInput
  | ListQualificationTypesCommandInput
  | ListReviewPolicyResultsForHITCommandInput
  | ListReviewableHITsCommandInput
  | ListWorkerBlocksCommandInput
  | ListWorkersWithQualificationTypeCommandInput
  | NotifyWorkersCommandInput
  | RejectAssignmentCommandInput
  | RejectQualificationRequestCommandInput
  | SendBonusCommandInput
  | SendTestEventNotificationCommandInput
  | UpdateExpirationForHITCommandInput
  | UpdateHITReviewStatusCommandInput
  | UpdateHITTypeOfHITCommandInput
  | UpdateNotificationSettingsCommandInput
  | UpdateQualificationTypeCommandInput;

export type ServiceOutputTypes =
  | AcceptQualificationRequestCommandOutput
  | ApproveAssignmentCommandOutput
  | AssociateQualificationWithWorkerCommandOutput
  | CreateAdditionalAssignmentsForHITCommandOutput
  | CreateHITCommandOutput
  | CreateHITTypeCommandOutput
  | CreateHITWithHITTypeCommandOutput
  | CreateQualificationTypeCommandOutput
  | CreateWorkerBlockCommandOutput
  | DeleteHITCommandOutput
  | DeleteQualificationTypeCommandOutput
  | DeleteWorkerBlockCommandOutput
  | DisassociateQualificationFromWorkerCommandOutput
  | GetAccountBalanceCommandOutput
  | GetAssignmentCommandOutput
  | GetFileUploadURLCommandOutput
  | GetHITCommandOutput
  | GetQualificationScoreCommandOutput
  | GetQualificationTypeCommandOutput
  | ListAssignmentsForHITCommandOutput
  | ListBonusPaymentsCommandOutput
  | ListHITsCommandOutput
  | ListHITsForQualificationTypeCommandOutput
  | ListQualificationRequestsCommandOutput
  | ListQualificationTypesCommandOutput
  | ListReviewPolicyResultsForHITCommandOutput
  | ListReviewableHITsCommandOutput
  | ListWorkerBlocksCommandOutput
  | ListWorkersWithQualificationTypeCommandOutput
  | NotifyWorkersCommandOutput
  | RejectAssignmentCommandOutput
  | RejectQualificationRequestCommandOutput
  | SendBonusCommandOutput
  | SendTestEventNotificationCommandOutput
  | UpdateExpirationForHITCommandOutput
  | UpdateHITReviewStatusCommandOutput
  | UpdateHITTypeOfHITCommandOutput
  | UpdateNotificationSettingsCommandOutput
  | UpdateQualificationTypeCommandOutput;

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

export type MTurkClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig;

export type MTurkClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig;

/**
 * <fullname>Amazon Mechanical Turk API Reference</fullname>
 */
export class MTurkClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MTurkClientResolvedConfig
> {
  readonly config: MTurkClientResolvedConfig;

  constructor(configuration: MTurkClientConfig) {
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
