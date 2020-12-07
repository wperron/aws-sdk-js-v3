import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { GetEffectivePoliciesRequest, GetEffectivePoliciesResponse } from "../models/models_1.ts";
import {
  deserializeAws_restJson1GetEffectivePoliciesCommand,
  serializeAws_restJson1GetEffectivePoliciesCommand,
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

export type GetEffectivePoliciesCommandInput = GetEffectivePoliciesRequest;
export type GetEffectivePoliciesCommandOutput = GetEffectivePoliciesResponse & __MetadataBearer;

/**
 * <p>Gets a list of the policies that have an effect on the authorization behavior of the
 *          specified device when it connects to the AWS IoT device gateway.</p>
 */
export class GetEffectivePoliciesCommand extends $Command<
  GetEffectivePoliciesCommandInput,
  GetEffectivePoliciesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEffectivePoliciesCommandInput) {
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
  ): Handler<GetEffectivePoliciesCommandInput, GetEffectivePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetEffectivePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEffectivePoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEffectivePoliciesResponse.filterSensitiveLog,
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

  private serialize(input: GetEffectivePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEffectivePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEffectivePoliciesCommandOutput> {
    return deserializeAws_restJson1GetEffectivePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
