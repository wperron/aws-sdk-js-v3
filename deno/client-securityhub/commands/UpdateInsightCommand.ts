import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient.ts";
import { UpdateInsightRequest, UpdateInsightResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1UpdateInsightCommand,
  serializeAws_restJson1UpdateInsightCommand,
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

export type UpdateInsightCommandInput = UpdateInsightRequest;
export type UpdateInsightCommandOutput = UpdateInsightResponse & __MetadataBearer;

/**
 * <p>Updates the Security Hub insight identified by the specified insight ARN.</p>
 */
export class UpdateInsightCommand extends $Command<
  UpdateInsightCommandInput,
  UpdateInsightCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateInsightCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInsightCommandInput, UpdateInsightCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "UpdateInsightCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInsightRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateInsightResponse.filterSensitiveLog,
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

  private serialize(input: UpdateInsightCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateInsightCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInsightCommandOutput> {
    return deserializeAws_restJson1UpdateInsightCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
