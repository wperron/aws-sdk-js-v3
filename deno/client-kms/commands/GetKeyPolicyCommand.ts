import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient.ts";
import { GetKeyPolicyRequest, GetKeyPolicyResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1GetKeyPolicyCommand,
  serializeAws_json1_1GetKeyPolicyCommand,
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

export type GetKeyPolicyCommandInput = GetKeyPolicyRequest;
export type GetKeyPolicyCommandOutput = GetKeyPolicyResponse & __MetadataBearer;

/**
 * <p>Gets a key policy attached to the specified customer master key (CMK).
 *       You cannot perform this operation on a CMK in a different AWS account.</p>
 */
export class GetKeyPolicyCommand extends $Command<
  GetKeyPolicyCommandInput,
  GetKeyPolicyCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetKeyPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GetKeyPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKeyPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetKeyPolicyResponse.filterSensitiveLog,
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

  private serialize(input: GetKeyPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetKeyPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKeyPolicyCommandOutput> {
    return deserializeAws_json1_1GetKeyPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
