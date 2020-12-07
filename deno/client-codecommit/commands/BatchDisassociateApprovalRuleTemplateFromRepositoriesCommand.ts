import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient.ts";
import {
  BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand,
  serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand,
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

export type BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput = BatchDisassociateApprovalRuleTemplateFromRepositoriesInput;
export type BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput = BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput &
  __MetadataBearer;

/**
 * <p>Removes the association between an approval rule template and one or more specified repositories. </p>
 */
export class BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand extends $Command<
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
  BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateApprovalRuleTemplateFromRepositoriesInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput.filterSensitiveLog,
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

  private serialize(
    input: BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateApprovalRuleTemplateFromRepositoriesCommandOutput> {
    return deserializeAws_json1_1BatchDisassociateApprovalRuleTemplateFromRepositoriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
