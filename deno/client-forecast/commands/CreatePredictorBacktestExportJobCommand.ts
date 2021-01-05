import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient.ts";
import { CreatePredictorBacktestExportJobRequest, CreatePredictorBacktestExportJobResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreatePredictorBacktestExportJobCommand,
  serializeAws_json1_1CreatePredictorBacktestExportJobCommand,
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

export type CreatePredictorBacktestExportJobCommandInput = CreatePredictorBacktestExportJobRequest;
export type CreatePredictorBacktestExportJobCommandOutput = CreatePredictorBacktestExportJobResponse & __MetadataBearer;

/**
 * <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreatePredictor</a> operation. Two CSV files are exported to a specified
 *             S3 bucket.</p>
 *         <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management
 *             (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see
 *             <a>aws-forecast-iam-roles</a>.</p>
 */
export class CreatePredictorBacktestExportJobCommand extends $Command<
  CreatePredictorBacktestExportJobCommandInput,
  CreatePredictorBacktestExportJobCommandOutput,
  ForecastClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePredictorBacktestExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePredictorBacktestExportJobCommandInput, CreatePredictorBacktestExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreatePredictorBacktestExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePredictorBacktestExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePredictorBacktestExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreatePredictorBacktestExportJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePredictorBacktestExportJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePredictorBacktestExportJobCommandOutput> {
    return deserializeAws_json1_1CreatePredictorBacktestExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
