import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient.ts";
import { PutConfigRuleRequest } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutConfigRuleCommand,
  serializeAws_json1_1PutConfigRuleCommand,
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

export type PutConfigRuleCommandInput = PutConfigRuleRequest;
export type PutConfigRuleCommandOutput = __MetadataBearer;

/**
 * <p>Adds or updates an AWS Config rule for evaluating whether your
 * 			AWS resources comply with your desired configurations.</p>
 * 		       <p>You can use this action for custom AWS Config rules and AWS
 * 			managed Config rules. A custom AWS Config rule is a rule that you
 * 			develop and maintain. An AWS managed Config rule is a customizable,
 * 			predefined rule that AWS Config provides.</p>
 * 		       <p>If you are adding a new custom AWS Config rule, you must first
 * 			create the AWS Lambda function that the rule invokes to evaluate
 * 			your resources. When you use the <code>PutConfigRule</code> action
 * 			to add the rule to AWS Config, you must specify the Amazon Resource
 * 			Name (ARN) that AWS Lambda assigns to the function. Specify the ARN
 * 			for the <code>SourceIdentifier</code> key. This key is part of the
 * 				<code>Source</code> object, which is part of the
 * 				<code>ConfigRule</code> object. </p>
 * 		       <p>If you are adding an AWS managed Config rule, specify the
 * 			rule's identifier for the <code>SourceIdentifier</code> key. To
 * 			reference AWS managed Config rule identifiers, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">About AWS Managed Config Rules</a>.</p>
 * 		       <p>For any new rule that you add, specify the
 * 				<code>ConfigRuleName</code> in the <code>ConfigRule</code>
 * 			object. Do not specify the <code>ConfigRuleArn</code> or the
 * 				<code>ConfigRuleId</code>. These values are generated by AWS
 * 			Config for new rules.</p>
 * 		       <p>If you are updating a rule that you added previously, you can
 * 			specify the rule by <code>ConfigRuleName</code>,
 * 				<code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the
 * 				<code>ConfigRule</code> data type that you use in this
 * 			request.</p>
 * 		       <p>The maximum number of rules that AWS Config supports is 150.</p>
 *
 * 		       <p>For information about requesting a rule limit increase, see
 * 				<a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">AWS Config Limits</a> in the <i>AWS General
 * 				Reference Guide</i>.</p>
 *
 * 		       <p>For more information about developing and using AWS Config
 * 			rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating AWS Resource Configurations with AWS Config</a>
 * 			in the <i>AWS Config Developer Guide</i>.</p>
 */
export class PutConfigRuleCommand extends $Command<
  PutConfigRuleCommandInput,
  PutConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutConfigRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConfigRuleCommandInput, PutConfigRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutConfigRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutConfigRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutConfigRuleCommandOutput> {
    return deserializeAws_json1_1PutConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
