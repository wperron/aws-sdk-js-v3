import { CreateActivityCommandInput, CreateActivityCommandOutput } from "../commands/CreateActivityCommand.ts";
import { CreateStateMachineCommandInput, CreateStateMachineCommandOutput } from "../commands/CreateStateMachineCommand.ts";
import { DeleteActivityCommandInput, DeleteActivityCommandOutput } from "../commands/DeleteActivityCommand.ts";
import { DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput } from "../commands/DeleteStateMachineCommand.ts";
import { DescribeActivityCommandInput, DescribeActivityCommandOutput } from "../commands/DescribeActivityCommand.ts";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "../commands/DescribeExecutionCommand.ts";
import {
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
} from "../commands/DescribeStateMachineCommand.ts";
import {
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput,
} from "../commands/DescribeStateMachineForExecutionCommand.ts";
import { GetActivityTaskCommandInput, GetActivityTaskCommandOutput } from "../commands/GetActivityTaskCommand.ts";
import {
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput,
} from "../commands/GetExecutionHistoryCommand.ts";
import { ListActivitiesCommandInput, ListActivitiesCommandOutput } from "../commands/ListActivitiesCommand.ts";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "../commands/ListExecutionsCommand.ts";
import { ListStateMachinesCommandInput, ListStateMachinesCommandOutput } from "../commands/ListStateMachinesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand.ts";
import { SendTaskFailureCommandInput, SendTaskFailureCommandOutput } from "../commands/SendTaskFailureCommand.ts";
import { SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput } from "../commands/SendTaskHeartbeatCommand.ts";
import { SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput } from "../commands/SendTaskSuccessCommand.ts";
import { StartExecutionCommandInput, StartExecutionCommandOutput } from "../commands/StartExecutionCommand.ts";
import { StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput } from "../commands/StartSyncExecutionCommand.ts";
import { StopExecutionCommandInput, StopExecutionCommandOutput } from "../commands/StopExecutionCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand.ts";
import { UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput } from "../commands/UpdateStateMachineCommand.ts";
import {
  ActivityDoesNotExist,
  ActivityFailedEventDetails,
  ActivityLimitExceeded,
  ActivityListItem,
  ActivityScheduleFailedEventDetails,
  ActivityScheduledEventDetails,
  ActivityStartedEventDetails,
  ActivitySucceededEventDetails,
  ActivityTimedOutEventDetails,
  ActivityWorkerLimitExceeded,
  BillingDetails,
  CloudWatchEventsExecutionDataDetails,
  CloudWatchLogsLogGroup,
  CreateActivityInput,
  CreateActivityOutput,
  CreateStateMachineInput,
  CreateStateMachineOutput,
  DeleteActivityInput,
  DeleteActivityOutput,
  DeleteStateMachineInput,
  DeleteStateMachineOutput,
  DescribeActivityInput,
  DescribeActivityOutput,
  DescribeExecutionInput,
  DescribeExecutionOutput,
  DescribeStateMachineForExecutionInput,
  DescribeStateMachineForExecutionOutput,
  DescribeStateMachineInput,
  DescribeStateMachineOutput,
  ExecutionAbortedEventDetails,
  ExecutionAlreadyExists,
  ExecutionDoesNotExist,
  ExecutionFailedEventDetails,
  ExecutionLimitExceeded,
  ExecutionListItem,
  ExecutionStartedEventDetails,
  ExecutionSucceededEventDetails,
  ExecutionTimedOutEventDetails,
  GetActivityTaskInput,
  GetActivityTaskOutput,
  GetExecutionHistoryInput,
  GetExecutionHistoryOutput,
  HistoryEvent,
  HistoryEventExecutionDataDetails,
  InvalidArn,
  InvalidDefinition,
  InvalidExecutionInput,
  InvalidLoggingConfiguration,
  InvalidName,
  InvalidOutput,
  InvalidToken,
  InvalidTracingConfiguration,
  LambdaFunctionFailedEventDetails,
  LambdaFunctionScheduleFailedEventDetails,
  LambdaFunctionScheduledEventDetails,
  LambdaFunctionStartFailedEventDetails,
  LambdaFunctionSucceededEventDetails,
  LambdaFunctionTimedOutEventDetails,
  ListActivitiesInput,
  ListActivitiesOutput,
  ListExecutionsInput,
  ListExecutionsOutput,
  ListStateMachinesInput,
  ListStateMachinesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  LogDestination,
  LoggingConfiguration,
  MapIterationEventDetails,
  MapStateStartedEventDetails,
  MissingRequiredParameter,
  ResourceNotFound,
  SendTaskFailureInput,
  SendTaskFailureOutput,
  SendTaskHeartbeatInput,
  SendTaskHeartbeatOutput,
  SendTaskSuccessInput,
  SendTaskSuccessOutput,
  StartExecutionInput,
  StartExecutionOutput,
  StartSyncExecutionInput,
  StartSyncExecutionOutput,
  StateEnteredEventDetails,
  StateExitedEventDetails,
  StateMachineAlreadyExists,
  StateMachineDeleting,
  StateMachineDoesNotExist,
  StateMachineLimitExceeded,
  StateMachineListItem,
  StateMachineTypeNotSupported,
  StopExecutionInput,
  StopExecutionOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  TaskDoesNotExist,
  TaskFailedEventDetails,
  TaskScheduledEventDetails,
  TaskStartFailedEventDetails,
  TaskStartedEventDetails,
  TaskSubmitFailedEventDetails,
  TaskSubmittedEventDetails,
  TaskSucceededEventDetails,
  TaskTimedOut,
  TaskTimedOutEventDetails,
  TooManyTags,
  TracingConfiguration,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateStateMachineInput,
  UpdateStateMachineOutput,
} from "../models/models_0.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "../../protocol-http/mod.ts";
import { SmithyException as __SmithyException } from "../../smithy-client/mod.ts";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export const serializeAws_json1_0CreateActivityCommand = async (
  input: CreateActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.CreateActivity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateActivityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateStateMachineCommand = async (
  input: CreateStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.CreateStateMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateStateMachineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteActivityCommand = async (
  input: DeleteActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.DeleteActivity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteActivityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteStateMachineCommand = async (
  input: DeleteStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.DeleteStateMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteStateMachineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeActivityCommand = async (
  input: DescribeActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.DescribeActivity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeActivityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeExecutionCommand = async (
  input: DescribeExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.DescribeExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeStateMachineCommand = async (
  input: DescribeStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.DescribeStateMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeStateMachineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeStateMachineForExecutionCommand = async (
  input: DescribeStateMachineForExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.DescribeStateMachineForExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeStateMachineForExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetActivityTaskCommand = async (
  input: GetActivityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.GetActivityTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetActivityTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetExecutionHistoryCommand = async (
  input: GetExecutionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.GetExecutionHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetExecutionHistoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListActivitiesCommand = async (
  input: ListActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.ListActivities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListActivitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListExecutionsCommand = async (
  input: ListExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.ListExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListStateMachinesCommand = async (
  input: ListStateMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.ListStateMachines",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListStateMachinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SendTaskFailureCommand = async (
  input: SendTaskFailureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.SendTaskFailure",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SendTaskFailureInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SendTaskHeartbeatCommand = async (
  input: SendTaskHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.SendTaskHeartbeat",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SendTaskHeartbeatInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SendTaskSuccessCommand = async (
  input: SendTaskSuccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.SendTaskSuccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SendTaskSuccessInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartExecutionCommand = async (
  input: StartExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.StartExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartSyncExecutionCommand = async (
  input: StartSyncExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.StartSyncExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartSyncExecutionInput(input, context));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "sync-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

export const serializeAws_json1_0StopExecutionCommand = async (
  input: StopExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.StopExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StopExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateStateMachineCommand = async (
  input: UpdateStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "X-Amz-Target": "AWSStepFunctions.UpdateStateMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateStateMachineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CreateActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateActivityOutput(data, context);
  const response: CreateActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateActivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActivityLimitExceeded":
    case "com.amazonaws.sfn#ActivityLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0ActivityLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidName":
    case "com.amazonaws.sfn#InvalidName":
      response = {
        ...(await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTags":
    case "com.amazonaws.sfn#TooManyTags":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0CreateStateMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStateMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateStateMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateStateMachineOutput(data, context);
  const response: CreateStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateStateMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStateMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDefinition":
    case "com.amazonaws.sfn#InvalidDefinition":
      response = {
        ...(await deserializeAws_json1_0InvalidDefinitionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoggingConfiguration":
    case "com.amazonaws.sfn#InvalidLoggingConfiguration":
      response = {
        ...(await deserializeAws_json1_0InvalidLoggingConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidName":
    case "com.amazonaws.sfn#InvalidName":
      response = {
        ...(await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTracingConfiguration":
    case "com.amazonaws.sfn#InvalidTracingConfiguration":
      response = {
        ...(await deserializeAws_json1_0InvalidTracingConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineAlreadyExists":
    case "com.amazonaws.sfn#StateMachineAlreadyExists":
      response = {
        ...(await deserializeAws_json1_0StateMachineAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDeleting":
    case "com.amazonaws.sfn#StateMachineDeleting":
      response = {
        ...(await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineLimitExceeded":
    case "com.amazonaws.sfn#StateMachineLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0StateMachineLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineTypeNotSupported":
    case "com.amazonaws.sfn#StateMachineTypeNotSupported":
      response = {
        ...(await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTags":
    case "com.amazonaws.sfn#TooManyTags":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteActivityOutput(data, context);
  const response: DeleteActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteActivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteStateMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStateMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteStateMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteStateMachineOutput(data, context);
  const response: DeleteStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteStateMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStateMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeActivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeActivityOutput(data, context);
  const response: DescribeActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeActivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActivityDoesNotExist":
    case "com.amazonaws.sfn#ActivityDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ActivityDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeExecutionOutput(data, context);
  const response: DescribeExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeStateMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeStateMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeStateMachineOutput(data, context);
  const response: DescribeStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeStateMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeStateMachineForExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineForExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeStateMachineForExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeStateMachineForExecutionOutput(data, context);
  const response: DescribeStateMachineForExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeStateMachineForExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineForExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0GetActivityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActivityTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetActivityTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetActivityTaskOutput(data, context);
  const response: GetActivityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetActivityTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActivityTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActivityDoesNotExist":
    case "com.amazonaws.sfn#ActivityDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ActivityDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ActivityWorkerLimitExceeded":
    case "com.amazonaws.sfn#ActivityWorkerLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0ActivityWorkerLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0GetExecutionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExecutionHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetExecutionHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetExecutionHistoryOutput(data, context);
  const response: GetExecutionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetExecutionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExecutionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListActivitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListActivitiesOutput(data, context);
  const response: ListActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListActivitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListExecutionsOutput(data, context);
  const response: ListExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineTypeNotSupported":
    case "com.amazonaws.sfn#StateMachineTypeNotSupported":
      response = {
        ...(await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListStateMachinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStateMachinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListStateMachinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListStateMachinesOutput(data, context);
  const response: ListStateMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListStateMachinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStateMachinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
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
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0SendTaskFailureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskFailureCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SendTaskFailureCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendTaskFailureOutput(data, context);
  const response: SendTaskFailureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SendTaskFailureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskFailureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskDoesNotExist":
    case "com.amazonaws.sfn#TaskDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskTimedOut":
    case "com.amazonaws.sfn#TaskTimedOut":
      response = {
        ...(await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0SendTaskHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SendTaskHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendTaskHeartbeatOutput(data, context);
  const response: SendTaskHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SendTaskHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskDoesNotExist":
    case "com.amazonaws.sfn#TaskDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskTimedOut":
    case "com.amazonaws.sfn#TaskTimedOut":
      response = {
        ...(await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0SendTaskSuccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskSuccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SendTaskSuccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendTaskSuccessOutput(data, context);
  const response: SendTaskSuccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SendTaskSuccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskSuccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOutput":
    case "com.amazonaws.sfn#InvalidOutput":
      response = {
        ...(await deserializeAws_json1_0InvalidOutputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidToken":
    case "com.amazonaws.sfn#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskDoesNotExist":
    case "com.amazonaws.sfn#TaskDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0TaskDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TaskTimedOut":
    case "com.amazonaws.sfn#TaskTimedOut":
      response = {
        ...(await deserializeAws_json1_0TaskTimedOutResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0StartExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartExecutionOutput(data, context);
  const response: StartExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionAlreadyExists":
    case "com.amazonaws.sfn#ExecutionAlreadyExists":
      response = {
        ...(await deserializeAws_json1_0ExecutionAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ExecutionLimitExceeded":
    case "com.amazonaws.sfn#ExecutionLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0ExecutionLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidExecutionInput":
    case "com.amazonaws.sfn#InvalidExecutionInput":
      response = {
        ...(await deserializeAws_json1_0InvalidExecutionInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidName":
    case "com.amazonaws.sfn#InvalidName":
      response = {
        ...(await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDeleting":
    case "com.amazonaws.sfn#StateMachineDeleting":
      response = {
        ...(await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0StartSyncExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSyncExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartSyncExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartSyncExecutionOutput(data, context);
  const response: StartSyncExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartSyncExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSyncExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidExecutionInput":
    case "com.amazonaws.sfn#InvalidExecutionInput":
      response = {
        ...(await deserializeAws_json1_0InvalidExecutionInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidName":
    case "com.amazonaws.sfn#InvalidName":
      response = {
        ...(await deserializeAws_json1_0InvalidNameResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDeleting":
    case "com.amazonaws.sfn#StateMachineDeleting":
      response = {
        ...(await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineTypeNotSupported":
    case "com.amazonaws.sfn#StateMachineTypeNotSupported":
      response = {
        ...(await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0StopExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StopExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StopExecutionOutput(data, context);
  const response: StopExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StopExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExecutionDoesNotExist":
    case "com.amazonaws.sfn#ExecutionDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTags":
    case "com.amazonaws.sfn#TooManyTags":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.sfn#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0UpdateStateMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStateMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateStateMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateStateMachineOutput(data, context);
  const response: UpdateStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateStateMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStateMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArn":
    case "com.amazonaws.sfn#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidDefinition":
    case "com.amazonaws.sfn#InvalidDefinition":
      response = {
        ...(await deserializeAws_json1_0InvalidDefinitionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLoggingConfiguration":
    case "com.amazonaws.sfn#InvalidLoggingConfiguration":
      response = {
        ...(await deserializeAws_json1_0InvalidLoggingConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTracingConfiguration":
    case "com.amazonaws.sfn#InvalidTracingConfiguration":
      response = {
        ...(await deserializeAws_json1_0InvalidTracingConfigurationResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameter":
    case "com.amazonaws.sfn#MissingRequiredParameter":
      response = {
        ...(await deserializeAws_json1_0MissingRequiredParameterResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDeleting":
    case "com.amazonaws.sfn#StateMachineDeleting":
      response = {
        ...(await deserializeAws_json1_0StateMachineDeletingResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.sfn#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(parsedOutput, context)),
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

const deserializeAws_json1_0ActivityDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ActivityDoesNotExist(body, context);
  const contents: ActivityDoesNotExist = {
    name: "ActivityDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ActivityLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ActivityLimitExceeded(body, context);
  const contents: ActivityLimitExceeded = {
    name: "ActivityLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ActivityWorkerLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityWorkerLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ActivityWorkerLimitExceeded(body, context);
  const contents: ActivityWorkerLimitExceeded = {
    name: "ActivityWorkerLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ExecutionAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExecutionAlreadyExists(body, context);
  const contents: ExecutionAlreadyExists = {
    name: "ExecutionAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ExecutionDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExecutionDoesNotExist(body, context);
  const contents: ExecutionDoesNotExist = {
    name: "ExecutionDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ExecutionLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExecutionLimitExceeded(body, context);
  const contents: ExecutionLimitExceeded = {
    name: "ExecutionLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidArnResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArn> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidArn(body, context);
  const contents: InvalidArn = {
    name: "InvalidArn",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidDefinitionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDefinition> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidDefinition(body, context);
  const contents: InvalidDefinition = {
    name: "InvalidDefinition",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidExecutionInputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExecutionInput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidExecutionInput(body, context);
  const contents: InvalidExecutionInput = {
    name: "InvalidExecutionInput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidLoggingConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoggingConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidLoggingConfiguration(body, context);
  const contents: InvalidLoggingConfiguration = {
    name: "InvalidLoggingConfiguration",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidName> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidName(body, context);
  const contents: InvalidName = {
    name: "InvalidName",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidOutputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOutput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidOutput(body, context);
  const contents: InvalidOutput = {
    name: "InvalidOutput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidToken(body, context);
  const contents: InvalidToken = {
    name: "InvalidToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InvalidTracingConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTracingConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidTracingConfiguration(body, context);
  const contents: InvalidTracingConfiguration = {
    name: "InvalidTracingConfiguration",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0MissingRequiredParameterResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameter> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0MissingRequiredParameter(body, context);
  const contents: MissingRequiredParameter = {
    name: "MissingRequiredParameter",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFound(body, context);
  const contents: ResourceNotFound = {
    name: "ResourceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0StateMachineAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineAlreadyExists(body, context);
  const contents: StateMachineAlreadyExists = {
    name: "StateMachineAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0StateMachineDeletingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineDeleting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineDeleting(body, context);
  const contents: StateMachineDeleting = {
    name: "StateMachineDeleting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0StateMachineDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineDoesNotExist(body, context);
  const contents: StateMachineDoesNotExist = {
    name: "StateMachineDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0StateMachineLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineLimitExceeded(body, context);
  const contents: StateMachineLimitExceeded = {
    name: "StateMachineLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0StateMachineTypeNotSupportedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineTypeNotSupported> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineTypeNotSupported(body, context);
  const contents: StateMachineTypeNotSupported = {
    name: "StateMachineTypeNotSupported",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0TaskDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TaskDoesNotExist(body, context);
  const contents: TaskDoesNotExist = {
    name: "TaskDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0TaskTimedOutResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskTimedOut> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TaskTimedOut(body, context);
  const contents: TaskTimedOut = {
    name: "TaskTimedOut",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0TooManyTagsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTags> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TooManyTags(body, context);
  const contents: TooManyTags = {
    name: "TooManyTags",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_0CloudWatchLogsLogGroup = (input: CloudWatchLogsLogGroup, context: __SerdeContext): any => {
  return {
    ...(input.logGroupArn !== undefined && input.logGroupArn !== null && { logGroupArn: input.logGroupArn }),
  };
};

const serializeAws_json1_0CreateActivityInput = (input: CreateActivityInput, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateStateMachineInput = (input: CreateStateMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.definition !== undefined && input.definition !== null && { definition: input.definition }),
    ...(input.loggingConfiguration !== undefined &&
      input.loggingConfiguration !== null && {
        loggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.loggingConfiguration, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.tracingConfiguration !== undefined &&
      input.tracingConfiguration !== null && {
        tracingConfiguration: serializeAws_json1_0TracingConfiguration(input.tracingConfiguration, context),
      }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_0DeleteActivityInput = (input: DeleteActivityInput, context: __SerdeContext): any => {
  return {
    ...(input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn }),
  };
};

const serializeAws_json1_0DeleteStateMachineInput = (input: DeleteStateMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.stateMachineArn !== undefined &&
      input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
  };
};

const serializeAws_json1_0DescribeActivityInput = (input: DescribeActivityInput, context: __SerdeContext): any => {
  return {
    ...(input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn }),
  };
};

const serializeAws_json1_0DescribeExecutionInput = (input: DescribeExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }),
  };
};

const serializeAws_json1_0DescribeStateMachineForExecutionInput = (
  input: DescribeStateMachineForExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }),
  };
};

const serializeAws_json1_0DescribeStateMachineInput = (
  input: DescribeStateMachineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.stateMachineArn !== undefined &&
      input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
  };
};

const serializeAws_json1_0GetActivityTaskInput = (input: GetActivityTaskInput, context: __SerdeContext): any => {
  return {
    ...(input.activityArn !== undefined && input.activityArn !== null && { activityArn: input.activityArn }),
    ...(input.workerName !== undefined && input.workerName !== null && { workerName: input.workerName }),
  };
};

const serializeAws_json1_0GetExecutionHistoryInput = (
  input: GetExecutionHistoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }),
    ...(input.includeExecutionData !== undefined &&
      input.includeExecutionData !== null && { includeExecutionData: input.includeExecutionData }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
  };
};

const serializeAws_json1_0ListActivitiesInput = (input: ListActivitiesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListExecutionsInput = (input: ListExecutionsInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.stateMachineArn !== undefined &&
      input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
    ...(input.statusFilter !== undefined && input.statusFilter !== null && { statusFilter: input.statusFilter }),
  };
};

const serializeAws_json1_0ListStateMachinesInput = (input: ListStateMachinesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_0LogDestination = (input: LogDestination, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogsLogGroup !== undefined &&
      input.cloudWatchLogsLogGroup !== null && {
        cloudWatchLogsLogGroup: serializeAws_json1_0CloudWatchLogsLogGroup(input.cloudWatchLogsLogGroup, context),
      }),
  };
};

const serializeAws_json1_0LogDestinationList = (input: LogDestination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0LogDestination(entry, context);
    });
};

const serializeAws_json1_0LoggingConfiguration = (input: LoggingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.destinations !== undefined &&
      input.destinations !== null && {
        destinations: serializeAws_json1_0LogDestinationList(input.destinations, context),
      }),
    ...(input.includeExecutionData !== undefined &&
      input.includeExecutionData !== null && { includeExecutionData: input.includeExecutionData }),
    ...(input.level !== undefined && input.level !== null && { level: input.level }),
  };
};

const serializeAws_json1_0SendTaskFailureInput = (input: SendTaskFailureInput, context: __SerdeContext): any => {
  return {
    ...(input.cause !== undefined && input.cause !== null && { cause: input.cause }),
    ...(input.error !== undefined && input.error !== null && { error: input.error }),
    ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
  };
};

const serializeAws_json1_0SendTaskHeartbeatInput = (input: SendTaskHeartbeatInput, context: __SerdeContext): any => {
  return {
    ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
  };
};

const serializeAws_json1_0SendTaskSuccessInput = (input: SendTaskSuccessInput, context: __SerdeContext): any => {
  return {
    ...(input.output !== undefined && input.output !== null && { output: input.output }),
    ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
  };
};

const serializeAws_json1_0StartExecutionInput = (input: StartExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.stateMachineArn !== undefined &&
      input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
    ...(input.traceHeader !== undefined && input.traceHeader !== null && { traceHeader: input.traceHeader }),
  };
};

const serializeAws_json1_0StartSyncExecutionInput = (input: StartSyncExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.stateMachineArn !== undefined &&
      input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
    ...(input.traceHeader !== undefined && input.traceHeader !== null && { traceHeader: input.traceHeader }),
  };
};

const serializeAws_json1_0StopExecutionInput = (input: StopExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.cause !== undefined && input.cause !== null && { cause: input.cause }),
    ...(input.error !== undefined && input.error !== null && { error: input.error }),
    ...(input.executionArn !== undefined && input.executionArn !== null && { executionArn: input.executionArn }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0TracingConfiguration = (input: TracingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
  };
};

const serializeAws_json1_0UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined &&
      input.tagKeys !== null && { tagKeys: serializeAws_json1_0TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateStateMachineInput = (input: UpdateStateMachineInput, context: __SerdeContext): any => {
  return {
    ...(input.definition !== undefined && input.definition !== null && { definition: input.definition }),
    ...(input.loggingConfiguration !== undefined &&
      input.loggingConfiguration !== null && {
        loggingConfiguration: serializeAws_json1_0LoggingConfiguration(input.loggingConfiguration, context),
      }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.stateMachineArn !== undefined &&
      input.stateMachineArn !== null && { stateMachineArn: input.stateMachineArn }),
    ...(input.tracingConfiguration !== undefined &&
      input.tracingConfiguration !== null && {
        tracingConfiguration: serializeAws_json1_0TracingConfiguration(input.tracingConfiguration, context),
      }),
  };
};

const deserializeAws_json1_0ActivityDoesNotExist = (output: any, context: __SerdeContext): ActivityDoesNotExist => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityFailedEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityLimitExceeded = (output: any, context: __SerdeContext): ActivityLimitExceeded => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityList = (output: any, context: __SerdeContext): ActivityListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ActivityListItem(entry, context);
    });
};

const deserializeAws_json1_0ActivityListItem = (output: any, context: __SerdeContext): ActivityListItem => {
  return {
    activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityScheduledEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityScheduledEventDetails => {
  return {
    heartbeatInSeconds:
      output.heartbeatInSeconds !== undefined && output.heartbeatInSeconds !== null
        ? output.heartbeatInSeconds
        : undefined,
    input: output.input !== undefined && output.input !== null ? output.input : undefined,
    inputDetails:
      output.inputDetails !== undefined && output.inputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
        : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    timeoutInSeconds:
      output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityScheduleFailedEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityScheduleFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityStartedEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityStartedEventDetails => {
  return {
    workerName: output.workerName !== undefined && output.workerName !== null ? output.workerName : undefined,
  } as any;
};

const deserializeAws_json1_0ActivitySucceededEventDetails = (
  output: any,
  context: __SerdeContext
): ActivitySucceededEventDetails => {
  return {
    output: output.output !== undefined && output.output !== null ? output.output : undefined,
    outputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityTimedOutEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityWorkerLimitExceeded = (
  output: any,
  context: __SerdeContext
): ActivityWorkerLimitExceeded => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0BillingDetails = (output: any, context: __SerdeContext): BillingDetails => {
  return {
    billedDurationInMilliseconds:
      output.billedDurationInMilliseconds !== undefined && output.billedDurationInMilliseconds !== null
        ? output.billedDurationInMilliseconds
        : undefined,
    billedMemoryUsedInMB:
      output.billedMemoryUsedInMB !== undefined && output.billedMemoryUsedInMB !== null
        ? output.billedMemoryUsedInMB
        : undefined,
  } as any;
};

const deserializeAws_json1_0CloudWatchEventsExecutionDataDetails = (
  output: any,
  context: __SerdeContext
): CloudWatchEventsExecutionDataDetails => {
  return {
    included: output.included !== undefined && output.included !== null ? output.included : undefined,
  } as any;
};

const deserializeAws_json1_0CloudWatchLogsLogGroup = (output: any, context: __SerdeContext): CloudWatchLogsLogGroup => {
  return {
    logGroupArn: output.logGroupArn !== undefined && output.logGroupArn !== null ? output.logGroupArn : undefined,
  } as any;
};

const deserializeAws_json1_0CreateActivityOutput = (output: any, context: __SerdeContext): CreateActivityOutput => {
  return {
    activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateStateMachineOutput = (
  output: any,
  context: __SerdeContext
): CreateStateMachineOutput => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    stateMachineArn:
      output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteActivityOutput = (output: any, context: __SerdeContext): DeleteActivityOutput => {
  return {} as any;
};

const deserializeAws_json1_0DeleteStateMachineOutput = (
  output: any,
  context: __SerdeContext
): DeleteStateMachineOutput => {
  return {} as any;
};

const deserializeAws_json1_0DescribeActivityOutput = (output: any, context: __SerdeContext): DescribeActivityOutput => {
  return {
    activityArn: output.activityArn !== undefined && output.activityArn !== null ? output.activityArn : undefined,
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeExecutionOutput = (
  output: any,
  context: __SerdeContext
): DescribeExecutionOutput => {
  return {
    executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
    input: output.input !== undefined && output.input !== null ? output.input : undefined,
    inputDetails:
      output.inputDetails !== undefined && output.inputDetails !== null
        ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.inputDetails, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    output: output.output !== undefined && output.output !== null ? output.output : undefined,
    outputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.outputDetails, context)
        : undefined,
    startDate:
      output.startDate !== undefined && output.startDate !== null
        ? new Date(Math.round(output.startDate * 1000))
        : undefined,
    stateMachineArn:
      output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    stopDate:
      output.stopDate !== undefined && output.stopDate !== null
        ? new Date(Math.round(output.stopDate * 1000))
        : undefined,
    traceHeader: output.traceHeader !== undefined && output.traceHeader !== null ? output.traceHeader : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeStateMachineForExecutionOutput = (
  output: any,
  context: __SerdeContext
): DescribeStateMachineForExecutionOutput => {
  return {
    definition: output.definition !== undefined && output.definition !== null ? output.definition : undefined,
    loggingConfiguration:
      output.loggingConfiguration !== undefined && output.loggingConfiguration !== null
        ? deserializeAws_json1_0LoggingConfiguration(output.loggingConfiguration, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    stateMachineArn:
      output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
    tracingConfiguration:
      output.tracingConfiguration !== undefined && output.tracingConfiguration !== null
        ? deserializeAws_json1_0TracingConfiguration(output.tracingConfiguration, context)
        : undefined,
    updateDate:
      output.updateDate !== undefined && output.updateDate !== null
        ? new Date(Math.round(output.updateDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeStateMachineOutput = (
  output: any,
  context: __SerdeContext
): DescribeStateMachineOutput => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    definition: output.definition !== undefined && output.definition !== null ? output.definition : undefined,
    loggingConfiguration:
      output.loggingConfiguration !== undefined && output.loggingConfiguration !== null
        ? deserializeAws_json1_0LoggingConfiguration(output.loggingConfiguration, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    stateMachineArn:
      output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tracingConfiguration:
      output.tracingConfiguration !== undefined && output.tracingConfiguration !== null
        ? deserializeAws_json1_0TracingConfiguration(output.tracingConfiguration, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionAbortedEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionAbortedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionAlreadyExists = (output: any, context: __SerdeContext): ExecutionAlreadyExists => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionDoesNotExist = (output: any, context: __SerdeContext): ExecutionDoesNotExist => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionFailedEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionLimitExceeded = (output: any, context: __SerdeContext): ExecutionLimitExceeded => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionList = (output: any, context: __SerdeContext): ExecutionListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ExecutionListItem(entry, context);
    });
};

const deserializeAws_json1_0ExecutionListItem = (output: any, context: __SerdeContext): ExecutionListItem => {
  return {
    executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    startDate:
      output.startDate !== undefined && output.startDate !== null
        ? new Date(Math.round(output.startDate * 1000))
        : undefined,
    stateMachineArn:
      output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    stopDate:
      output.stopDate !== undefined && output.stopDate !== null
        ? new Date(Math.round(output.stopDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionStartedEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionStartedEventDetails => {
  return {
    input: output.input !== undefined && output.input !== null ? output.input : undefined,
    inputDetails:
      output.inputDetails !== undefined && output.inputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
        : undefined,
    roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionSucceededEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionSucceededEventDetails => {
  return {
    output: output.output !== undefined && output.output !== null ? output.output : undefined,
    outputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExecutionTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionTimedOutEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0GetActivityTaskOutput = (output: any, context: __SerdeContext): GetActivityTaskOutput => {
  return {
    input: output.input !== undefined && output.input !== null ? output.input : undefined,
    taskToken: output.taskToken !== undefined && output.taskToken !== null ? output.taskToken : undefined,
  } as any;
};

const deserializeAws_json1_0GetExecutionHistoryOutput = (
  output: any,
  context: __SerdeContext
): GetExecutionHistoryOutput => {
  return {
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_0HistoryEventList(output.events, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_0HistoryEvent = (output: any, context: __SerdeContext): HistoryEvent => {
  return {
    activityFailedEventDetails:
      output.activityFailedEventDetails !== undefined && output.activityFailedEventDetails !== null
        ? deserializeAws_json1_0ActivityFailedEventDetails(output.activityFailedEventDetails, context)
        : undefined,
    activityScheduleFailedEventDetails:
      output.activityScheduleFailedEventDetails !== undefined && output.activityScheduleFailedEventDetails !== null
        ? deserializeAws_json1_0ActivityScheduleFailedEventDetails(output.activityScheduleFailedEventDetails, context)
        : undefined,
    activityScheduledEventDetails:
      output.activityScheduledEventDetails !== undefined && output.activityScheduledEventDetails !== null
        ? deserializeAws_json1_0ActivityScheduledEventDetails(output.activityScheduledEventDetails, context)
        : undefined,
    activityStartedEventDetails:
      output.activityStartedEventDetails !== undefined && output.activityStartedEventDetails !== null
        ? deserializeAws_json1_0ActivityStartedEventDetails(output.activityStartedEventDetails, context)
        : undefined,
    activitySucceededEventDetails:
      output.activitySucceededEventDetails !== undefined && output.activitySucceededEventDetails !== null
        ? deserializeAws_json1_0ActivitySucceededEventDetails(output.activitySucceededEventDetails, context)
        : undefined,
    activityTimedOutEventDetails:
      output.activityTimedOutEventDetails !== undefined && output.activityTimedOutEventDetails !== null
        ? deserializeAws_json1_0ActivityTimedOutEventDetails(output.activityTimedOutEventDetails, context)
        : undefined,
    executionAbortedEventDetails:
      output.executionAbortedEventDetails !== undefined && output.executionAbortedEventDetails !== null
        ? deserializeAws_json1_0ExecutionAbortedEventDetails(output.executionAbortedEventDetails, context)
        : undefined,
    executionFailedEventDetails:
      output.executionFailedEventDetails !== undefined && output.executionFailedEventDetails !== null
        ? deserializeAws_json1_0ExecutionFailedEventDetails(output.executionFailedEventDetails, context)
        : undefined,
    executionStartedEventDetails:
      output.executionStartedEventDetails !== undefined && output.executionStartedEventDetails !== null
        ? deserializeAws_json1_0ExecutionStartedEventDetails(output.executionStartedEventDetails, context)
        : undefined,
    executionSucceededEventDetails:
      output.executionSucceededEventDetails !== undefined && output.executionSucceededEventDetails !== null
        ? deserializeAws_json1_0ExecutionSucceededEventDetails(output.executionSucceededEventDetails, context)
        : undefined,
    executionTimedOutEventDetails:
      output.executionTimedOutEventDetails !== undefined && output.executionTimedOutEventDetails !== null
        ? deserializeAws_json1_0ExecutionTimedOutEventDetails(output.executionTimedOutEventDetails, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lambdaFunctionFailedEventDetails:
      output.lambdaFunctionFailedEventDetails !== undefined && output.lambdaFunctionFailedEventDetails !== null
        ? deserializeAws_json1_0LambdaFunctionFailedEventDetails(output.lambdaFunctionFailedEventDetails, context)
        : undefined,
    lambdaFunctionScheduleFailedEventDetails:
      output.lambdaFunctionScheduleFailedEventDetails !== undefined &&
      output.lambdaFunctionScheduleFailedEventDetails !== null
        ? deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails(
            output.lambdaFunctionScheduleFailedEventDetails,
            context
          )
        : undefined,
    lambdaFunctionScheduledEventDetails:
      output.lambdaFunctionScheduledEventDetails !== undefined && output.lambdaFunctionScheduledEventDetails !== null
        ? deserializeAws_json1_0LambdaFunctionScheduledEventDetails(output.lambdaFunctionScheduledEventDetails, context)
        : undefined,
    lambdaFunctionStartFailedEventDetails:
      output.lambdaFunctionStartFailedEventDetails !== undefined &&
      output.lambdaFunctionStartFailedEventDetails !== null
        ? deserializeAws_json1_0LambdaFunctionStartFailedEventDetails(
            output.lambdaFunctionStartFailedEventDetails,
            context
          )
        : undefined,
    lambdaFunctionSucceededEventDetails:
      output.lambdaFunctionSucceededEventDetails !== undefined && output.lambdaFunctionSucceededEventDetails !== null
        ? deserializeAws_json1_0LambdaFunctionSucceededEventDetails(output.lambdaFunctionSucceededEventDetails, context)
        : undefined,
    lambdaFunctionTimedOutEventDetails:
      output.lambdaFunctionTimedOutEventDetails !== undefined && output.lambdaFunctionTimedOutEventDetails !== null
        ? deserializeAws_json1_0LambdaFunctionTimedOutEventDetails(output.lambdaFunctionTimedOutEventDetails, context)
        : undefined,
    mapIterationAbortedEventDetails:
      output.mapIterationAbortedEventDetails !== undefined && output.mapIterationAbortedEventDetails !== null
        ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationAbortedEventDetails, context)
        : undefined,
    mapIterationFailedEventDetails:
      output.mapIterationFailedEventDetails !== undefined && output.mapIterationFailedEventDetails !== null
        ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationFailedEventDetails, context)
        : undefined,
    mapIterationStartedEventDetails:
      output.mapIterationStartedEventDetails !== undefined && output.mapIterationStartedEventDetails !== null
        ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationStartedEventDetails, context)
        : undefined,
    mapIterationSucceededEventDetails:
      output.mapIterationSucceededEventDetails !== undefined && output.mapIterationSucceededEventDetails !== null
        ? deserializeAws_json1_0MapIterationEventDetails(output.mapIterationSucceededEventDetails, context)
        : undefined,
    mapStateStartedEventDetails:
      output.mapStateStartedEventDetails !== undefined && output.mapStateStartedEventDetails !== null
        ? deserializeAws_json1_0MapStateStartedEventDetails(output.mapStateStartedEventDetails, context)
        : undefined,
    previousEventId:
      output.previousEventId !== undefined && output.previousEventId !== null ? output.previousEventId : undefined,
    stateEnteredEventDetails:
      output.stateEnteredEventDetails !== undefined && output.stateEnteredEventDetails !== null
        ? deserializeAws_json1_0StateEnteredEventDetails(output.stateEnteredEventDetails, context)
        : undefined,
    stateExitedEventDetails:
      output.stateExitedEventDetails !== undefined && output.stateExitedEventDetails !== null
        ? deserializeAws_json1_0StateExitedEventDetails(output.stateExitedEventDetails, context)
        : undefined,
    taskFailedEventDetails:
      output.taskFailedEventDetails !== undefined && output.taskFailedEventDetails !== null
        ? deserializeAws_json1_0TaskFailedEventDetails(output.taskFailedEventDetails, context)
        : undefined,
    taskScheduledEventDetails:
      output.taskScheduledEventDetails !== undefined && output.taskScheduledEventDetails !== null
        ? deserializeAws_json1_0TaskScheduledEventDetails(output.taskScheduledEventDetails, context)
        : undefined,
    taskStartFailedEventDetails:
      output.taskStartFailedEventDetails !== undefined && output.taskStartFailedEventDetails !== null
        ? deserializeAws_json1_0TaskStartFailedEventDetails(output.taskStartFailedEventDetails, context)
        : undefined,
    taskStartedEventDetails:
      output.taskStartedEventDetails !== undefined && output.taskStartedEventDetails !== null
        ? deserializeAws_json1_0TaskStartedEventDetails(output.taskStartedEventDetails, context)
        : undefined,
    taskSubmitFailedEventDetails:
      output.taskSubmitFailedEventDetails !== undefined && output.taskSubmitFailedEventDetails !== null
        ? deserializeAws_json1_0TaskSubmitFailedEventDetails(output.taskSubmitFailedEventDetails, context)
        : undefined,
    taskSubmittedEventDetails:
      output.taskSubmittedEventDetails !== undefined && output.taskSubmittedEventDetails !== null
        ? deserializeAws_json1_0TaskSubmittedEventDetails(output.taskSubmittedEventDetails, context)
        : undefined,
    taskSucceededEventDetails:
      output.taskSucceededEventDetails !== undefined && output.taskSucceededEventDetails !== null
        ? deserializeAws_json1_0TaskSucceededEventDetails(output.taskSucceededEventDetails, context)
        : undefined,
    taskTimedOutEventDetails:
      output.taskTimedOutEventDetails !== undefined && output.taskTimedOutEventDetails !== null
        ? deserializeAws_json1_0TaskTimedOutEventDetails(output.taskTimedOutEventDetails, context)
        : undefined,
    timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? new Date(Math.round(output.timestamp * 1000))
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_0HistoryEventExecutionDataDetails = (
  output: any,
  context: __SerdeContext
): HistoryEventExecutionDataDetails => {
  return {
    truncated: output.truncated !== undefined && output.truncated !== null ? output.truncated : undefined,
  } as any;
};

const deserializeAws_json1_0HistoryEventList = (output: any, context: __SerdeContext): HistoryEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0HistoryEvent(entry, context);
    });
};

const deserializeAws_json1_0InvalidArn = (output: any, context: __SerdeContext): InvalidArn => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0InvalidDefinition = (output: any, context: __SerdeContext): InvalidDefinition => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0InvalidExecutionInput = (output: any, context: __SerdeContext): InvalidExecutionInput => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0InvalidLoggingConfiguration = (
  output: any,
  context: __SerdeContext
): InvalidLoggingConfiguration => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0InvalidName = (output: any, context: __SerdeContext): InvalidName => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0InvalidOutput = (output: any, context: __SerdeContext): InvalidOutput => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0InvalidToken = (output: any, context: __SerdeContext): InvalidToken => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0InvalidTracingConfiguration = (
  output: any,
  context: __SerdeContext
): InvalidTracingConfiguration => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0LambdaFunctionFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0LambdaFunctionScheduledEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduledEventDetails => {
  return {
    input: output.input !== undefined && output.input !== null ? output.input : undefined,
    inputDetails:
      output.inputDetails !== undefined && output.inputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
        : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    timeoutInSeconds:
      output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
  } as any;
};

const deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduleFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0LambdaFunctionStartFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionStartFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0LambdaFunctionSucceededEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionSucceededEventDetails => {
  return {
    output: output.output !== undefined && output.output !== null ? output.output : undefined,
    outputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0LambdaFunctionTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionTimedOutEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
  } as any;
};

const deserializeAws_json1_0ListActivitiesOutput = (output: any, context: __SerdeContext): ListActivitiesOutput => {
  return {
    activities:
      output.activities !== undefined && output.activities !== null
        ? deserializeAws_json1_0ActivityList(output.activities, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_0ListExecutionsOutput = (output: any, context: __SerdeContext): ListExecutionsOutput => {
  return {
    executions:
      output.executions !== undefined && output.executions !== null
        ? deserializeAws_json1_0ExecutionList(output.executions, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_0ListStateMachinesOutput = (
  output: any,
  context: __SerdeContext
): ListStateMachinesOutput => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    stateMachines:
      output.stateMachines !== undefined && output.stateMachines !== null
        ? deserializeAws_json1_0StateMachineList(output.stateMachines, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_0TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0LogDestination = (output: any, context: __SerdeContext): LogDestination => {
  return {
    cloudWatchLogsLogGroup:
      output.cloudWatchLogsLogGroup !== undefined && output.cloudWatchLogsLogGroup !== null
        ? deserializeAws_json1_0CloudWatchLogsLogGroup(output.cloudWatchLogsLogGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0LogDestinationList = (output: any, context: __SerdeContext): LogDestination[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0LogDestination(entry, context);
    });
};

const deserializeAws_json1_0LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    destinations:
      output.destinations !== undefined && output.destinations !== null
        ? deserializeAws_json1_0LogDestinationList(output.destinations, context)
        : undefined,
    includeExecutionData:
      output.includeExecutionData !== undefined && output.includeExecutionData !== null
        ? output.includeExecutionData
        : undefined,
    level: output.level !== undefined && output.level !== null ? output.level : undefined,
  } as any;
};

const deserializeAws_json1_0MapIterationEventDetails = (
  output: any,
  context: __SerdeContext
): MapIterationEventDetails => {
  return {
    index: output.index !== undefined && output.index !== null ? output.index : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_json1_0MapStateStartedEventDetails = (
  output: any,
  context: __SerdeContext
): MapStateStartedEventDetails => {
  return {
    length: output.length !== undefined && output.length !== null ? output.length : undefined,
  } as any;
};

const deserializeAws_json1_0MissingRequiredParameter = (
  output: any,
  context: __SerdeContext
): MissingRequiredParameter => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFound = (output: any, context: __SerdeContext): ResourceNotFound => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
  } as any;
};

const deserializeAws_json1_0SendTaskFailureOutput = (output: any, context: __SerdeContext): SendTaskFailureOutput => {
  return {} as any;
};

const deserializeAws_json1_0SendTaskHeartbeatOutput = (
  output: any,
  context: __SerdeContext
): SendTaskHeartbeatOutput => {
  return {} as any;
};

const deserializeAws_json1_0SendTaskSuccessOutput = (output: any, context: __SerdeContext): SendTaskSuccessOutput => {
  return {} as any;
};

const deserializeAws_json1_0StartExecutionOutput = (output: any, context: __SerdeContext): StartExecutionOutput => {
  return {
    executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
    startDate:
      output.startDate !== undefined && output.startDate !== null
        ? new Date(Math.round(output.startDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartSyncExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartSyncExecutionOutput => {
  return {
    billingDetails:
      output.billingDetails !== undefined && output.billingDetails !== null
        ? deserializeAws_json1_0BillingDetails(output.billingDetails, context)
        : undefined,
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    executionArn: output.executionArn !== undefined && output.executionArn !== null ? output.executionArn : undefined,
    input: output.input !== undefined && output.input !== null ? output.input : undefined,
    inputDetails:
      output.inputDetails !== undefined && output.inputDetails !== null
        ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.inputDetails, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    output: output.output !== undefined && output.output !== null ? output.output : undefined,
    outputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_json1_0CloudWatchEventsExecutionDataDetails(output.outputDetails, context)
        : undefined,
    startDate:
      output.startDate !== undefined && output.startDate !== null
        ? new Date(Math.round(output.startDate * 1000))
        : undefined,
    stateMachineArn:
      output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    stopDate:
      output.stopDate !== undefined && output.stopDate !== null
        ? new Date(Math.round(output.stopDate * 1000))
        : undefined,
    traceHeader: output.traceHeader !== undefined && output.traceHeader !== null ? output.traceHeader : undefined,
  } as any;
};

const deserializeAws_json1_0StateEnteredEventDetails = (
  output: any,
  context: __SerdeContext
): StateEnteredEventDetails => {
  return {
    input: output.input !== undefined && output.input !== null ? output.input : undefined,
    inputDetails:
      output.inputDetails !== undefined && output.inputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.inputDetails, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_json1_0StateExitedEventDetails = (
  output: any,
  context: __SerdeContext
): StateExitedEventDetails => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    output: output.output !== undefined && output.output !== null ? output.output : undefined,
    outputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StateMachineAlreadyExists = (
  output: any,
  context: __SerdeContext
): StateMachineAlreadyExists => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0StateMachineDeleting = (output: any, context: __SerdeContext): StateMachineDeleting => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0StateMachineDoesNotExist = (
  output: any,
  context: __SerdeContext
): StateMachineDoesNotExist => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0StateMachineLimitExceeded = (
  output: any,
  context: __SerdeContext
): StateMachineLimitExceeded => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0StateMachineList = (output: any, context: __SerdeContext): StateMachineListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0StateMachineListItem(entry, context);
    });
};

const deserializeAws_json1_0StateMachineListItem = (output: any, context: __SerdeContext): StateMachineListItem => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    stateMachineArn:
      output.stateMachineArn !== undefined && output.stateMachineArn !== null ? output.stateMachineArn : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_0StateMachineTypeNotSupported = (
  output: any,
  context: __SerdeContext
): StateMachineTypeNotSupported => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0StopExecutionOutput = (output: any, context: __SerdeContext): StopExecutionOutput => {
  return {
    stopDate:
      output.stopDate !== undefined && output.stopDate !== null
        ? new Date(Math.round(output.stopDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
};

const deserializeAws_json1_0TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_0TaskDoesNotExist = (output: any, context: __SerdeContext): TaskDoesNotExist => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0TaskFailedEventDetails = (output: any, context: __SerdeContext): TaskFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_0TaskScheduledEventDetails = (
  output: any,
  context: __SerdeContext
): TaskScheduledEventDetails => {
  return {
    heartbeatInSeconds:
      output.heartbeatInSeconds !== undefined && output.heartbeatInSeconds !== null
        ? output.heartbeatInSeconds
        : undefined,
    parameters: output.parameters !== undefined && output.parameters !== null ? output.parameters : undefined,
    region: output.region !== undefined && output.region !== null ? output.region : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    timeoutInSeconds:
      output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
  } as any;
};

const deserializeAws_json1_0TaskStartedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskStartedEventDetails => {
  return {
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_0TaskStartFailedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskStartFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_0TaskSubmitFailedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskSubmitFailedEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_0TaskSubmittedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskSubmittedEventDetails => {
  return {
    output: output.output !== undefined && output.output !== null ? output.output : undefined,
    outputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
        : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_0TaskSucceededEventDetails = (
  output: any,
  context: __SerdeContext
): TaskSucceededEventDetails => {
  return {
    output: output.output !== undefined && output.output !== null ? output.output : undefined,
    outputDetails:
      output.outputDetails !== undefined && output.outputDetails !== null
        ? deserializeAws_json1_0HistoryEventExecutionDataDetails(output.outputDetails, context)
        : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_0TaskTimedOut = (output: any, context: __SerdeContext): TaskTimedOut => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_0TaskTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): TaskTimedOutEventDetails => {
  return {
    cause: output.cause !== undefined && output.cause !== null ? output.cause : undefined,
    error: output.error !== undefined && output.error !== null ? output.error : undefined,
    resource: output.resource !== undefined && output.resource !== null ? output.resource : undefined,
    resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
  } as any;
};

const deserializeAws_json1_0TooManyTags = (output: any, context: __SerdeContext): TooManyTags => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    resourceName: output.resourceName !== undefined && output.resourceName !== null ? output.resourceName : undefined,
  } as any;
};

const deserializeAws_json1_0TracingConfiguration = (output: any, context: __SerdeContext): TracingConfiguration => {
  return {
    enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
  } as any;
};

const deserializeAws_json1_0UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_0UpdateStateMachineOutput = (
  output: any,
  context: __SerdeContext
): UpdateStateMachineOutput => {
  return {
    updateDate:
      output.updateDate !== undefined && output.updateDate !== null
        ? new Date(Math.round(output.updateDate * 1000))
        : undefined,
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
