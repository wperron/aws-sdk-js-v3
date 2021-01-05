import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient.ts";
import { DeleteGatewayResponseRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DeleteGatewayResponseCommand,
  serializeAws_restJson1DeleteGatewayResponseCommand,
} from "../protocols/Aws_restJson1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "../../types/mod.ts";

export type DeleteGatewayResponseCommandInput = DeleteGatewayResponseRequest;
export type DeleteGatewayResponseCommandOutput = __MetadataBearer;

/**
 * <p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>
 */
export class DeleteGatewayResponseCommand extends $Command<
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGatewayResponseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGatewayResponseCommandInput, DeleteGatewayResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "DeleteGatewayResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGatewayResponseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGatewayResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteGatewayResponseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGatewayResponseCommandOutput> {
    return deserializeAws_restJson1DeleteGatewayResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
