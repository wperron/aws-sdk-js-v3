import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient.ts";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetAuthorizationTokenCommand,
  serializeAws_json1_1GetAuthorizationTokenCommand,
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

export type GetAuthorizationTokenCommandInput = GetAuthorizationTokenRequest;
export type GetAuthorizationTokenCommandOutput = GetAuthorizationTokenResponse & __MetadataBearer;

/**
 * <p>Retrieves an authorization token. An authorization token represents your IAM
 *          authentication credentials and can be used to access any Amazon ECR registry that your IAM
 *          principal has access to. The authorization token is valid for 12 hours. This API requires
 *          the <code>ecr-public:GetAuthorizationToken</code> and
 *             <code>sts:GetServiceBearerToken</code> permissions.</p>
 */
export class GetAuthorizationTokenCommand extends $Command<
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAuthorizationTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "GetAuthorizationTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAuthorizationTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAuthorizationTokenResponse.filterSensitiveLog,
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

  private serialize(input: GetAuthorizationTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAuthorizationTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAuthorizationTokenCommandOutput> {
    return deserializeAws_json1_1GetAuthorizationTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
