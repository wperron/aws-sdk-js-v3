import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateVirtualGatewayInput, UpdateVirtualGatewayOutput } from "../models/index";
import {
  deserializeAws_restJson1UpdateVirtualGatewayCommand,
  serializeAws_restJson1UpdateVirtualGatewayCommand,
} from "../protocols/Aws_restJson1";
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

export type UpdateVirtualGatewayCommandInput = UpdateVirtualGatewayInput;
export type UpdateVirtualGatewayCommandOutput = UpdateVirtualGatewayOutput & __MetadataBearer;

export class UpdateVirtualGatewayCommand extends $Command<
  UpdateVirtualGatewayCommandInput,
  UpdateVirtualGatewayCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateVirtualGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateVirtualGatewayCommandInput, UpdateVirtualGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateVirtualGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateVirtualGatewayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateVirtualGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateVirtualGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateVirtualGatewayCommandOutput> {
    return deserializeAws_restJson1UpdateVirtualGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
