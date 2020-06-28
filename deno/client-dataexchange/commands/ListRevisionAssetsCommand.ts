import {
  DataExchangeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DataExchangeClient.ts";
import {
  ListRevisionAssetsRequest,
  ListRevisionAssetsResponse
} from "../models/index.ts";
import {
  deserializeAws_restJson1ListRevisionAssetsCommand,
  serializeAws_restJson1ListRevisionAssetsCommand
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

export type ListRevisionAssetsCommandInput = ListRevisionAssetsRequest;
export type ListRevisionAssetsCommandOutput = ListRevisionAssetsResponse &
  __MetadataBearer;

export class ListRevisionAssetsCommand extends $Command<
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput,
  DataExchangeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRevisionAssetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataExchangeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput> {
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
    input: ListRevisionAssetsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRevisionAssetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRevisionAssetsCommandOutput> {
    return deserializeAws_restJson1ListRevisionAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
