import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient.ts";
import { SendAutomationSignalRequest, SendAutomationSignalResult } from "../models/models_1.ts";
import {
  deserializeAws_json1_1SendAutomationSignalCommand,
  serializeAws_json1_1SendAutomationSignalCommand,
} from "../protocols/Aws_json1_1.ts";
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

export type SendAutomationSignalCommandInput = SendAutomationSignalRequest;
export type SendAutomationSignalCommandOutput = SendAutomationSignalResult & __MetadataBearer;

/**
 * <p>Sends a signal to an Automation execution to change the current behavior or status of the
 *    execution. </p>
 */
export class SendAutomationSignalCommand extends $Command<
  SendAutomationSignalCommandInput,
  SendAutomationSignalCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendAutomationSignalCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "SendAutomationSignalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendAutomationSignalRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendAutomationSignalResult.filterSensitiveLog,
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

  private serialize(input: SendAutomationSignalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendAutomationSignalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendAutomationSignalCommandOutput> {
    return deserializeAws_json1_1SendAutomationSignalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
