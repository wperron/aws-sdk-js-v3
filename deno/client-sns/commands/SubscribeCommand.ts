import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient.ts";
import { SubscribeInput, SubscribeResponse } from "../models/models_0.ts";
import { deserializeAws_querySubscribeCommand, serializeAws_querySubscribeCommand } from "../protocols/Aws_query.ts";
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

export type SubscribeCommandInput = SubscribeInput;
export type SubscribeCommandOutput = SubscribeResponse & __MetadataBearer;

/**
 * <p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or
 *             if the endpoint and the topic are not in the same AWS account, the endpoint owner must
 *             run the <code>ConfirmSubscription</code> action to confirm the subscription.</p>
 *          <p>You call the <code>ConfirmSubscription</code> action with the token from the subscription response.
 *       Confirmation tokens are valid for three days.</p>
 *         <p>This action is throttled at 100 transactions per second (TPS).</p>
 */
export class SubscribeCommand extends $Command<SubscribeCommandInput, SubscribeCommandOutput, SNSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubscribeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubscribeCommandInput, SubscribeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SubscribeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeInput.filterSensitiveLog,
      outputFilterSensitiveLog: SubscribeResponse.filterSensitiveLog,
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

  private serialize(input: SubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySubscribeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubscribeCommandOutput> {
    return deserializeAws_querySubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
