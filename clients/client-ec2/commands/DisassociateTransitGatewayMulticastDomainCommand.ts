import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DisassociateTransitGatewayMulticastDomainRequest,
  DisassociateTransitGatewayMulticastDomainResult,
} from "../models/index";
import {
  deserializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand,
  serializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DisassociateTransitGatewayMulticastDomainCommandInput = DisassociateTransitGatewayMulticastDomainRequest;
export type DisassociateTransitGatewayMulticastDomainCommandOutput = DisassociateTransitGatewayMulticastDomainResult &
  __MetadataBearer;

export class DisassociateTransitGatewayMulticastDomainCommand extends $Command<
  DisassociateTransitGatewayMulticastDomainCommandInput,
  DisassociateTransitGatewayMulticastDomainCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateTransitGatewayMulticastDomainCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisassociateTransitGatewayMulticastDomainCommandInput,
    DisassociateTransitGatewayMulticastDomainCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DisassociateTransitGatewayMulticastDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTransitGatewayMulticastDomainResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateTransitGatewayMulticastDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTransitGatewayMulticastDomainCommandOutput> {
    return deserializeAws_ec2DisassociateTransitGatewayMulticastDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
