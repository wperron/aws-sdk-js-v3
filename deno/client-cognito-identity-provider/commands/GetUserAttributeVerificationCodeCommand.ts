import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CognitoIdentityProviderClient.ts";
import {
  GetUserAttributeVerificationCodeRequest,
  GetUserAttributeVerificationCodeResponse
} from "../models/index.ts";
import {
  deserializeAws_json1_1GetUserAttributeVerificationCodeCommand,
  serializeAws_json1_1GetUserAttributeVerificationCodeCommand
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type GetUserAttributeVerificationCodeCommandInput = GetUserAttributeVerificationCodeRequest;
export type GetUserAttributeVerificationCodeCommandOutput = GetUserAttributeVerificationCodeResponse &
  __MetadataBearer;

export class GetUserAttributeVerificationCodeCommand extends $Command<
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetUserAttributeVerificationCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetUserAttributeVerificationCodeCommandInput,
    GetUserAttributeVerificationCodeCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetUserAttributeVerificationCodeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetUserAttributeVerificationCodeCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUserAttributeVerificationCodeCommandOutput> {
    return deserializeAws_json1_1GetUserAttributeVerificationCodeCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
