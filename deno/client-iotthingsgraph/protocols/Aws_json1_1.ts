import {
  AssociateEntityToThingCommandInput,
  AssociateEntityToThingCommandOutput,
} from "../commands/AssociateEntityToThingCommand.ts";
import { CreateFlowTemplateCommandInput, CreateFlowTemplateCommandOutput } from "../commands/CreateFlowTemplateCommand.ts";
import {
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
} from "../commands/CreateSystemInstanceCommand.ts";
import {
  CreateSystemTemplateCommandInput,
  CreateSystemTemplateCommandOutput,
} from "../commands/CreateSystemTemplateCommand.ts";
import { DeleteFlowTemplateCommandInput, DeleteFlowTemplateCommandOutput } from "../commands/DeleteFlowTemplateCommand.ts";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "../commands/DeleteNamespaceCommand.ts";
import {
  DeleteSystemInstanceCommandInput,
  DeleteSystemInstanceCommandOutput,
} from "../commands/DeleteSystemInstanceCommand.ts";
import {
  DeleteSystemTemplateCommandInput,
  DeleteSystemTemplateCommandOutput,
} from "../commands/DeleteSystemTemplateCommand.ts";
import {
  DeploySystemInstanceCommandInput,
  DeploySystemInstanceCommandOutput,
} from "../commands/DeploySystemInstanceCommand.ts";
import {
  DeprecateFlowTemplateCommandInput,
  DeprecateFlowTemplateCommandOutput,
} from "../commands/DeprecateFlowTemplateCommand.ts";
import {
  DeprecateSystemTemplateCommandInput,
  DeprecateSystemTemplateCommandOutput,
} from "../commands/DeprecateSystemTemplateCommand.ts";
import { DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput } from "../commands/DescribeNamespaceCommand.ts";
import {
  DissociateEntityFromThingCommandInput,
  DissociateEntityFromThingCommandOutput,
} from "../commands/DissociateEntityFromThingCommand.ts";
import { GetEntitiesCommandInput, GetEntitiesCommandOutput } from "../commands/GetEntitiesCommand.ts";
import { GetFlowTemplateCommandInput, GetFlowTemplateCommandOutput } from "../commands/GetFlowTemplateCommand.ts";
import {
  GetFlowTemplateRevisionsCommandInput,
  GetFlowTemplateRevisionsCommandOutput,
} from "../commands/GetFlowTemplateRevisionsCommand.ts";
import {
  GetNamespaceDeletionStatusCommandInput,
  GetNamespaceDeletionStatusCommandOutput,
} from "../commands/GetNamespaceDeletionStatusCommand.ts";
import { GetSystemInstanceCommandInput, GetSystemInstanceCommandOutput } from "../commands/GetSystemInstanceCommand.ts";
import { GetSystemTemplateCommandInput, GetSystemTemplateCommandOutput } from "../commands/GetSystemTemplateCommand.ts";
import {
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
} from "../commands/GetSystemTemplateRevisionsCommand.ts";
import { GetUploadStatusCommandInput, GetUploadStatusCommandOutput } from "../commands/GetUploadStatusCommand.ts";
import {
  ListFlowExecutionMessagesCommandInput,
  ListFlowExecutionMessagesCommandOutput,
} from "../commands/ListFlowExecutionMessagesCommand.ts";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand.ts";
import { SearchEntitiesCommandInput, SearchEntitiesCommandOutput } from "../commands/SearchEntitiesCommand.ts";
import {
  SearchFlowExecutionsCommandInput,
  SearchFlowExecutionsCommandOutput,
} from "../commands/SearchFlowExecutionsCommand.ts";
import {
  SearchFlowTemplatesCommandInput,
  SearchFlowTemplatesCommandOutput,
} from "../commands/SearchFlowTemplatesCommand.ts";
import {
  SearchSystemInstancesCommandInput,
  SearchSystemInstancesCommandOutput,
} from "../commands/SearchSystemInstancesCommand.ts";
import {
  SearchSystemTemplatesCommandInput,
  SearchSystemTemplatesCommandOutput,
} from "../commands/SearchSystemTemplatesCommand.ts";
import { SearchThingsCommandInput, SearchThingsCommandOutput } from "../commands/SearchThingsCommand.ts";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand.ts";
import {
  UndeploySystemInstanceCommandInput,
  UndeploySystemInstanceCommandOutput,
} from "../commands/UndeploySystemInstanceCommand.ts";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand.ts";
import { UpdateFlowTemplateCommandInput, UpdateFlowTemplateCommandOutput } from "../commands/UpdateFlowTemplateCommand.ts";
import {
  UpdateSystemTemplateCommandInput,
  UpdateSystemTemplateCommandOutput,
} from "../commands/UpdateSystemTemplateCommand.ts";
import {
  UploadEntityDefinitionsCommandInput,
  UploadEntityDefinitionsCommandOutput,
} from "../commands/UploadEntityDefinitionsCommand.ts";
import {
  AssociateEntityToThingRequest,
  AssociateEntityToThingResponse,
  CreateFlowTemplateRequest,
  CreateFlowTemplateResponse,
  CreateSystemInstanceRequest,
  CreateSystemInstanceResponse,
  CreateSystemTemplateRequest,
  CreateSystemTemplateResponse,
  DefinitionDocument,
  DeleteFlowTemplateRequest,
  DeleteFlowTemplateResponse,
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteSystemInstanceRequest,
  DeleteSystemInstanceResponse,
  DeleteSystemTemplateRequest,
  DeleteSystemTemplateResponse,
  DependencyRevision,
  DeploySystemInstanceRequest,
  DeploySystemInstanceResponse,
  DeprecateFlowTemplateRequest,
  DeprecateFlowTemplateResponse,
  DeprecateSystemTemplateRequest,
  DeprecateSystemTemplateResponse,
  DescribeNamespaceRequest,
  DescribeNamespaceResponse,
  DissociateEntityFromThingRequest,
  DissociateEntityFromThingResponse,
  EntityDescription,
  EntityFilter,
  EntityType,
  FlowExecutionMessage,
  FlowExecutionSummary,
  FlowTemplateDescription,
  FlowTemplateFilter,
  FlowTemplateSummary,
  GetEntitiesRequest,
  GetEntitiesResponse,
  GetFlowTemplateRequest,
  GetFlowTemplateResponse,
  GetFlowTemplateRevisionsRequest,
  GetFlowTemplateRevisionsResponse,
  GetNamespaceDeletionStatusRequest,
  GetNamespaceDeletionStatusResponse,
  GetSystemInstanceRequest,
  GetSystemInstanceResponse,
  GetSystemTemplateRequest,
  GetSystemTemplateResponse,
  GetSystemTemplateRevisionsRequest,
  GetSystemTemplateRevisionsResponse,
  GetUploadStatusRequest,
  GetUploadStatusResponse,
  InternalFailureException,
  InvalidRequestException,
  LimitExceededException,
  ListFlowExecutionMessagesRequest,
  ListFlowExecutionMessagesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MetricsConfiguration,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  SearchEntitiesRequest,
  SearchEntitiesResponse,
  SearchFlowExecutionsRequest,
  SearchFlowExecutionsResponse,
  SearchFlowTemplatesRequest,
  SearchFlowTemplatesResponse,
  SearchSystemInstancesRequest,
  SearchSystemInstancesResponse,
  SearchSystemTemplatesRequest,
  SearchSystemTemplatesResponse,
  SearchThingsRequest,
  SearchThingsResponse,
  SystemInstanceDescription,
  SystemInstanceFilter,
  SystemInstanceSummary,
  SystemTemplateDescription,
  SystemTemplateFilter,
  SystemTemplateSummary,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  Thing,
  ThrottlingException,
  UndeploySystemInstanceRequest,
  UndeploySystemInstanceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateFlowTemplateRequest,
  UpdateFlowTemplateResponse,
  UpdateSystemTemplateRequest,
  UpdateSystemTemplateResponse,
  UploadEntityDefinitionsRequest,
  UploadEntityDefinitionsResponse,
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

export const serializeAws_json1_1AssociateEntityToThingCommand = async (
  input: AssociateEntityToThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.AssociateEntityToThing",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateEntityToThingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFlowTemplateCommand = async (
  input: CreateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.CreateFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSystemInstanceCommand = async (
  input: CreateSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.CreateSystemInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSystemTemplateCommand = async (
  input: CreateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.CreateSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFlowTemplateCommand = async (
  input: DeleteFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DeleteFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DeleteNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSystemInstanceCommand = async (
  input: DeleteSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DeleteSystemInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSystemTemplateCommand = async (
  input: DeleteSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DeleteSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeploySystemInstanceCommand = async (
  input: DeploySystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DeploySystemInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeploySystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeprecateFlowTemplateCommand = async (
  input: DeprecateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DeprecateFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeprecateFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeprecateSystemTemplateCommand = async (
  input: DeprecateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DeprecateSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeprecateSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeNamespaceCommand = async (
  input: DescribeNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DescribeNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DissociateEntityFromThingCommand = async (
  input: DissociateEntityFromThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.DissociateEntityFromThing",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DissociateEntityFromThingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEntitiesCommand = async (
  input: GetEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.GetEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetFlowTemplateCommand = async (
  input: GetFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.GetFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetFlowTemplateRevisionsCommand = async (
  input: GetFlowTemplateRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.GetFlowTemplateRevisions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetFlowTemplateRevisionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetNamespaceDeletionStatusCommand = async (
  input: GetNamespaceDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.GetNamespaceDeletionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNamespaceDeletionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSystemInstanceCommand = async (
  input: GetSystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.GetSystemInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSystemTemplateCommand = async (
  input: GetSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.GetSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSystemTemplateRevisionsCommand = async (
  input: GetSystemTemplateRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.GetSystemTemplateRevisions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSystemTemplateRevisionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUploadStatusCommand = async (
  input: GetUploadStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.GetUploadStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUploadStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFlowExecutionMessagesCommand = async (
  input: ListFlowExecutionMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.ListFlowExecutionMessages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFlowExecutionMessagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchEntitiesCommand = async (
  input: SearchEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.SearchEntities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchEntitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchFlowExecutionsCommand = async (
  input: SearchFlowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.SearchFlowExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchFlowExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchFlowTemplatesCommand = async (
  input: SearchFlowTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.SearchFlowTemplates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchFlowTemplatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchSystemInstancesCommand = async (
  input: SearchSystemInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.SearchSystemInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchSystemInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchSystemTemplatesCommand = async (
  input: SearchSystemTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.SearchSystemTemplates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchSystemTemplatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchThingsCommand = async (
  input: SearchThingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.SearchThings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchThingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UndeploySystemInstanceCommand = async (
  input: UndeploySystemInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.UndeploySystemInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UndeploySystemInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFlowTemplateCommand = async (
  input: UpdateFlowTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.UpdateFlowTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFlowTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSystemTemplateCommand = async (
  input: UpdateSystemTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.UpdateSystemTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSystemTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UploadEntityDefinitionsCommand = async (
  input: UploadEntityDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "X-Amz-Target": "IotThingsGraphFrontEndService.UploadEntityDefinitions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UploadEntityDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateEntityToThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntityToThingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateEntityToThingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateEntityToThingResponse(data, context);
  const response: AssociateEntityToThingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateEntityToThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEntityToThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFlowTemplateResponse(data, context);
  const response: CreateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotthingsgraph#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateSystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSystemInstanceResponse(data, context);
  const response: CreateSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotthingsgraph#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSystemTemplateResponse(data, context);
  const response: CreateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFlowTemplateResponse(data, context);
  const response: DeleteFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteSystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSystemInstanceResponse(data, context);
  const response: DeleteSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSystemTemplateResponse(data, context);
  const response: DeleteSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeploySystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeploySystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeploySystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeploySystemInstanceResponse(data, context);
  const response: DeploySystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeploySystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeploySystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeprecateFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeprecateFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeprecateFlowTemplateResponse(data, context);
  const response: DeprecateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeprecateFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeprecateSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeprecateSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeprecateSystemTemplateResponse(data, context);
  const response: DeprecateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeprecateSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNamespaceResponse(data, context);
  const response: DescribeNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DissociateEntityFromThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociateEntityFromThingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DissociateEntityFromThingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DissociateEntityFromThingResponse(data, context);
  const response: DissociateEntityFromThingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DissociateEntityFromThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociateEntityFromThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEntitiesResponse(data, context);
  const response: GetEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFlowTemplateResponse(data, context);
  const response: GetFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetFlowTemplateRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetFlowTemplateRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetFlowTemplateRevisionsResponse(data, context);
  const response: GetFlowTemplateRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetFlowTemplateRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFlowTemplateRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetNamespaceDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNamespaceDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNamespaceDeletionStatusResponse(data, context);
  const response: GetNamespaceDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNamespaceDeletionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceDeletionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSystemInstanceResponse(data, context);
  const response: GetSystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSystemTemplateResponse(data, context);
  const response: GetSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSystemTemplateRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateRevisionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSystemTemplateRevisionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSystemTemplateRevisionsResponse(data, context);
  const response: GetSystemTemplateRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSystemTemplateRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSystemTemplateRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetUploadStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUploadStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUploadStatusResponse(data, context);
  const response: GetUploadStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUploadStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListFlowExecutionMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowExecutionMessagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFlowExecutionMessagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFlowExecutionMessagesResponse(data, context);
  const response: ListFlowExecutionMessagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFlowExecutionMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowExecutionMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SearchEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchEntitiesResponse(data, context);
  const response: SearchEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SearchFlowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchFlowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFlowExecutionsResponse(data, context);
  const response: SearchFlowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchFlowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SearchFlowTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchFlowTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchFlowTemplatesResponse(data, context);
  const response: SearchFlowTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchFlowTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchFlowTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SearchSystemInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchSystemInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchSystemInstancesResponse(data, context);
  const response: SearchSystemInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchSystemInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SearchSystemTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchSystemTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchSystemTemplatesResponse(data, context);
  const response: SearchSystemTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchSystemTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSystemTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SearchThingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchThingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchThingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchThingsResponse(data, context);
  const response: SearchThingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchThingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchThingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UndeploySystemInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeploySystemInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UndeploySystemInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UndeploySystemInstanceResponse(data, context);
  const response: UndeploySystemInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UndeploySystemInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeploySystemInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotthingsgraph#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotthingsgraph#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateFlowTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFlowTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFlowTemplateResponse(data, context);
  const response: UpdateFlowTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFlowTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateSystemTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSystemTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSystemTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSystemTemplateResponse(data, context);
  const response: UpdateSystemTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSystemTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSystemTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotthingsgraph#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UploadEntityDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadEntityDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UploadEntityDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UploadEntityDefinitionsResponse(data, context);
  const response: UploadEntityDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UploadEntityDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadEntityDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotthingsgraph#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotthingsgraph#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotthingsgraph#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalFailureException(body, context);
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
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

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
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

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AssociateEntityToThingRequest = (
  input: AssociateEntityToThingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.entityId !== undefined && input.entityId !== null && { entityId: input.entityId }),
    ...(input.namespaceVersion !== undefined &&
      input.namespaceVersion !== null && { namespaceVersion: input.namespaceVersion }),
    ...(input.thingName !== undefined && input.thingName !== null && { thingName: input.thingName }),
  };
};

const serializeAws_json1_1CreateFlowTemplateRequest = (
  input: CreateFlowTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.compatibleNamespaceVersion !== undefined &&
      input.compatibleNamespaceVersion !== null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
    ...(input.definition !== undefined &&
      input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
  };
};

const serializeAws_json1_1CreateSystemInstanceRequest = (
  input: CreateSystemInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.definition !== undefined &&
      input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
    ...(input.flowActionsRoleArn !== undefined &&
      input.flowActionsRoleArn !== null && { flowActionsRoleArn: input.flowActionsRoleArn }),
    ...(input.greengrassGroupName !== undefined &&
      input.greengrassGroupName !== null && { greengrassGroupName: input.greengrassGroupName }),
    ...(input.metricsConfiguration !== undefined &&
      input.metricsConfiguration !== null && {
        metricsConfiguration: serializeAws_json1_1MetricsConfiguration(input.metricsConfiguration, context),
      }),
    ...(input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
    ...(input.target !== undefined && input.target !== null && { target: input.target }),
  };
};

const serializeAws_json1_1CreateSystemTemplateRequest = (
  input: CreateSystemTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.compatibleNamespaceVersion !== undefined &&
      input.compatibleNamespaceVersion !== null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
    ...(input.definition !== undefined &&
      input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
  };
};

const serializeAws_json1_1DefinitionDocument = (input: DefinitionDocument, context: __SerdeContext): any => {
  return {
    ...(input.language !== undefined && input.language !== null && { language: input.language }),
    ...(input.text !== undefined && input.text !== null && { text: input.text }),
  };
};

const serializeAws_json1_1DeleteFlowTemplateRequest = (
  input: DeleteFlowTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1DeleteNamespaceRequest = (input: DeleteNamespaceRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1DeleteSystemInstanceRequest = (
  input: DeleteSystemInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1DeleteSystemTemplateRequest = (
  input: DeleteSystemTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1DeploySystemInstanceRequest = (
  input: DeploySystemInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1DeprecateFlowTemplateRequest = (
  input: DeprecateFlowTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1DeprecateSystemTemplateRequest = (
  input: DeprecateSystemTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1DescribeNamespaceRequest = (
  input: DescribeNamespaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.namespaceName !== undefined && input.namespaceName !== null && { namespaceName: input.namespaceName }),
  };
};

const serializeAws_json1_1DissociateEntityFromThingRequest = (
  input: DissociateEntityFromThingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.entityType !== undefined && input.entityType !== null && { entityType: input.entityType }),
    ...(input.thingName !== undefined && input.thingName !== null && { thingName: input.thingName }),
  };
};

const serializeAws_json1_1EntityFilter = (input: EntityFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_json1_1EntityFilterValues(input.value, context) }),
  };
};

const serializeAws_json1_1EntityFilters = (input: EntityFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EntityFilter(entry, context);
    });
};

const serializeAws_json1_1EntityFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EntityTypes = (input: (EntityType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1FlowTemplateFilter = (input: FlowTemplateFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_json1_1FlowTemplateFilterValues(input.value, context) }),
  };
};

const serializeAws_json1_1FlowTemplateFilters = (input: FlowTemplateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1FlowTemplateFilter(entry, context);
    });
};

const serializeAws_json1_1FlowTemplateFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetEntitiesRequest = (input: GetEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ids !== undefined && input.ids !== null && { ids: serializeAws_json1_1Urns(input.ids, context) }),
    ...(input.namespaceVersion !== undefined &&
      input.namespaceVersion !== null && { namespaceVersion: input.namespaceVersion }),
  };
};

const serializeAws_json1_1GetFlowTemplateRequest = (input: GetFlowTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.revisionNumber !== undefined &&
      input.revisionNumber !== null && { revisionNumber: input.revisionNumber }),
  };
};

const serializeAws_json1_1GetFlowTemplateRevisionsRequest = (
  input: GetFlowTemplateRevisionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetNamespaceDeletionStatusRequest = (
  input: GetNamespaceDeletionStatusRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetSystemInstanceRequest = (
  input: GetSystemInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1GetSystemTemplateRequest = (
  input: GetSystemTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.revisionNumber !== undefined &&
      input.revisionNumber !== null && { revisionNumber: input.revisionNumber }),
  };
};

const serializeAws_json1_1GetSystemTemplateRevisionsRequest = (
  input: GetSystemTemplateRevisionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetUploadStatusRequest = (input: GetUploadStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.uploadId !== undefined && input.uploadId !== null && { uploadId: input.uploadId }),
  };
};

const serializeAws_json1_1ListFlowExecutionMessagesRequest = (
  input: ListFlowExecutionMessagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.flowExecutionId !== undefined &&
      input.flowExecutionId !== null && { flowExecutionId: input.flowExecutionId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1MetricsConfiguration = (input: MetricsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.cloudMetricEnabled !== undefined &&
      input.cloudMetricEnabled !== null && { cloudMetricEnabled: input.cloudMetricEnabled }),
    ...(input.metricRuleRoleArn !== undefined &&
      input.metricRuleRoleArn !== null && { metricRuleRoleArn: input.metricRuleRoleArn }),
  };
};

const serializeAws_json1_1SearchEntitiesRequest = (input: SearchEntitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.entityTypes !== undefined &&
      input.entityTypes !== null && { entityTypes: serializeAws_json1_1EntityTypes(input.entityTypes, context) }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1EntityFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.namespaceVersion !== undefined &&
      input.namespaceVersion !== null && { namespaceVersion: input.namespaceVersion }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1SearchFlowExecutionsRequest = (
  input: SearchFlowExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined &&
      input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.flowExecutionId !== undefined &&
      input.flowExecutionId !== null && { flowExecutionId: input.flowExecutionId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.startTime !== undefined &&
      input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.systemInstanceId !== undefined &&
      input.systemInstanceId !== null && { systemInstanceId: input.systemInstanceId }),
  };
};

const serializeAws_json1_1SearchFlowTemplatesRequest = (
  input: SearchFlowTemplatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1FlowTemplateFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1SearchSystemInstancesRequest = (
  input: SearchSystemInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1SystemInstanceFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1SearchSystemTemplatesRequest = (
  input: SearchSystemTemplatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1SystemTemplateFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1SearchThingsRequest = (input: SearchThingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.entityId !== undefined && input.entityId !== null && { entityId: input.entityId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.namespaceVersion !== undefined &&
      input.namespaceVersion !== null && { namespaceVersion: input.namespaceVersion }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1SystemInstanceFilter = (input: SystemInstanceFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_json1_1SystemInstanceFilterValues(input.value, context) }),
  };
};

const serializeAws_json1_1SystemInstanceFilters = (input: SystemInstanceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SystemInstanceFilter(entry, context);
    });
};

const serializeAws_json1_1SystemInstanceFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SystemTemplateFilter = (input: SystemTemplateFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_json1_1SystemTemplateFilterValues(input.value, context) }),
  };
};

const serializeAws_json1_1SystemTemplateFilters = (input: SystemTemplateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SystemTemplateFilter(entry, context);
    });
};

const serializeAws_json1_1SystemTemplateFilterValues = (input: string[], context: __SerdeContext): any => {
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
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
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
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UndeploySystemInstanceRequest = (
  input: UndeploySystemInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined &&
      input.tagKeys !== null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateFlowTemplateRequest = (
  input: UpdateFlowTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.compatibleNamespaceVersion !== undefined &&
      input.compatibleNamespaceVersion !== null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
    ...(input.definition !== undefined &&
      input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1UpdateSystemTemplateRequest = (
  input: UpdateSystemTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.compatibleNamespaceVersion !== undefined &&
      input.compatibleNamespaceVersion !== null && { compatibleNamespaceVersion: input.compatibleNamespaceVersion }),
    ...(input.definition !== undefined &&
      input.definition !== null && { definition: serializeAws_json1_1DefinitionDocument(input.definition, context) }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_json1_1UploadEntityDefinitionsRequest = (
  input: UploadEntityDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.deprecateExistingEntities !== undefined &&
      input.deprecateExistingEntities !== null && { deprecateExistingEntities: input.deprecateExistingEntities }),
    ...(input.document !== undefined &&
      input.document !== null && { document: serializeAws_json1_1DefinitionDocument(input.document, context) }),
    ...(input.syncWithPublicNamespace !== undefined &&
      input.syncWithPublicNamespace !== null && { syncWithPublicNamespace: input.syncWithPublicNamespace }),
  };
};

const serializeAws_json1_1Urns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1AssociateEntityToThingResponse = (
  output: any,
  context: __SerdeContext
): AssociateEntityToThingResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): CreateFlowTemplateResponse => {
  return {
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1FlowTemplateSummary(output.summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): CreateSystemInstanceResponse => {
  return {
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1SystemInstanceSummary(output.summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): CreateSystemTemplateResponse => {
  return {
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1SystemTemplateSummary(output.summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DefinitionDocument = (output: any, context: __SerdeContext): DefinitionDocument => {
  return {
    language: output.language !== undefined && output.language !== null ? output.language : undefined,
    text: output.text !== undefined && output.text !== null ? output.text : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeleteFlowTemplateResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteNamespaceResponse = (
  output: any,
  context: __SerdeContext
): DeleteNamespaceResponse => {
  return {
    namespaceArn: output.namespaceArn !== undefined && output.namespaceArn !== null ? output.namespaceArn : undefined,
    namespaceName:
      output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeleteSystemInstanceResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeleteSystemTemplateResponse => {
  return {} as any;
};

const deserializeAws_json1_1DependencyRevision = (output: any, context: __SerdeContext): DependencyRevision => {
  return {
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    revisionNumber:
      output.revisionNumber !== undefined && output.revisionNumber !== null ? output.revisionNumber : undefined,
  } as any;
};

const deserializeAws_json1_1DependencyRevisions = (output: any, context: __SerdeContext): DependencyRevision[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DependencyRevision(entry, context);
    });
};

const deserializeAws_json1_1DeploySystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeploySystemInstanceResponse => {
  return {
    greengrassDeploymentId:
      output.greengrassDeploymentId !== undefined && output.greengrassDeploymentId !== null
        ? output.greengrassDeploymentId
        : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1SystemInstanceSummary(output.summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeprecateFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeprecateFlowTemplateResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeprecateSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeprecateSystemTemplateResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeNamespaceResponse = (
  output: any,
  context: __SerdeContext
): DescribeNamespaceResponse => {
  return {
    namespaceArn: output.namespaceArn !== undefined && output.namespaceArn !== null ? output.namespaceArn : undefined,
    namespaceName:
      output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
    namespaceVersion:
      output.namespaceVersion !== undefined && output.namespaceVersion !== null ? output.namespaceVersion : undefined,
    trackingNamespaceName:
      output.trackingNamespaceName !== undefined && output.trackingNamespaceName !== null
        ? output.trackingNamespaceName
        : undefined,
    trackingNamespaceVersion:
      output.trackingNamespaceVersion !== undefined && output.trackingNamespaceVersion !== null
        ? output.trackingNamespaceVersion
        : undefined,
  } as any;
};

const deserializeAws_json1_1DissociateEntityFromThingResponse = (
  output: any,
  context: __SerdeContext
): DissociateEntityFromThingResponse => {
  return {} as any;
};

const deserializeAws_json1_1EntityDescription = (output: any, context: __SerdeContext): EntityDescription => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    definition:
      output.definition !== undefined && output.definition !== null
        ? deserializeAws_json1_1DefinitionDocument(output.definition, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_json1_1EntityDescriptions = (output: any, context: __SerdeContext): EntityDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EntityDescription(entry, context);
    });
};

const deserializeAws_json1_1FlowExecutionMessage = (output: any, context: __SerdeContext): FlowExecutionMessage => {
  return {
    eventType: output.eventType !== undefined && output.eventType !== null ? output.eventType : undefined,
    messageId: output.messageId !== undefined && output.messageId !== null ? output.messageId : undefined,
    payload: output.payload !== undefined && output.payload !== null ? output.payload : undefined,
    timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? new Date(Math.round(output.timestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1FlowExecutionMessages = (output: any, context: __SerdeContext): FlowExecutionMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FlowExecutionMessage(entry, context);
    });
};

const deserializeAws_json1_1FlowExecutionSummaries = (output: any, context: __SerdeContext): FlowExecutionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FlowExecutionSummary(entry, context);
    });
};

const deserializeAws_json1_1FlowExecutionSummary = (output: any, context: __SerdeContext): FlowExecutionSummary => {
  return {
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    flowExecutionId:
      output.flowExecutionId !== undefined && output.flowExecutionId !== null ? output.flowExecutionId : undefined,
    flowTemplateId:
      output.flowTemplateId !== undefined && output.flowTemplateId !== null ? output.flowTemplateId : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    systemInstanceId:
      output.systemInstanceId !== undefined && output.systemInstanceId !== null ? output.systemInstanceId : undefined,
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1FlowTemplateDescription = (
  output: any,
  context: __SerdeContext
): FlowTemplateDescription => {
  return {
    definition:
      output.definition !== undefined && output.definition !== null
        ? deserializeAws_json1_1DefinitionDocument(output.definition, context)
        : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1FlowTemplateSummary(output.summary, context)
        : undefined,
    validatedNamespaceVersion:
      output.validatedNamespaceVersion !== undefined && output.validatedNamespaceVersion !== null
        ? output.validatedNamespaceVersion
        : undefined,
  } as any;
};

const deserializeAws_json1_1FlowTemplateSummaries = (output: any, context: __SerdeContext): FlowTemplateSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FlowTemplateSummary(entry, context);
    });
};

const deserializeAws_json1_1FlowTemplateSummary = (output: any, context: __SerdeContext): FlowTemplateSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    revisionNumber:
      output.revisionNumber !== undefined && output.revisionNumber !== null ? output.revisionNumber : undefined,
  } as any;
};

const deserializeAws_json1_1GetEntitiesResponse = (output: any, context: __SerdeContext): GetEntitiesResponse => {
  return {
    descriptions:
      output.descriptions !== undefined && output.descriptions !== null
        ? deserializeAws_json1_1EntityDescriptions(output.descriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetFlowTemplateResponse => {
  return {
    description:
      output.description !== undefined && output.description !== null
        ? deserializeAws_json1_1FlowTemplateDescription(output.description, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetFlowTemplateRevisionsResponse = (
  output: any,
  context: __SerdeContext
): GetFlowTemplateRevisionsResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_1FlowTemplateSummaries(output.summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetNamespaceDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetNamespaceDeletionStatusResponse => {
  return {
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    namespaceArn: output.namespaceArn !== undefined && output.namespaceArn !== null ? output.namespaceArn : undefined,
    namespaceName:
      output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_json1_1GetSystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): GetSystemInstanceResponse => {
  return {
    description:
      output.description !== undefined && output.description !== null
        ? deserializeAws_json1_1SystemInstanceDescription(output.description, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetSystemTemplateResponse => {
  return {
    description:
      output.description !== undefined && output.description !== null
        ? deserializeAws_json1_1SystemTemplateDescription(output.description, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSystemTemplateRevisionsResponse = (
  output: any,
  context: __SerdeContext
): GetSystemTemplateRevisionsResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_1SystemTemplateSummaries(output.summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetUploadStatusResponse = (
  output: any,
  context: __SerdeContext
): GetUploadStatusResponse => {
  return {
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? deserializeAws_json1_1StringList(output.failureReason, context)
        : undefined,
    namespaceArn: output.namespaceArn !== undefined && output.namespaceArn !== null ? output.namespaceArn : undefined,
    namespaceName:
      output.namespaceName !== undefined && output.namespaceName !== null ? output.namespaceName : undefined,
    namespaceVersion:
      output.namespaceVersion !== undefined && output.namespaceVersion !== null ? output.namespaceVersion : undefined,
    uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
    uploadStatus: output.uploadStatus !== undefined && output.uploadStatus !== null ? output.uploadStatus : undefined,
  } as any;
};

const deserializeAws_json1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ListFlowExecutionMessagesResponse = (
  output: any,
  context: __SerdeContext
): ListFlowExecutionMessagesResponse => {
  return {
    messages:
      output.messages !== undefined && output.messages !== null
        ? deserializeAws_json1_1FlowExecutionMessages(output.messages, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1TagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricsConfiguration = (output: any, context: __SerdeContext): MetricsConfiguration => {
  return {
    cloudMetricEnabled:
      output.cloudMetricEnabled !== undefined && output.cloudMetricEnabled !== null
        ? output.cloudMetricEnabled
        : undefined,
    metricRuleRoleArn:
      output.metricRuleRoleArn !== undefined && output.metricRuleRoleArn !== null
        ? output.metricRuleRoleArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
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

const deserializeAws_json1_1SearchEntitiesResponse = (output: any, context: __SerdeContext): SearchEntitiesResponse => {
  return {
    descriptions:
      output.descriptions !== undefined && output.descriptions !== null
        ? deserializeAws_json1_1EntityDescriptions(output.descriptions, context)
        : undefined,
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
  } as any;
};

const deserializeAws_json1_1SearchFlowExecutionsResponse = (
  output: any,
  context: __SerdeContext
): SearchFlowExecutionsResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_1FlowExecutionSummaries(output.summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SearchFlowTemplatesResponse = (
  output: any,
  context: __SerdeContext
): SearchFlowTemplatesResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_1FlowTemplateSummaries(output.summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SearchSystemInstancesResponse = (
  output: any,
  context: __SerdeContext
): SearchSystemInstancesResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_1SystemInstanceSummaries(output.summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SearchSystemTemplatesResponse = (
  output: any,
  context: __SerdeContext
): SearchSystemTemplatesResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_1SystemTemplateSummaries(output.summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SearchThingsResponse = (output: any, context: __SerdeContext): SearchThingsResponse => {
  return {
    nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    things:
      output.things !== undefined && output.things !== null
        ? deserializeAws_json1_1Things(output.things, context)
        : undefined,
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

const deserializeAws_json1_1SystemInstanceDescription = (
  output: any,
  context: __SerdeContext
): SystemInstanceDescription => {
  return {
    definition:
      output.definition !== undefined && output.definition !== null
        ? deserializeAws_json1_1DefinitionDocument(output.definition, context)
        : undefined,
    flowActionsRoleArn:
      output.flowActionsRoleArn !== undefined && output.flowActionsRoleArn !== null
        ? output.flowActionsRoleArn
        : undefined,
    metricsConfiguration:
      output.metricsConfiguration !== undefined && output.metricsConfiguration !== null
        ? deserializeAws_json1_1MetricsConfiguration(output.metricsConfiguration, context)
        : undefined,
    s3BucketName: output.s3BucketName !== undefined && output.s3BucketName !== null ? output.s3BucketName : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1SystemInstanceSummary(output.summary, context)
        : undefined,
    validatedDependencyRevisions:
      output.validatedDependencyRevisions !== undefined && output.validatedDependencyRevisions !== null
        ? deserializeAws_json1_1DependencyRevisions(output.validatedDependencyRevisions, context)
        : undefined,
    validatedNamespaceVersion:
      output.validatedNamespaceVersion !== undefined && output.validatedNamespaceVersion !== null
        ? output.validatedNamespaceVersion
        : undefined,
  } as any;
};

const deserializeAws_json1_1SystemInstanceSummaries = (
  output: any,
  context: __SerdeContext
): SystemInstanceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SystemInstanceSummary(entry, context);
    });
};

const deserializeAws_json1_1SystemInstanceSummary = (output: any, context: __SerdeContext): SystemInstanceSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    greengrassGroupId:
      output.greengrassGroupId !== undefined && output.greengrassGroupId !== null
        ? output.greengrassGroupId
        : undefined,
    greengrassGroupName:
      output.greengrassGroupName !== undefined && output.greengrassGroupName !== null
        ? output.greengrassGroupName
        : undefined,
    greengrassGroupVersionId:
      output.greengrassGroupVersionId !== undefined && output.greengrassGroupVersionId !== null
        ? output.greengrassGroupVersionId
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    target: output.target !== undefined && output.target !== null ? output.target : undefined,
    updatedAt:
      output.updatedAt !== undefined && output.updatedAt !== null
        ? new Date(Math.round(output.updatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1SystemTemplateDescription = (
  output: any,
  context: __SerdeContext
): SystemTemplateDescription => {
  return {
    definition:
      output.definition !== undefined && output.definition !== null
        ? deserializeAws_json1_1DefinitionDocument(output.definition, context)
        : undefined,
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1SystemTemplateSummary(output.summary, context)
        : undefined,
    validatedNamespaceVersion:
      output.validatedNamespaceVersion !== undefined && output.validatedNamespaceVersion !== null
        ? output.validatedNamespaceVersion
        : undefined,
  } as any;
};

const deserializeAws_json1_1SystemTemplateSummaries = (
  output: any,
  context: __SerdeContext
): SystemTemplateSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SystemTemplateSummary(entry, context);
    });
};

const deserializeAws_json1_1SystemTemplateSummary = (output: any, context: __SerdeContext): SystemTemplateSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    revisionNumber:
      output.revisionNumber !== undefined && output.revisionNumber !== null ? output.revisionNumber : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
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

const deserializeAws_json1_1Thing = (output: any, context: __SerdeContext): Thing => {
  return {
    thingArn: output.thingArn !== undefined && output.thingArn !== null ? output.thingArn : undefined,
    thingName: output.thingName !== undefined && output.thingName !== null ? output.thingName : undefined,
  } as any;
};

const deserializeAws_json1_1Things = (output: any, context: __SerdeContext): Thing[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Thing(entry, context);
    });
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UndeploySystemInstanceResponse = (
  output: any,
  context: __SerdeContext
): UndeploySystemInstanceResponse => {
  return {
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1SystemInstanceSummary(output.summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateFlowTemplateResponse = (
  output: any,
  context: __SerdeContext
): UpdateFlowTemplateResponse => {
  return {
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1FlowTemplateSummary(output.summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateSystemTemplateResponse = (
  output: any,
  context: __SerdeContext
): UpdateSystemTemplateResponse => {
  return {
    summary:
      output.summary !== undefined && output.summary !== null
        ? deserializeAws_json1_1SystemTemplateSummary(output.summary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UploadEntityDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): UploadEntityDefinitionsResponse => {
  return {
    uploadId: output.uploadId !== undefined && output.uploadId !== null ? output.uploadId : undefined,
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
