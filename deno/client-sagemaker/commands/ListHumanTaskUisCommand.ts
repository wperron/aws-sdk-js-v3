import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient.ts";
import { ListHumanTaskUisRequest, ListHumanTaskUisResponse } from "../models/models_2.ts";
import {
  deserializeAws_json1_1ListHumanTaskUisCommand,
  serializeAws_json1_1ListHumanTaskUisCommand,
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

export type ListHumanTaskUisCommandInput = ListHumanTaskUisRequest;
export type ListHumanTaskUisCommandOutput = ListHumanTaskUisResponse & __MetadataBearer;

/**
 * <p>Returns information about the human task user interfaces in your account.</p>
 */
export class ListHumanTaskUisCommand extends $Command<
  ListHumanTaskUisCommandInput,
  ListHumanTaskUisCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHumanTaskUisCommandInput) {
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
  ): Handler<ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListHumanTaskUisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHumanTaskUisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListHumanTaskUisResponse.filterSensitiveLog,
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

  private serialize(input: ListHumanTaskUisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListHumanTaskUisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHumanTaskUisCommandOutput> {
    return deserializeAws_json1_1ListHumanTaskUisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
