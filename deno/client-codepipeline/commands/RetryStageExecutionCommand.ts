import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient.ts";
import { RetryStageExecutionInput, RetryStageExecutionOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1RetryStageExecutionCommand,
  serializeAws_json1_1RetryStageExecutionCommand,
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

export type RetryStageExecutionCommandInput = RetryStageExecutionInput;
export type RetryStageExecutionCommandOutput = RetryStageExecutionOutput & __MetadataBearer;

/**
 * <p>Resumes the pipeline execution by retrying the last failed actions in a stage. You
 *             can retry a stage immediately if any of the actions in the stage fail. When you retry,
 *             all actions that are still in progress continue working, and failed actions are
 *             triggered again.</p>
 */
export class RetryStageExecutionCommand extends $Command<
  RetryStageExecutionCommandInput,
  RetryStageExecutionCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RetryStageExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RetryStageExecutionCommandInput, RetryStageExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "RetryStageExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RetryStageExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: RetryStageExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RetryStageExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RetryStageExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetryStageExecutionCommandOutput> {
    return deserializeAws_json1_1RetryStageExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
