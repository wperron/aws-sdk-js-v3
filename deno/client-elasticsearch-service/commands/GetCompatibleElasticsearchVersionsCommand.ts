import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticsearchServiceClient.ts";
import {
  GetCompatibleElasticsearchVersionsRequest,
  GetCompatibleElasticsearchVersionsResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand,
  serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type GetCompatibleElasticsearchVersionsCommandInput = GetCompatibleElasticsearchVersionsRequest;
export type GetCompatibleElasticsearchVersionsCommandOutput = GetCompatibleElasticsearchVersionsResponse &
  __MetadataBearer;

export class GetCompatibleElasticsearchVersionsCommand extends $Command<
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCompatibleElasticsearchVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetCompatibleElasticsearchVersionsCommandInput,
    GetCompatibleElasticsearchVersionsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCompatibleElasticsearchVersionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCompatibleElasticsearchVersionsCommandOutput> {
    return deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
