import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client.ts";
import { DiscoverInputSchemaRequest, DiscoverInputSchemaResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DiscoverInputSchemaCommand,
  serializeAws_json1_1DiscoverInputSchemaCommand,
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

export type DiscoverInputSchemaCommandInput = DiscoverInputSchemaRequest;
export type DiscoverInputSchemaCommandOutput = DiscoverInputSchemaResponse & __MetadataBearer;

/**
 * <p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating
 *       sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose
 *       delivery stream) or Amazon S3 object. In the response, the operation returns the inferred
 *       schema and also the sample records that the operation used to infer the schema.</p>
 *          <p> You can use the inferred schema when configuring a streaming source for your application.
 *       When you create an application using the Kinesis Data Analytics console, the console uses this
 *       operation to infer a schema and show it in the console user interface. </p>
 */
export class DiscoverInputSchemaCommand extends $Command<
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DiscoverInputSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DiscoverInputSchemaCommandInput, DiscoverInputSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DiscoverInputSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DiscoverInputSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DiscoverInputSchemaResponse.filterSensitiveLog,
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

  private serialize(input: DiscoverInputSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DiscoverInputSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DiscoverInputSchemaCommandOutput> {
    return deserializeAws_json1_1DiscoverInputSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
