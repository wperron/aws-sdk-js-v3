import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient.ts";
import { ListTargetsByRuleRequest, ListTargetsByRuleResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListTargetsByRuleCommand,
  serializeAws_json1_1ListTargetsByRuleCommand,
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

export type ListTargetsByRuleCommandInput = ListTargetsByRuleRequest;
export type ListTargetsByRuleCommandOutput = ListTargetsByRuleResponse & __MetadataBearer;

/**
 * <p>Lists the targets assigned to the specified rule.</p>
 */
export class ListTargetsByRuleCommand extends $Command<
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTargetsByRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "ListTargetsByRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTargetsByRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTargetsByRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTargetsByRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTargetsByRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTargetsByRuleCommandOutput> {
    return deserializeAws_json1_1ListTargetsByRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
