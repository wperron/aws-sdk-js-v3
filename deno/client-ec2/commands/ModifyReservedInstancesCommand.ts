import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client.ts";
import { ModifyReservedInstancesRequest, ModifyReservedInstancesResult } from "../models/models_4.ts";
import {
  deserializeAws_ec2ModifyReservedInstancesCommand,
  serializeAws_ec2ModifyReservedInstancesCommand,
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

export type ModifyReservedInstancesCommandInput = ModifyReservedInstancesRequest;
export type ModifyReservedInstancesCommandOutput = ModifyReservedInstancesResult & __MetadataBearer;

/**
 * <p>Modifies the Availability Zone, instance count, instance type, or network platform
 *             (EC2-Classic or EC2-VPC) of your Reserved Instances. The Reserved Instances to be
 *             modified must be identical, except for Availability Zone, network platform, and instance
 *             type.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved
 * 				Instances</a> in the Amazon Elastic Compute Cloud User Guide.</p>
 */
export class ModifyReservedInstancesCommand extends $Command<
  ModifyReservedInstancesCommandInput,
  ModifyReservedInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyReservedInstancesCommandInput) {
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
  ): Handler<ModifyReservedInstancesCommandInput, ModifyReservedInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyReservedInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyReservedInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyReservedInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyReservedInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyReservedInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyReservedInstancesCommandOutput> {
    return deserializeAws_ec2ModifyReservedInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
