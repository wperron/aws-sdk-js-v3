import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ManagedBlockchainClient.ts";
import { ListProposalsInput, ListProposalsOutput } from "../models/index.ts";
import {
  deserializeAws_restJson1ListProposalsCommand,
  serializeAws_restJson1ListProposalsCommand
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

export type ListProposalsCommandInput = ListProposalsInput;
export type ListProposalsCommandOutput = ListProposalsOutput & __MetadataBearer;

export class ListProposalsCommand extends $Command<
  ListProposalsCommandInput,
  ListProposalsCommandOutput,
  ManagedBlockchainClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProposalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProposalsCommandInput, ListProposalsCommandOutput> {
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
    input: ListProposalsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProposalsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProposalsCommandOutput> {
    return deserializeAws_restJson1ListProposalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
