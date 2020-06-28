import { DeleteTagsRequest } from "../models/index.ts";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  mqClientResolvedConfig
} from "../mqClient.ts";
import {
  deserializeAws_restJson1DeleteTagsCommand,
  serializeAws_restJson1DeleteTagsCommand
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

export type DeleteTagsCommandInput = DeleteTagsRequest;
export type DeleteTagsCommandOutput = __MetadataBearer;

export class DeleteTagsCommand extends $Command<
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput,
  mqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: mqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput> {
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
    input: DeleteTagsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteTagsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTagsCommandOutput> {
    return deserializeAws_restJson1DeleteTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
