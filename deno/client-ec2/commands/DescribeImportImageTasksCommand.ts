import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeImportImageTasksRequest, DescribeImportImageTasksResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeImportImageTasksCommand,
  serializeAws_ec2DescribeImportImageTasksCommand,
} from "../protocols/Aws_ec2.ts";
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

export type DescribeImportImageTasksCommandInput = DescribeImportImageTasksRequest;
export type DescribeImportImageTasksCommandOutput = DescribeImportImageTasksResult & __MetadataBearer;

/**
 * <p>Displays details about an import virtual machine or import snapshot tasks that are already created.</p>
 */
export class DescribeImportImageTasksCommand extends $Command<
  DescribeImportImageTasksCommandInput,
  DescribeImportImageTasksCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeImportImageTasksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImportImageTasksCommandInput, DescribeImportImageTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeImportImageTasksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeImportImageTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImportImageTasksResult.filterSensitiveLog,
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

  private serialize(input: DescribeImportImageTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeImportImageTasksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImportImageTasksCommandOutput> {
    return deserializeAws_ec2DescribeImportImageTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
