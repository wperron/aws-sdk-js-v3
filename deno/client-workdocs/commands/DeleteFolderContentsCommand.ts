import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkDocsClientResolvedConfig
} from "../WorkDocsClient.ts";
import { DeleteFolderContentsRequest } from "../models/index.ts";
import {
  deserializeAws_restJson1DeleteFolderContentsCommand,
  serializeAws_restJson1DeleteFolderContentsCommand
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

export type DeleteFolderContentsCommandInput = DeleteFolderContentsRequest;
export type DeleteFolderContentsCommandOutput = __MetadataBearer;

export class DeleteFolderContentsCommand extends $Command<
  DeleteFolderContentsCommandInput,
  DeleteFolderContentsCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFolderContentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteFolderContentsCommandInput,
    DeleteFolderContentsCommandOutput
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
    input: DeleteFolderContentsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFolderContentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFolderContentsCommandOutput> {
    return deserializeAws_restJson1DeleteFolderContentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
