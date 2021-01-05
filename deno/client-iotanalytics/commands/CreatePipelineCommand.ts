import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient.ts";
import { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreatePipelineCommand,
  serializeAws_restJson1CreatePipelineCommand,
} from "../protocols/Aws_restJson1.ts";
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

export type CreatePipelineCommandInput = CreatePipelineRequest;
export type CreatePipelineCommandOutput = CreatePipelineResponse & __MetadataBearer;

/**
 * <p>Creates a pipeline. A pipeline consumes messages from a channel and allows
 *           you to process the messages before storing them in a data store. You must specify both a
 *           <code>channel</code> and a <code>datastore</code> activity and, optionally, as many
 *           as 23 additional activities in the <code>pipelineActivities</code> array.</p>
 */
export class CreatePipelineCommand extends $Command<
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
  IoTAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePipelineCommandInput, CreatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "CreatePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePipelineRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePipelineResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePipelineCommandOutput> {
    return deserializeAws_restJson1CreatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
