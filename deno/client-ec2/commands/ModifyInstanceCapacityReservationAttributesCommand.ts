import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import {
  ModifyInstanceCapacityReservationAttributesRequest,
  ModifyInstanceCapacityReservationAttributesResult,
} from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand,
  serializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand,
} from "../protocols/Aws_ec2.ts";
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

export type ModifyInstanceCapacityReservationAttributesCommandInput = ModifyInstanceCapacityReservationAttributesRequest;
export type ModifyInstanceCapacityReservationAttributesCommandOutput = ModifyInstanceCapacityReservationAttributesResult &
  __MetadataBearer;

/**
 * <p>Modifies the Capacity Reservation settings for a stopped instance. Use this action to configure an
 * 			instance to target a specific Capacity Reservation, run in any <code>open</code> Capacity Reservation with matching
 * 			attributes, or run On-Demand Instance capacity.</p>
 */
export class ModifyInstanceCapacityReservationAttributesCommand extends $Command<
  ModifyInstanceCapacityReservationAttributesCommandInput,
  ModifyInstanceCapacityReservationAttributesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyInstanceCapacityReservationAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ModifyInstanceCapacityReservationAttributesCommandInput,
    ModifyInstanceCapacityReservationAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyInstanceCapacityReservationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyInstanceCapacityReservationAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyInstanceCapacityReservationAttributesResult.filterSensitiveLog,
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

  private serialize(
    input: ModifyInstanceCapacityReservationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyInstanceCapacityReservationAttributesCommandOutput> {
    return deserializeAws_ec2ModifyInstanceCapacityReservationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
