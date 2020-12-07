import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient.ts";
import { DetectStackSetDriftInput, DetectStackSetDriftOutput } from "../models/models_0.ts";
import {
  deserializeAws_queryDetectStackSetDriftCommand,
  serializeAws_queryDetectStackSetDriftCommand,
} from "../protocols/Aws_query.ts";
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

export type DetectStackSetDriftCommandInput = DetectStackSetDriftInput;
export type DetectStackSetDriftCommandOutput = DetectStackSetDriftOutput & __MetadataBearer;

/**
 * <p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack
 *          set, it performs drift detection on the stack associated with each stack instance in the
 *          stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation
 *             Performs Drift Detection on a Stack Set</a>.</p>
 *          <p>
 *             <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set
 *          drift detection operation. Use this operation id with <code>
 *                <a>DescribeStackSetOperation</a>
 *             </code> to monitor the progress of the drift
 *          detection operation. The drift detection operation may take some time, depending on the
 *          number of stack instances included in the stack set, as well as the number of resources
 *          included in each stack.</p>
 *          <p>Once the operation has completed, use the following actions to return drift
 *          information:</p>
 *          <ul>
 *             <li>
 *                <p>Use <code>
 *                      <a>DescribeStackSet</a>
 *                   </code> to return detailed informaiton
 *                about the stack set, including detailed information about the last
 *                <i>completed</i> drift operation performed on the stack set.
 *                (Information about drift operations that are in progress is not included.)</p>
 *             </li>
 *             <li>
 *                <p>Use <code>
 *                      <a>ListStackInstances</a>
 *                   </code> to return a list of stack
 *                instances belonging to the stack set, including the drift status and last drift time
 *                checked of each instance.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>
 *                      <a>DescribeStackInstance</a>
 *                   </code> to return detailed
 *                information about a specific stack instance, including its drift status and last
 *                drift time checked.</p>
 *             </li>
 *          </ul>
 *          <p>For more information on performing a drift detection operation on a stack set, see
 *          <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged
 *             Changes in Stack Sets</a>. </p>
 *          <p>You can only run a single drift detection operation on a given stack set at one time. </p>
 *          <p>To stop a drift detection stack set operation, use <code>
 *                <a>StopStackSetOperation</a>
 *             </code>.</p>
 */
export class DetectStackSetDriftCommand extends $Command<
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetectStackSetDriftCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectStackSetDriftCommandInput, DetectStackSetDriftCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DetectStackSetDriftCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectStackSetDriftInput.filterSensitiveLog,
      outputFilterSensitiveLog: DetectStackSetDriftOutput.filterSensitiveLog,
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

  private serialize(input: DetectStackSetDriftCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetectStackSetDriftCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectStackSetDriftCommandOutput> {
    return deserializeAws_queryDetectStackSetDriftCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
