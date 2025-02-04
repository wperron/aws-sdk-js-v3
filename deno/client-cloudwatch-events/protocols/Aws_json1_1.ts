import {
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
} from "../commands/ActivateEventSourceCommand.ts";
import { CancelReplayCommandInput, CancelReplayCommandOutput } from "../commands/CancelReplayCommand.ts";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "../commands/CreateArchiveCommand.ts";
import { CreateEventBusCommandInput, CreateEventBusCommandOutput } from "../commands/CreateEventBusCommand.ts";
import {
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
} from "../commands/CreatePartnerEventSourceCommand.ts";
import {
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
} from "../commands/DeactivateEventSourceCommand.ts";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "../commands/DeleteArchiveCommand.ts";
import { DeleteEventBusCommandInput, DeleteEventBusCommandOutput } from "../commands/DeleteEventBusCommand.ts";
import {
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
} from "../commands/DeletePartnerEventSourceCommand.ts";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand.ts";
import { DescribeArchiveCommandInput, DescribeArchiveCommandOutput } from "../commands/DescribeArchiveCommand.ts";
import { DescribeEventBusCommandInput, DescribeEventBusCommandOutput } from "../commands/DescribeEventBusCommand.ts";
import {
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
} from "../commands/DescribeEventSourceCommand.ts";
import {
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
} from "../commands/DescribePartnerEventSourceCommand.ts";
import { DescribeReplayCommandInput, DescribeReplayCommandOutput } from "../commands/DescribeReplayCommand.ts";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "../commands/DescribeRuleCommand.ts";
import { DisableRuleCommandInput, DisableRuleCommandOutput } from "../commands/DisableRuleCommand.ts";
import { EnableRuleCommandInput, EnableRuleCommandOutput } from "../commands/EnableRuleCommand.ts";
import { ListArchivesCommandInput, ListArchivesCommandOutput } from "../commands/ListArchivesCommand.ts";
import { ListEventBusesCommandInput, ListEventBusesCommandOutput } from "../commands/ListEventBusesCommand.ts";
import { ListEventSourcesCommandInput, ListEventSourcesCommandOutput } from "../commands/ListEventSourcesCommand.ts";
import {
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
} from "../commands/ListPartnerEventSourceAccountsCommand.ts";
import {
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
} from "../commands/ListPartnerEventSourcesCommand.ts";
import { ListReplaysCommandInput, ListReplaysCommandOutput } from "../commands/ListReplaysCommand.ts";
import {
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
} from "../commands/ListRuleNamesByTargetCommand.ts";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand.ts";
import { ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput } from "../commands/ListTargetsByRuleCommand.ts";
import { PutEventsCommandInput, PutEventsCommandOutput } from "../commands/PutEventsCommand.ts";
import { PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput } from "../commands/PutPartnerEventsCommand.ts";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "../commands/PutPermissionCommand.ts";
import { PutRuleCommandInput, PutRuleCommandOutput } from "../commands/PutRuleCommand.ts";
import { PutTargetsCommandInput, PutTargetsCommandOutput } from "../commands/PutTargetsCommand.ts";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand.ts";
import { RemoveTargetsCommandInput, RemoveTargetsCommandOutput } from "../commands/RemoveTargetsCommand.ts";
import { StartReplayCommandInput, StartReplayCommandOutput } from "../commands/StartReplayCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand.ts";
import { TestEventPatternCommandInput, TestEventPatternCommandOutput } from "../commands/TestEventPatternCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand.ts";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "../commands/UpdateArchiveCommand.ts";
import {
  ActivateEventSourceRequest,
  Archive,
  AwsVpcConfiguration,
  BatchArrayProperties,
  BatchParameters,
  BatchRetryStrategy,
  CancelReplayRequest,
  CancelReplayResponse,
  ConcurrentModificationException,
  Condition,
  CreateArchiveRequest,
  CreateArchiveResponse,
  CreateEventBusRequest,
  CreateEventBusResponse,
  CreatePartnerEventSourceRequest,
  CreatePartnerEventSourceResponse,
  DeactivateEventSourceRequest,
  DeadLetterConfig,
  DeleteArchiveRequest,
  DeleteArchiveResponse,
  DeleteEventBusRequest,
  DeletePartnerEventSourceRequest,
  DeleteRuleRequest,
  DescribeArchiveRequest,
  DescribeArchiveResponse,
  DescribeEventBusRequest,
  DescribeEventBusResponse,
  DescribeEventSourceRequest,
  DescribeEventSourceResponse,
  DescribePartnerEventSourceRequest,
  DescribePartnerEventSourceResponse,
  DescribeReplayRequest,
  DescribeReplayResponse,
  DescribeRuleRequest,
  DescribeRuleResponse,
  DisableRuleRequest,
  EcsParameters,
  EnableRuleRequest,
  EventBus,
  EventSource,
  HttpParameters,
  IllegalStatusException,
  InputTransformer,
  InternalException,
  InvalidEventPatternException,
  InvalidStateException,
  KinesisParameters,
  LimitExceededException,
  ListArchivesRequest,
  ListArchivesResponse,
  ListEventBusesRequest,
  ListEventBusesResponse,
  ListEventSourcesRequest,
  ListEventSourcesResponse,
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsResponse,
  ListPartnerEventSourcesRequest,
  ListPartnerEventSourcesResponse,
  ListReplaysRequest,
  ListReplaysResponse,
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTargetsByRuleRequest,
  ListTargetsByRuleResponse,
  ManagedRuleException,
  NetworkConfiguration,
  OperationDisabledException,
  PartnerEventSource,
  PartnerEventSourceAccount,
  PolicyLengthExceededException,
  PutEventsRequest,
  PutEventsRequestEntry,
  PutEventsResponse,
  PutEventsResultEntry,
  PutPartnerEventsRequest,
  PutPartnerEventsRequestEntry,
  PutPartnerEventsResponse,
  PutPartnerEventsResultEntry,
  PutPermissionRequest,
  PutRuleRequest,
  PutRuleResponse,
  PutTargetsRequest,
  PutTargetsResponse,
  PutTargetsResultEntry,
  RedshiftDataParameters,
  RemovePermissionRequest,
  RemoveTargetsRequest,
  RemoveTargetsResponse,
  RemoveTargetsResultEntry,
  Replay,
  ReplayDestination,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RetryPolicy,
  Rule,
  RunCommandParameters,
  RunCommandTarget,
  SqsParameters,
  StartReplayRequest,
  StartReplayResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  Target,
  TestEventPatternRequest,
  TestEventPatternResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateArchiveRequest,
  UpdateArchiveResponse,
} from "../models/models_0.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { SmithyException as __SmithyException } from "../../smithy-client/mod.ts";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export const serializeAws_json1_1ActivateEventSourceCommand = async (
  input: ActivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ActivateEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ActivateEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelReplayCommand = async (
  input: CancelReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.CancelReplay",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelReplayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateArchiveCommand = async (
  input: CreateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.CreateArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEventBusCommand = async (
  input: CreateEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.CreateEventBus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePartnerEventSourceCommand = async (
  input: CreatePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.CreatePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeactivateEventSourceCommand = async (
  input: DeactivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeactivateEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeactivateEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteArchiveCommand = async (
  input: DeleteArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeleteArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventBusCommand = async (
  input: DeleteEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeleteEventBus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePartnerEventSourceCommand = async (
  input: DeletePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeletePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeleteRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeArchiveCommand = async (
  input: DescribeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribeArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventBusCommand = async (
  input: DescribeEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribeEventBus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventSourceCommand = async (
  input: DescribeEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribeEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePartnerEventSourceCommand = async (
  input: DescribePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplayCommand = async (
  input: DescribeReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribeReplay",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRuleCommand = async (
  input: DescribeRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribeRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableRuleCommand = async (
  input: DisableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DisableRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableRuleCommand = async (
  input: EnableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.EnableRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListArchivesCommand = async (
  input: ListArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListArchives",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListArchivesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventBusesCommand = async (
  input: ListEventBusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListEventBuses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventBusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventSourcesCommand = async (
  input: ListEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListEventSources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventSourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPartnerEventSourceAccountsCommand = async (
  input: ListPartnerEventSourceAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListPartnerEventSourceAccounts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPartnerEventSourceAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPartnerEventSourcesCommand = async (
  input: ListPartnerEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListPartnerEventSources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPartnerEventSourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReplaysCommand = async (
  input: ListReplaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListReplays",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReplaysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRuleNamesByTargetCommand = async (
  input: ListRuleNamesByTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListRuleNamesByTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRuleNamesByTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTargetsByRuleCommand = async (
  input: ListTargetsByRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListTargetsByRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTargetsByRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPartnerEventsCommand = async (
  input: PutPartnerEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutPartnerEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPartnerEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPermissionCommand = async (
  input: PutPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutPermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRuleCommand = async (
  input: PutRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutTargetsCommand = async (
  input: PutTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.RemovePermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemovePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTargetsCommand = async (
  input: RemoveTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.RemoveTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartReplayCommand = async (
  input: StartReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.StartReplay",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartReplayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestEventPatternCommand = async (
  input: TestEventPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.TestEventPattern",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestEventPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateArchiveCommand = async (
  input: UpdateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.UpdateArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ActivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ActivateEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ActivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ActivateEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.cloudwatchevents#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CancelReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelReplayResponse(data, context);
  const response: CancelReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalStatusException":
    case "com.amazonaws.cloudwatchevents#IllegalStatusException":
      response = {
        ...(await deserializeAws_json1_1IllegalStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateArchiveResponse(data, context);
  const response: CreateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.cloudwatchevents#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEventBusResponse(data, context);
  const response: CreateEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.cloudwatchevents#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreatePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePartnerEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePartnerEventSourceResponse(data, context);
  const response: CreatePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeactivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeactivateEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeactivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeactivateEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.cloudwatchevents#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteArchiveResponse(data, context);
  const response: DeleteArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEventBusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeletePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePartnerEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeArchiveResponse(data, context);
  const response: DescribeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventBusResponse(data, context);
  const response: DescribeEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventSourceResponse(data, context);
  const response: DescribeEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePartnerEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePartnerEventSourceResponse(data, context);
  const response: DescribePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplayResponse(data, context);
  const response: DescribeReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRuleResponse(data, context);
  const response: DescribeRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1EnableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListArchivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchivesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListArchivesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListArchivesResponse(data, context);
  const response: ListArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListArchivesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchivesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListEventBusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventBusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventBusesResponse(data, context);
  const response: ListEventBusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventBusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventSourcesResponse(data, context);
  const response: ListEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListPartnerEventSourceAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPartnerEventSourceAccountsResponse(data, context);
  const response: ListPartnerEventSourceAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListPartnerEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPartnerEventSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPartnerEventSourcesResponse(data, context);
  const response: ListPartnerEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPartnerEventSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListReplaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReplaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReplaysResponse(data, context);
  const response: ListReplaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReplaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListRuleNamesByTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRuleNamesByTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRuleNamesByTargetResponse(data, context);
  const response: ListRuleNamesByTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRuleNamesByTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRulesResponse(data, context);
  const response: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTargetsByRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTargetsByRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTargetsByRuleResponse(data, context);
  const response: ListTargetsByRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTargetsByRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEventsResponse(data, context);
  const response: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutPartnerEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPartnerEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPartnerEventsResponse(data, context);
  const response: PutPartnerEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPartnerEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyLengthExceededException":
    case "com.amazonaws.cloudwatchevents#PolicyLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1PolicyLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRuleResponse(data, context);
  const response: PutRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.cloudwatchevents#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutTargetsResponse(data, context);
  const response: PutTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemovePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.cloudwatchevents#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RemoveTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTargetsResponse(data, context);
  const response: RemoveTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartReplayResponse(data, context);
  const response: StartReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.cloudwatchevents#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TestEventPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestEventPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestEventPatternResponse(data, context);
  const response: TestEventPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestEventPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.cloudwatchevents#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateArchiveResponse(data, context);
  const response: UpdateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.cloudwatchevents#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IllegalStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalStatusException(body, context);
  const contents: IllegalStatusException = {
    name: "IllegalStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(body, context);
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidEventPatternExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventPatternException(body, context);
  const contents: InvalidEventPatternException = {
    name: "InvalidEventPatternException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(body, context);
  const contents: InvalidStateException = {
    name: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ManagedRuleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ManagedRuleException(body, context);
  const contents: ManagedRuleException = {
    name: "ManagedRuleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationDisabledException(body, context);
  const contents: OperationDisabledException = {
    name: "OperationDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PolicyLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyLengthExceededException(body, context);
  const contents: PolicyLengthExceededException = {
    name: "PolicyLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ActivateEventSourceRequest = (
  input: ActivateEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1AwsVpcConfiguration = (input: AwsVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AssignPublicIp !== undefined &&
      input.AssignPublicIp !== null && { AssignPublicIp: input.AssignPublicIp }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_json1_1StringList(input.SecurityGroups, context),
      }),
    ...(input.Subnets !== undefined &&
      input.Subnets !== null && { Subnets: serializeAws_json1_1StringList(input.Subnets, context) }),
  };
};

const serializeAws_json1_1BatchArrayProperties = (input: BatchArrayProperties, context: __SerdeContext): any => {
  return {
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
  };
};

const serializeAws_json1_1BatchParameters = (input: BatchParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArrayProperties !== undefined &&
      input.ArrayProperties !== null && {
        ArrayProperties: serializeAws_json1_1BatchArrayProperties(input.ArrayProperties, context),
      }),
    ...(input.JobDefinition !== undefined && input.JobDefinition !== null && { JobDefinition: input.JobDefinition }),
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.RetryStrategy !== undefined &&
      input.RetryStrategy !== null && {
        RetryStrategy: serializeAws_json1_1BatchRetryStrategy(input.RetryStrategy, context),
      }),
  };
};

const serializeAws_json1_1BatchRetryStrategy = (input: BatchRetryStrategy, context: __SerdeContext): any => {
  return {
    ...(input.Attempts !== undefined && input.Attempts !== null && { Attempts: input.Attempts }),
  };
};

const serializeAws_json1_1CancelReplayRequest = (input: CancelReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
  };
};

const serializeAws_json1_1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CreateArchiveRequest = (input: CreateArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
    ...(input.EventSourceArn !== undefined &&
      input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
    ...(input.RetentionDays !== undefined && input.RetentionDays !== null && { RetentionDays: input.RetentionDays }),
  };
};

const serializeAws_json1_1CreateEventBusRequest = (input: CreateEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceName !== undefined &&
      input.EventSourceName !== null && { EventSourceName: input.EventSourceName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePartnerEventSourceRequest = (
  input: CreatePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Account !== undefined && input.Account !== null && { Account: input.Account }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeactivateEventSourceRequest = (
  input: DeactivateEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeadLetterConfig = (input: DeadLetterConfig, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
  };
};

const serializeAws_json1_1DeleteArchiveRequest = (input: DeleteArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
  };
};

const serializeAws_json1_1DeleteEventBusRequest = (input: DeleteEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeletePartnerEventSourceRequest = (
  input: DeletePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Account !== undefined && input.Account !== null && { Account: input.Account }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteRuleRequest = (input: DeleteRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeArchiveRequest = (input: DescribeArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
  };
};

const serializeAws_json1_1DescribeEventBusRequest = (input: DescribeEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeEventSourceRequest = (
  input: DescribeEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribePartnerEventSourceRequest = (
  input: DescribePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeReplayRequest = (input: DescribeReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
  };
};

const serializeAws_json1_1DescribeRuleRequest = (input: DescribeRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DisableRuleRequest = (input: DisableRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1EcsParameters = (input: EcsParameters, context: __SerdeContext): any => {
  return {
    ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
    ...(input.LaunchType !== undefined && input.LaunchType !== null && { LaunchType: input.LaunchType }),
    ...(input.NetworkConfiguration !== undefined &&
      input.NetworkConfiguration !== null && {
        NetworkConfiguration: serializeAws_json1_1NetworkConfiguration(input.NetworkConfiguration, context),
      }),
    ...(input.PlatformVersion !== undefined &&
      input.PlatformVersion !== null && { PlatformVersion: input.PlatformVersion }),
    ...(input.TaskCount !== undefined && input.TaskCount !== null && { TaskCount: input.TaskCount }),
    ...(input.TaskDefinitionArn !== undefined &&
      input.TaskDefinitionArn !== null && { TaskDefinitionArn: input.TaskDefinitionArn }),
  };
};

const serializeAws_json1_1EnableRuleRequest = (input: EnableRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1EventResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1HeaderParametersMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1HttpParameters = (input: HttpParameters, context: __SerdeContext): any => {
  return {
    ...(input.HeaderParameters !== undefined &&
      input.HeaderParameters !== null && {
        HeaderParameters: serializeAws_json1_1HeaderParametersMap(input.HeaderParameters, context),
      }),
    ...(input.PathParameterValues !== undefined &&
      input.PathParameterValues !== null && {
        PathParameterValues: serializeAws_json1_1PathParameterList(input.PathParameterValues, context),
      }),
    ...(input.QueryStringParameters !== undefined &&
      input.QueryStringParameters !== null && {
        QueryStringParameters: serializeAws_json1_1QueryStringParametersMap(input.QueryStringParameters, context),
      }),
  };
};

const serializeAws_json1_1InputTransformer = (input: InputTransformer, context: __SerdeContext): any => {
  return {
    ...(input.InputPathsMap !== undefined &&
      input.InputPathsMap !== null && {
        InputPathsMap: serializeAws_json1_1TransformerPaths(input.InputPathsMap, context),
      }),
    ...(input.InputTemplate !== undefined && input.InputTemplate !== null && { InputTemplate: input.InputTemplate }),
  };
};

const serializeAws_json1_1KinesisParameters = (input: KinesisParameters, context: __SerdeContext): any => {
  return {
    ...(input.PartitionKeyPath !== undefined &&
      input.PartitionKeyPath !== null && { PartitionKeyPath: input.PartitionKeyPath }),
  };
};

const serializeAws_json1_1ListArchivesRequest = (input: ListArchivesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceArn !== undefined &&
      input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_json1_1ListEventBusesRequest = (input: ListEventBusesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEventSourcesRequest = (input: ListEventSourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPartnerEventSourceAccountsRequest = (
  input: ListPartnerEventSourceAccountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventSourceName !== undefined &&
      input.EventSourceName !== null && { EventSourceName: input.EventSourceName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPartnerEventSourcesRequest = (
  input: ListPartnerEventSourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListReplaysRequest = (input: ListReplaysRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceArn !== undefined &&
      input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_json1_1ListRuleNamesByTargetRequest = (
  input: ListRuleNamesByTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }),
  };
};

const serializeAws_json1_1ListRulesRequest = (input: ListRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListTargetsByRuleRequest = (
  input: ListTargetsByRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
  };
};

const serializeAws_json1_1NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.awsvpcConfiguration !== undefined &&
      input.awsvpcConfiguration !== null && {
        awsvpcConfiguration: serializeAws_json1_1AwsVpcConfiguration(input.awsvpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_1PathParameterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PutEventsRequest = (input: PutEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Entries !== undefined &&
      input.Entries !== null && { Entries: serializeAws_json1_1PutEventsRequestEntryList(input.Entries, context) }),
  };
};

const serializeAws_json1_1PutEventsRequestEntry = (input: PutEventsRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.Detail !== undefined && input.Detail !== null && { Detail: input.Detail }),
    ...(input.DetailType !== undefined && input.DetailType !== null && { DetailType: input.DetailType }),
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_json1_1EventResourceList(input.Resources, context) }),
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    ...(input.Time !== undefined && input.Time !== null && { Time: Math.round(input.Time.getTime() / 1000) }),
  };
};

const serializeAws_json1_1PutEventsRequestEntryList = (
  input: PutEventsRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PutEventsRequestEntry(entry, context);
    });
};

const serializeAws_json1_1PutPartnerEventsRequest = (input: PutPartnerEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Entries !== undefined &&
      input.Entries !== null && {
        Entries: serializeAws_json1_1PutPartnerEventsRequestEntryList(input.Entries, context),
      }),
  };
};

const serializeAws_json1_1PutPartnerEventsRequestEntry = (
  input: PutPartnerEventsRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Detail !== undefined && input.Detail !== null && { Detail: input.Detail }),
    ...(input.DetailType !== undefined && input.DetailType !== null && { DetailType: input.DetailType }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_json1_1EventResourceList(input.Resources, context) }),
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    ...(input.Time !== undefined && input.Time !== null && { Time: Math.round(input.Time.getTime() / 1000) }),
  };
};

const serializeAws_json1_1PutPartnerEventsRequestEntryList = (
  input: PutPartnerEventsRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PutPartnerEventsRequestEntry(entry, context);
    });
};

const serializeAws_json1_1PutPermissionRequest = (input: PutPermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Condition !== undefined &&
      input.Condition !== null && { Condition: serializeAws_json1_1Condition(input.Condition, context) }),
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
    ...(input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId }),
  };
};

const serializeAws_json1_1PutRuleRequest = (input: PutRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.ScheduleExpression !== undefined &&
      input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1PutTargetsRequest = (input: PutTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
    ...(input.Targets !== undefined &&
      input.Targets !== null && { Targets: serializeAws_json1_1TargetList(input.Targets, context) }),
  };
};

const serializeAws_json1_1QueryStringParametersMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1RedshiftDataParameters = (input: RedshiftDataParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
    ...(input.SecretManagerArn !== undefined &&
      input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.Sql !== undefined && input.Sql !== null && { Sql: input.Sql }),
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WithEvent !== undefined && input.WithEvent !== null && { WithEvent: input.WithEvent }),
  };
};

const serializeAws_json1_1RemovePermissionRequest = (input: RemovePermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.RemoveAllPermissions !== undefined &&
      input.RemoveAllPermissions !== null && { RemoveAllPermissions: input.RemoveAllPermissions }),
    ...(input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId }),
  };
};

const serializeAws_json1_1RemoveTargetsRequest = (input: RemoveTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
    ...(input.Ids !== undefined && input.Ids !== null && { Ids: serializeAws_json1_1TargetIdList(input.Ids, context) }),
    ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
  };
};

const serializeAws_json1_1ReplayDestination = (input: ReplayDestination, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.FilterArns !== undefined &&
      input.FilterArns !== null && {
        FilterArns: serializeAws_json1_1ReplayDestinationFilters(input.FilterArns, context),
      }),
  };
};

const serializeAws_json1_1ReplayDestinationFilters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RetryPolicy = (input: RetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaximumEventAgeInSeconds !== undefined &&
      input.MaximumEventAgeInSeconds !== null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
    ...(input.MaximumRetryAttempts !== undefined &&
      input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
  };
};

const serializeAws_json1_1RunCommandParameters = (input: RunCommandParameters, context: __SerdeContext): any => {
  return {
    ...(input.RunCommandTargets !== undefined &&
      input.RunCommandTargets !== null && {
        RunCommandTargets: serializeAws_json1_1RunCommandTargets(input.RunCommandTargets, context),
      }),
  };
};

const serializeAws_json1_1RunCommandTarget = (input: RunCommandTarget, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1RunCommandTargetValues(input.Values, context) }),
  };
};

const serializeAws_json1_1RunCommandTargets = (input: RunCommandTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RunCommandTarget(entry, context);
    });
};

const serializeAws_json1_1RunCommandTargetValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SqsParameters = (input: SqsParameters, context: __SerdeContext): any => {
  return {
    ...(input.MessageGroupId !== undefined &&
      input.MessageGroupId !== null && { MessageGroupId: input.MessageGroupId }),
  };
};

const serializeAws_json1_1StartReplayRequest = (input: StartReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Destination !== undefined &&
      input.Destination !== null && { Destination: serializeAws_json1_1ReplayDestination(input.Destination, context) }),
    ...(input.EventEndTime !== undefined &&
      input.EventEndTime !== null && { EventEndTime: Math.round(input.EventEndTime.getTime() / 1000) }),
    ...(input.EventSourceArn !== undefined &&
      input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
    ...(input.EventStartTime !== undefined &&
      input.EventStartTime !== null && { EventStartTime: Math.round(input.EventStartTime.getTime() / 1000) }),
    ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.BatchParameters !== undefined &&
      input.BatchParameters !== null && {
        BatchParameters: serializeAws_json1_1BatchParameters(input.BatchParameters, context),
      }),
    ...(input.DeadLetterConfig !== undefined &&
      input.DeadLetterConfig !== null && {
        DeadLetterConfig: serializeAws_json1_1DeadLetterConfig(input.DeadLetterConfig, context),
      }),
    ...(input.EcsParameters !== undefined &&
      input.EcsParameters !== null && {
        EcsParameters: serializeAws_json1_1EcsParameters(input.EcsParameters, context),
      }),
    ...(input.HttpParameters !== undefined &&
      input.HttpParameters !== null && {
        HttpParameters: serializeAws_json1_1HttpParameters(input.HttpParameters, context),
      }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Input !== undefined && input.Input !== null && { Input: input.Input }),
    ...(input.InputPath !== undefined && input.InputPath !== null && { InputPath: input.InputPath }),
    ...(input.InputTransformer !== undefined &&
      input.InputTransformer !== null && {
        InputTransformer: serializeAws_json1_1InputTransformer(input.InputTransformer, context),
      }),
    ...(input.KinesisParameters !== undefined &&
      input.KinesisParameters !== null && {
        KinesisParameters: serializeAws_json1_1KinesisParameters(input.KinesisParameters, context),
      }),
    ...(input.RedshiftDataParameters !== undefined &&
      input.RedshiftDataParameters !== null && {
        RedshiftDataParameters: serializeAws_json1_1RedshiftDataParameters(input.RedshiftDataParameters, context),
      }),
    ...(input.RetryPolicy !== undefined &&
      input.RetryPolicy !== null && { RetryPolicy: serializeAws_json1_1RetryPolicy(input.RetryPolicy, context) }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.RunCommandParameters !== undefined &&
      input.RunCommandParameters !== null && {
        RunCommandParameters: serializeAws_json1_1RunCommandParameters(input.RunCommandParameters, context),
      }),
    ...(input.SqsParameters !== undefined &&
      input.SqsParameters !== null && {
        SqsParameters: serializeAws_json1_1SqsParameters(input.SqsParameters, context),
      }),
  };
};

const serializeAws_json1_1TargetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TargetList = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Target(entry, context);
    });
};

const serializeAws_json1_1TestEventPatternRequest = (input: TestEventPatternRequest, context: __SerdeContext): any => {
  return {
    ...(input.Event !== undefined && input.Event !== null && { Event: input.Event }),
    ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
  };
};

const serializeAws_json1_1TransformerPaths = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateArchiveRequest = (input: UpdateArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
    ...(input.RetentionDays !== undefined && input.RetentionDays !== null && { RetentionDays: input.RetentionDays }),
  };
};

const deserializeAws_json1_1Archive = (output: any, context: __SerdeContext): Archive => {
  return {
    ArchiveName: output.ArchiveName !== undefined && output.ArchiveName !== null ? output.ArchiveName : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    EventCount: output.EventCount !== undefined && output.EventCount !== null ? output.EventCount : undefined,
    EventSourceArn:
      output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
    RetentionDays:
      output.RetentionDays !== undefined && output.RetentionDays !== null ? output.RetentionDays : undefined,
    SizeBytes: output.SizeBytes !== undefined && output.SizeBytes !== null ? output.SizeBytes : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_json1_1ArchiveResponseList = (output: any, context: __SerdeContext): Archive[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Archive(entry, context);
    });
};

const deserializeAws_json1_1AwsVpcConfiguration = (output: any, context: __SerdeContext): AwsVpcConfiguration => {
  return {
    AssignPublicIp:
      output.AssignPublicIp !== undefined && output.AssignPublicIp !== null ? output.AssignPublicIp : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_json1_1StringList(output.SecurityGroups, context)
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_json1_1StringList(output.Subnets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchArrayProperties = (output: any, context: __SerdeContext): BatchArrayProperties => {
  return {
    Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
  } as any;
};

const deserializeAws_json1_1BatchParameters = (output: any, context: __SerdeContext): BatchParameters => {
  return {
    ArrayProperties:
      output.ArrayProperties !== undefined && output.ArrayProperties !== null
        ? deserializeAws_json1_1BatchArrayProperties(output.ArrayProperties, context)
        : undefined,
    JobDefinition:
      output.JobDefinition !== undefined && output.JobDefinition !== null ? output.JobDefinition : undefined,
    JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    RetryStrategy:
      output.RetryStrategy !== undefined && output.RetryStrategy !== null
        ? deserializeAws_json1_1BatchRetryStrategy(output.RetryStrategy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchRetryStrategy = (output: any, context: __SerdeContext): BatchRetryStrategy => {
  return {
    Attempts: output.Attempts !== undefined && output.Attempts !== null ? output.Attempts : undefined,
  } as any;
};

const deserializeAws_json1_1CancelReplayResponse = (output: any, context: __SerdeContext): CancelReplayResponse => {
  return {
    ReplayArn: output.ReplayArn !== undefined && output.ReplayArn !== null ? output.ReplayArn : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1CreateArchiveResponse = (output: any, context: __SerdeContext): CreateArchiveResponse => {
  return {
    ArchiveArn: output.ArchiveArn !== undefined && output.ArchiveArn !== null ? output.ArchiveArn : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_json1_1CreateEventBusResponse = (output: any, context: __SerdeContext): CreateEventBusResponse => {
  return {
    EventBusArn: output.EventBusArn !== undefined && output.EventBusArn !== null ? output.EventBusArn : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): CreatePartnerEventSourceResponse => {
  return {
    EventSourceArn:
      output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
  } as any;
};

const deserializeAws_json1_1DeadLetterConfig = (output: any, context: __SerdeContext): DeadLetterConfig => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteArchiveResponse = (output: any, context: __SerdeContext): DeleteArchiveResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeArchiveResponse = (
  output: any,
  context: __SerdeContext
): DescribeArchiveResponse => {
  return {
    ArchiveArn: output.ArchiveArn !== undefined && output.ArchiveArn !== null ? output.ArchiveArn : undefined,
    ArchiveName: output.ArchiveName !== undefined && output.ArchiveName !== null ? output.ArchiveName : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EventCount: output.EventCount !== undefined && output.EventCount !== null ? output.EventCount : undefined,
    EventPattern: output.EventPattern !== undefined && output.EventPattern !== null ? output.EventPattern : undefined,
    EventSourceArn:
      output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
    RetentionDays:
      output.RetentionDays !== undefined && output.RetentionDays !== null ? output.RetentionDays : undefined,
    SizeBytes: output.SizeBytes !== undefined && output.SizeBytes !== null ? output.SizeBytes : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventBusResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventBusResponse => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventSourceResponse => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? new Date(Math.round(output.ExpirationTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribePartnerEventSourceResponse => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReplayResponse = (output: any, context: __SerdeContext): DescribeReplayResponse => {
  return {
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_json1_1ReplayDestination(output.Destination, context)
        : undefined,
    EventEndTime:
      output.EventEndTime !== undefined && output.EventEndTime !== null
        ? new Date(Math.round(output.EventEndTime * 1000))
        : undefined,
    EventLastReplayedTime:
      output.EventLastReplayedTime !== undefined && output.EventLastReplayedTime !== null
        ? new Date(Math.round(output.EventLastReplayedTime * 1000))
        : undefined,
    EventSourceArn:
      output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
    EventStartTime:
      output.EventStartTime !== undefined && output.EventStartTime !== null
        ? new Date(Math.round(output.EventStartTime * 1000))
        : undefined,
    ReplayArn: output.ReplayArn !== undefined && output.ReplayArn !== null ? output.ReplayArn : undefined,
    ReplayEndTime:
      output.ReplayEndTime !== undefined && output.ReplayEndTime !== null
        ? new Date(Math.round(output.ReplayEndTime * 1000))
        : undefined,
    ReplayName: output.ReplayName !== undefined && output.ReplayName !== null ? output.ReplayName : undefined,
    ReplayStartTime:
      output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
        ? new Date(Math.round(output.ReplayStartTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRuleResponse = (output: any, context: __SerdeContext): DescribeRuleResponse => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EventBusName: output.EventBusName !== undefined && output.EventBusName !== null ? output.EventBusName : undefined,
    EventPattern: output.EventPattern !== undefined && output.EventPattern !== null ? output.EventPattern : undefined,
    ManagedBy: output.ManagedBy !== undefined && output.ManagedBy !== null ? output.ManagedBy : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    ScheduleExpression:
      output.ScheduleExpression !== undefined && output.ScheduleExpression !== null
        ? output.ScheduleExpression
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1EcsParameters = (output: any, context: __SerdeContext): EcsParameters => {
  return {
    Group: output.Group !== undefined && output.Group !== null ? output.Group : undefined,
    LaunchType: output.LaunchType !== undefined && output.LaunchType !== null ? output.LaunchType : undefined,
    NetworkConfiguration:
      output.NetworkConfiguration !== undefined && output.NetworkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(output.NetworkConfiguration, context)
        : undefined,
    PlatformVersion:
      output.PlatformVersion !== undefined && output.PlatformVersion !== null ? output.PlatformVersion : undefined,
    TaskCount: output.TaskCount !== undefined && output.TaskCount !== null ? output.TaskCount : undefined,
    TaskDefinitionArn:
      output.TaskDefinitionArn !== undefined && output.TaskDefinitionArn !== null
        ? output.TaskDefinitionArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1EventBus = (output: any, context: __SerdeContext): EventBus => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
  } as any;
};

const deserializeAws_json1_1EventBusList = (output: any, context: __SerdeContext): EventBus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventBus(entry, context);
    });
};

const deserializeAws_json1_1EventSource = (output: any, context: __SerdeContext): EventSource => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? new Date(Math.round(output.ExpirationTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1EventSourceList = (output: any, context: __SerdeContext): EventSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventSource(entry, context);
    });
};

const deserializeAws_json1_1HeaderParametersMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1HttpParameters = (output: any, context: __SerdeContext): HttpParameters => {
  return {
    HeaderParameters:
      output.HeaderParameters !== undefined && output.HeaderParameters !== null
        ? deserializeAws_json1_1HeaderParametersMap(output.HeaderParameters, context)
        : undefined,
    PathParameterValues:
      output.PathParameterValues !== undefined && output.PathParameterValues !== null
        ? deserializeAws_json1_1PathParameterList(output.PathParameterValues, context)
        : undefined,
    QueryStringParameters:
      output.QueryStringParameters !== undefined && output.QueryStringParameters !== null
        ? deserializeAws_json1_1QueryStringParametersMap(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IllegalStatusException = (output: any, context: __SerdeContext): IllegalStatusException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InputTransformer = (output: any, context: __SerdeContext): InputTransformer => {
  return {
    InputPathsMap:
      output.InputPathsMap !== undefined && output.InputPathsMap !== null
        ? deserializeAws_json1_1TransformerPaths(output.InputPathsMap, context)
        : undefined,
    InputTemplate:
      output.InputTemplate !== undefined && output.InputTemplate !== null ? output.InputTemplate : undefined,
  } as any;
};

const deserializeAws_json1_1InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidEventPatternException = (
  output: any,
  context: __SerdeContext
): InvalidEventPatternException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1KinesisParameters = (output: any, context: __SerdeContext): KinesisParameters => {
  return {
    PartitionKeyPath:
      output.PartitionKeyPath !== undefined && output.PartitionKeyPath !== null ? output.PartitionKeyPath : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ListArchivesResponse = (output: any, context: __SerdeContext): ListArchivesResponse => {
  return {
    Archives:
      output.Archives !== undefined && output.Archives !== null
        ? deserializeAws_json1_1ArchiveResponseList(output.Archives, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListEventBusesResponse = (output: any, context: __SerdeContext): ListEventBusesResponse => {
  return {
    EventBuses:
      output.EventBuses !== undefined && output.EventBuses !== null
        ? deserializeAws_json1_1EventBusList(output.EventBuses, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListEventSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListEventSourcesResponse => {
  return {
    EventSources:
      output.EventSources !== undefined && output.EventSources !== null
        ? deserializeAws_json1_1EventSourceList(output.EventSources, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListPartnerEventSourceAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourceAccountsResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PartnerEventSourceAccounts:
      output.PartnerEventSourceAccounts !== undefined && output.PartnerEventSourceAccounts !== null
        ? deserializeAws_json1_1PartnerEventSourceAccountList(output.PartnerEventSourceAccounts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPartnerEventSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourcesResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PartnerEventSources:
      output.PartnerEventSources !== undefined && output.PartnerEventSources !== null
        ? deserializeAws_json1_1PartnerEventSourceList(output.PartnerEventSources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListReplaysResponse = (output: any, context: __SerdeContext): ListReplaysResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Replays:
      output.Replays !== undefined && output.Replays !== null
        ? deserializeAws_json1_1ReplayList(output.Replays, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRuleNamesByTargetResponse = (
  output: any,
  context: __SerdeContext
): ListRuleNamesByTargetResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    RuleNames:
      output.RuleNames !== undefined && output.RuleNames !== null
        ? deserializeAws_json1_1RuleNameList(output.RuleNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRulesResponse = (output: any, context: __SerdeContext): ListRulesResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1RuleResponseList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTargetsByRuleResponse = (
  output: any,
  context: __SerdeContext
): ListTargetsByRuleResponse => {
  return {
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Targets:
      output.Targets !== undefined && output.Targets !== null
        ? deserializeAws_json1_1TargetList(output.Targets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ManagedRuleException = (output: any, context: __SerdeContext): ManagedRuleException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    awsvpcConfiguration:
      output.awsvpcConfiguration !== undefined && output.awsvpcConfiguration !== null
        ? deserializeAws_json1_1AwsVpcConfiguration(output.awsvpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OperationDisabledException = (
  output: any,
  context: __SerdeContext
): OperationDisabledException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1PartnerEventSource = (output: any, context: __SerdeContext): PartnerEventSource => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_json1_1PartnerEventSourceAccount = (
  output: any,
  context: __SerdeContext
): PartnerEventSourceAccount => {
  return {
    Account: output.Account !== undefined && output.Account !== null ? output.Account : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? new Date(Math.round(output.ExpirationTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1PartnerEventSourceAccountList = (
  output: any,
  context: __SerdeContext
): PartnerEventSourceAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartnerEventSourceAccount(entry, context);
    });
};

const deserializeAws_json1_1PartnerEventSourceList = (output: any, context: __SerdeContext): PartnerEventSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartnerEventSource(entry, context);
    });
};

const deserializeAws_json1_1PathParameterList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1PolicyLengthExceededException = (
  output: any,
  context: __SerdeContext
): PolicyLengthExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1PutEventsResponse = (output: any, context: __SerdeContext): PutEventsResponse => {
  return {
    Entries:
      output.Entries !== undefined && output.Entries !== null
        ? deserializeAws_json1_1PutEventsResultEntryList(output.Entries, context)
        : undefined,
    FailedEntryCount:
      output.FailedEntryCount !== undefined && output.FailedEntryCount !== null ? output.FailedEntryCount : undefined,
  } as any;
};

const deserializeAws_json1_1PutEventsResultEntry = (output: any, context: __SerdeContext): PutEventsResultEntry => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
  } as any;
};

const deserializeAws_json1_1PutEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutEventsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PutEventsResultEntry(entry, context);
    });
};

const deserializeAws_json1_1PutPartnerEventsResponse = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResponse => {
  return {
    Entries:
      output.Entries !== undefined && output.Entries !== null
        ? deserializeAws_json1_1PutPartnerEventsResultEntryList(output.Entries, context)
        : undefined,
    FailedEntryCount:
      output.FailedEntryCount !== undefined && output.FailedEntryCount !== null ? output.FailedEntryCount : undefined,
  } as any;
};

const deserializeAws_json1_1PutPartnerEventsResultEntry = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResultEntry => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
  } as any;
};

const deserializeAws_json1_1PutPartnerEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PutPartnerEventsResultEntry(entry, context);
    });
};

const deserializeAws_json1_1PutRuleResponse = (output: any, context: __SerdeContext): PutRuleResponse => {
  return {
    RuleArn: output.RuleArn !== undefined && output.RuleArn !== null ? output.RuleArn : undefined,
  } as any;
};

const deserializeAws_json1_1PutTargetsResponse = (output: any, context: __SerdeContext): PutTargetsResponse => {
  return {
    FailedEntries:
      output.FailedEntries !== undefined && output.FailedEntries !== null
        ? deserializeAws_json1_1PutTargetsResultEntryList(output.FailedEntries, context)
        : undefined,
    FailedEntryCount:
      output.FailedEntryCount !== undefined && output.FailedEntryCount !== null ? output.FailedEntryCount : undefined,
  } as any;
};

const deserializeAws_json1_1PutTargetsResultEntry = (output: any, context: __SerdeContext): PutTargetsResultEntry => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
  } as any;
};

const deserializeAws_json1_1PutTargetsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutTargetsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PutTargetsResultEntry(entry, context);
    });
};

const deserializeAws_json1_1QueryStringParametersMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1RedshiftDataParameters = (output: any, context: __SerdeContext): RedshiftDataParameters => {
  return {
    Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
    DbUser: output.DbUser !== undefined && output.DbUser !== null ? output.DbUser : undefined,
    SecretManagerArn:
      output.SecretManagerArn !== undefined && output.SecretManagerArn !== null ? output.SecretManagerArn : undefined,
    Sql: output.Sql !== undefined && output.Sql !== null ? output.Sql : undefined,
    StatementName:
      output.StatementName !== undefined && output.StatementName !== null ? output.StatementName : undefined,
    WithEvent: output.WithEvent !== undefined && output.WithEvent !== null ? output.WithEvent : undefined,
  } as any;
};

const deserializeAws_json1_1RemoveTargetsResponse = (output: any, context: __SerdeContext): RemoveTargetsResponse => {
  return {
    FailedEntries:
      output.FailedEntries !== undefined && output.FailedEntries !== null
        ? deserializeAws_json1_1RemoveTargetsResultEntryList(output.FailedEntries, context)
        : undefined,
    FailedEntryCount:
      output.FailedEntryCount !== undefined && output.FailedEntryCount !== null ? output.FailedEntryCount : undefined,
  } as any;
};

const deserializeAws_json1_1RemoveTargetsResultEntry = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResultEntry => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
    TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
  } as any;
};

const deserializeAws_json1_1RemoveTargetsResultEntryList = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemoveTargetsResultEntry(entry, context);
    });
};

const deserializeAws_json1_1Replay = (output: any, context: __SerdeContext): Replay => {
  return {
    EventEndTime:
      output.EventEndTime !== undefined && output.EventEndTime !== null
        ? new Date(Math.round(output.EventEndTime * 1000))
        : undefined,
    EventLastReplayedTime:
      output.EventLastReplayedTime !== undefined && output.EventLastReplayedTime !== null
        ? new Date(Math.round(output.EventLastReplayedTime * 1000))
        : undefined,
    EventSourceArn:
      output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
    EventStartTime:
      output.EventStartTime !== undefined && output.EventStartTime !== null
        ? new Date(Math.round(output.EventStartTime * 1000))
        : undefined,
    ReplayEndTime:
      output.ReplayEndTime !== undefined && output.ReplayEndTime !== null
        ? new Date(Math.round(output.ReplayEndTime * 1000))
        : undefined,
    ReplayName: output.ReplayName !== undefined && output.ReplayName !== null ? output.ReplayName : undefined,
    ReplayStartTime:
      output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
        ? new Date(Math.round(output.ReplayStartTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_json1_1ReplayDestination = (output: any, context: __SerdeContext): ReplayDestination => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    FilterArns:
      output.FilterArns !== undefined && output.FilterArns !== null
        ? deserializeAws_json1_1ReplayDestinationFilters(output.FilterArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReplayDestinationFilters = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1ReplayList = (output: any, context: __SerdeContext): Replay[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Replay(entry, context);
    });
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1RetryPolicy = (output: any, context: __SerdeContext): RetryPolicy => {
  return {
    MaximumEventAgeInSeconds:
      output.MaximumEventAgeInSeconds !== undefined && output.MaximumEventAgeInSeconds !== null
        ? output.MaximumEventAgeInSeconds
        : undefined,
    MaximumRetryAttempts:
      output.MaximumRetryAttempts !== undefined && output.MaximumRetryAttempts !== null
        ? output.MaximumRetryAttempts
        : undefined,
  } as any;
};

const deserializeAws_json1_1Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    EventBusName: output.EventBusName !== undefined && output.EventBusName !== null ? output.EventBusName : undefined,
    EventPattern: output.EventPattern !== undefined && output.EventPattern !== null ? output.EventPattern : undefined,
    ManagedBy: output.ManagedBy !== undefined && output.ManagedBy !== null ? output.ManagedBy : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    ScheduleExpression:
      output.ScheduleExpression !== undefined && output.ScheduleExpression !== null
        ? output.ScheduleExpression
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1RuleNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1RuleResponseList = (output: any, context: __SerdeContext): Rule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Rule(entry, context);
    });
};

const deserializeAws_json1_1RunCommandParameters = (output: any, context: __SerdeContext): RunCommandParameters => {
  return {
    RunCommandTargets:
      output.RunCommandTargets !== undefined && output.RunCommandTargets !== null
        ? deserializeAws_json1_1RunCommandTargets(output.RunCommandTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RunCommandTarget = (output: any, context: __SerdeContext): RunCommandTarget => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1RunCommandTargetValues(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RunCommandTargets = (output: any, context: __SerdeContext): RunCommandTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RunCommandTarget(entry, context);
    });
};

const deserializeAws_json1_1RunCommandTargetValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1SqsParameters = (output: any, context: __SerdeContext): SqsParameters => {
  return {
    MessageGroupId:
      output.MessageGroupId !== undefined && output.MessageGroupId !== null ? output.MessageGroupId : undefined,
  } as any;
};

const deserializeAws_json1_1StartReplayResponse = (output: any, context: __SerdeContext): StartReplayResponse => {
  return {
    ReplayArn: output.ReplayArn !== undefined && output.ReplayArn !== null ? output.ReplayArn : undefined,
    ReplayStartTime:
      output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
        ? new Date(Math.round(output.ReplayStartTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Target = (output: any, context: __SerdeContext): Target => {
  return {
    Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    BatchParameters:
      output.BatchParameters !== undefined && output.BatchParameters !== null
        ? deserializeAws_json1_1BatchParameters(output.BatchParameters, context)
        : undefined,
    DeadLetterConfig:
      output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
        ? deserializeAws_json1_1DeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
    EcsParameters:
      output.EcsParameters !== undefined && output.EcsParameters !== null
        ? deserializeAws_json1_1EcsParameters(output.EcsParameters, context)
        : undefined,
    HttpParameters:
      output.HttpParameters !== undefined && output.HttpParameters !== null
        ? deserializeAws_json1_1HttpParameters(output.HttpParameters, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Input: output.Input !== undefined && output.Input !== null ? output.Input : undefined,
    InputPath: output.InputPath !== undefined && output.InputPath !== null ? output.InputPath : undefined,
    InputTransformer:
      output.InputTransformer !== undefined && output.InputTransformer !== null
        ? deserializeAws_json1_1InputTransformer(output.InputTransformer, context)
        : undefined,
    KinesisParameters:
      output.KinesisParameters !== undefined && output.KinesisParameters !== null
        ? deserializeAws_json1_1KinesisParameters(output.KinesisParameters, context)
        : undefined,
    RedshiftDataParameters:
      output.RedshiftDataParameters !== undefined && output.RedshiftDataParameters !== null
        ? deserializeAws_json1_1RedshiftDataParameters(output.RedshiftDataParameters, context)
        : undefined,
    RetryPolicy:
      output.RetryPolicy !== undefined && output.RetryPolicy !== null
        ? deserializeAws_json1_1RetryPolicy(output.RetryPolicy, context)
        : undefined,
    RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    RunCommandParameters:
      output.RunCommandParameters !== undefined && output.RunCommandParameters !== null
        ? deserializeAws_json1_1RunCommandParameters(output.RunCommandParameters, context)
        : undefined,
    SqsParameters:
      output.SqsParameters !== undefined && output.SqsParameters !== null
        ? deserializeAws_json1_1SqsParameters(output.SqsParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TargetList = (output: any, context: __SerdeContext): Target[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Target(entry, context);
    });
};

const deserializeAws_json1_1TestEventPatternResponse = (
  output: any,
  context: __SerdeContext
): TestEventPatternResponse => {
  return {
    Result: output.Result !== undefined && output.Result !== null ? output.Result : undefined,
  } as any;
};

const deserializeAws_json1_1TransformerPaths = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateArchiveResponse = (output: any, context: __SerdeContext): UpdateArchiveResponse => {
  return {
    ArchiveArn: output.ArchiveArn !== undefined && output.ArchiveArn !== null ? output.ArchiveArn : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
