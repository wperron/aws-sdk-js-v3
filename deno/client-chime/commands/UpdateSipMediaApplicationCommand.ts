import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient.ts";
import { UpdateSipMediaApplicationRequest, UpdateSipMediaApplicationResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateSipMediaApplicationCommand,
  serializeAws_restJson1UpdateSipMediaApplicationCommand,
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

export type UpdateSipMediaApplicationCommandInput = UpdateSipMediaApplicationRequest;
export type UpdateSipMediaApplicationCommandOutput = UpdateSipMediaApplicationResponse & __MetadataBearer;

/**
 * <p>Updates the details for the specified SIP media application.</p>
 */
export class UpdateSipMediaApplicationCommand extends $Command<
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSipMediaApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSipMediaApplicationCommandInput, UpdateSipMediaApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "UpdateSipMediaApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSipMediaApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSipMediaApplicationResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSipMediaApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSipMediaApplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSipMediaApplicationCommandOutput> {
    return deserializeAws_restJson1UpdateSipMediaApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
