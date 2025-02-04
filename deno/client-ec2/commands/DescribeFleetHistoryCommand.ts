import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { DescribeFleetHistoryRequest, DescribeFleetHistoryResult } from "../models/models_2.ts";
import {
  deserializeAws_ec2DescribeFleetHistoryCommand,
  serializeAws_ec2DescribeFleetHistoryCommand,
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

export type DescribeFleetHistoryCommandInput = DescribeFleetHistoryRequest;
export type DescribeFleetHistoryCommandOutput = DescribeFleetHistoryResult & __MetadataBearer;

/**
 * <p>Describes the events for the specified EC2 Fleet during the specified time.</p>
 *          <p>EC2 Fleet events are delayed by up to 30 seconds before they can be described. This ensures
 *          that you can query by the last evaluated time and not miss a recorded event. EC2 Fleet events
 *          are available for 48 hours.</p>
 */
export class DescribeFleetHistoryCommand extends $Command<
  DescribeFleetHistoryCommandInput,
  DescribeFleetHistoryCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFleetHistoryCommandInput) {
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
  ): Handler<DescribeFleetHistoryCommandInput, DescribeFleetHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFleetHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetHistoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeFleetHistoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetHistoryCommandOutput> {
    return deserializeAws_ec2DescribeFleetHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
