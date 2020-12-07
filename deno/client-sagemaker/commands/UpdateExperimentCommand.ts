import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { UpdateExperimentRequest, UpdateExperimentResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1UpdateExperimentCommand,
  serializeAws_json1_1UpdateExperimentCommand,
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

export type UpdateExperimentCommandInput = UpdateExperimentRequest;
export type UpdateExperimentCommandOutput = UpdateExperimentResponse & __MetadataBearer;

/**
 * <p>Adds, updates, or removes the description of an experiment. Updates the display name of an
 *       experiment.</p>
 */
export class UpdateExperimentCommand extends $Command<
  UpdateExperimentCommandInput,
  UpdateExperimentCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateExperimentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateExperimentCommandInput, UpdateExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateExperimentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateExperimentResponse.filterSensitiveLog,
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

  private serialize(input: UpdateExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateExperimentCommandOutput> {
    return deserializeAws_json1_1UpdateExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
