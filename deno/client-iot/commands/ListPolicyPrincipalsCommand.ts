import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { ListPolicyPrincipalsRequest, ListPolicyPrincipalsResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1ListPolicyPrincipalsCommand,
  serializeAws_restJson1ListPolicyPrincipalsCommand,
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

export type ListPolicyPrincipalsCommandInput = ListPolicyPrincipalsRequest;
export type ListPolicyPrincipalsCommandOutput = ListPolicyPrincipalsResponse & __MetadataBearer;

/**
 * <p>Lists the principals associated with the specified policy.</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>
 */
export class ListPolicyPrincipalsCommand extends $Command<
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPolicyPrincipalsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPolicyPrincipalsCommandInput, ListPolicyPrincipalsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListPolicyPrincipalsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPolicyPrincipalsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPolicyPrincipalsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPolicyPrincipalsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPolicyPrincipalsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPolicyPrincipalsCommandOutput> {
    return deserializeAws_restJson1ListPolicyPrincipalsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
