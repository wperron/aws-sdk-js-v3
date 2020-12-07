import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient.ts";
import { DescribeIdentityInput, IdentityDescription } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeIdentityCommand,
  serializeAws_json1_1DescribeIdentityCommand,
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import { getAwsAuthPlugin } from "../../middleware-signing/mod.ts";
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

export type DescribeIdentityCommandInput = DescribeIdentityInput;
export type DescribeIdentityCommandOutput = IdentityDescription & __MetadataBearer;

/**
 * <p>Returns metadata related to the given identity, including when the identity was
 *          created and any associated linked logins.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 */
export class DescribeIdentityCommand extends $Command<
  DescribeIdentityCommandInput,
  DescribeIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIdentityCommandInput, DescribeIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "DescribeIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIdentityInput.filterSensitiveLog,
      outputFilterSensitiveLog: IdentityDescription.filterSensitiveLog,
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

  private serialize(input: DescribeIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeIdentityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIdentityCommandOutput> {
    return deserializeAws_json1_1DescribeIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
