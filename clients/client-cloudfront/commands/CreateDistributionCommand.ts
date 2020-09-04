import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateDistributionRequest, CreateDistributionResult } from "../models/index";
import {
  deserializeAws_restXmlCreateDistributionCommand,
  serializeAws_restXmlCreateDistributionCommand,
} from "../protocols/Aws_restXml";
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

export type CreateDistributionCommandInput = CreateDistributionRequest;
export type CreateDistributionCommandOutput = CreateDistributionResult & __MetadataBearer;

export class CreateDistributionCommand extends $Command<
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDistributionCommandInput, CreateDistributionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDistributionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDistributionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateDistributionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDistributionCommandOutput> {
    return deserializeAws_restXmlCreateDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
