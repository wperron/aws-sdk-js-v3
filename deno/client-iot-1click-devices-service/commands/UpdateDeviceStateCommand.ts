import {
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient.ts";
import { UpdateDeviceStateRequest, UpdateDeviceStateResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1UpdateDeviceStateCommand,
  serializeAws_restJson1UpdateDeviceStateCommand,
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

export type UpdateDeviceStateCommandInput = UpdateDeviceStateRequest;
export type UpdateDeviceStateCommandOutput = UpdateDeviceStateResponse & __MetadataBearer;

/**
 * <p>Using a Boolean value (true or false), this operation
 *  enables or disables the device given a device ID.</p>
 */
export class UpdateDeviceStateCommand extends $Command<
  UpdateDeviceStateCommandInput,
  UpdateDeviceStateCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeviceStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeviceStateCommandInput, UpdateDeviceStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "UpdateDeviceStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeviceStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeviceStateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeviceStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDeviceStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeviceStateCommandOutput> {
    return deserializeAws_restJson1UpdateDeviceStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
