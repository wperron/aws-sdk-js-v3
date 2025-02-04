import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient.ts";
import { ListDeploymentInstancesInput, ListDeploymentInstancesOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListDeploymentInstancesCommand,
  serializeAws_json1_1ListDeploymentInstancesCommand,
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

export type ListDeploymentInstancesCommandInput = ListDeploymentInstancesInput;
export type ListDeploymentInstancesCommandOutput = ListDeploymentInstancesOutput & __MetadataBearer;

/**
 * <note>
 *             <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because
 *                 it works with all compute types. <code>ListDeploymentInstances</code> throws an
 *                 exception if it is used with a compute platform other than EC2/On-premises or AWS
 *                 Lambda. </p>
 *         </note>
 *         <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
 */
export class ListDeploymentInstancesCommand extends $Command<
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeploymentInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListDeploymentInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeploymentInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeploymentInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeploymentInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDeploymentInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentInstancesCommandOutput> {
    return deserializeAws_json1_1ListDeploymentInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
