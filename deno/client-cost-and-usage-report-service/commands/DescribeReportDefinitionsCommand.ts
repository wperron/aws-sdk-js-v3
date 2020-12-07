import {
  CostAndUsageReportServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CostAndUsageReportServiceClient.ts";
import { DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeReportDefinitionsCommand,
  serializeAws_json1_1DescribeReportDefinitionsCommand,
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

export type DescribeReportDefinitionsCommandInput = DescribeReportDefinitionsRequest;
export type DescribeReportDefinitionsCommandOutput = DescribeReportDefinitionsResponse & __MetadataBearer;

/**
 * <p>Lists the AWS Cost and Usage reports available to this account.</p>
 */
export class DescribeReportDefinitionsCommand extends $Command<
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput,
  CostAndUsageReportServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReportDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostAndUsageReportServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReportDefinitionsCommandInput, DescribeReportDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostAndUsageReportServiceClient";
    const commandName = "DescribeReportDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReportDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReportDefinitionsResponse.filterSensitiveLog,
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

  private serialize(input: DescribeReportDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReportDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReportDefinitionsCommandOutput> {
    return deserializeAws_json1_1DescribeReportDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
