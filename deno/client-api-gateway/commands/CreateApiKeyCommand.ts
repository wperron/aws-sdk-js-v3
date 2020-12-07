import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient.ts";
import { ApiKey, CreateApiKeyRequest } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreateApiKeyCommand,
  serializeAws_restJson1CreateApiKeyCommand,
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

export type CreateApiKeyCommandInput = CreateApiKeyRequest;
export type CreateApiKeyCommandOutput = ApiKey & __MetadataBearer;

/**
 * <p>Create an <a>ApiKey</a> resource. </p>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html">AWS CLI</a></div>
 */
export class CreateApiKeyCommand extends $Command<
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApiKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateApiKeyCommandInput, CreateApiKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateApiKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApiKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ApiKey.filterSensitiveLog,
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

  private serialize(input: CreateApiKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateApiKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApiKeyCommandOutput> {
    return deserializeAws_restJson1CreateApiKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
