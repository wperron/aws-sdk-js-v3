import { Buffer } from "https://deno.land/std@0.79.0/node/buffer.ts";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient.ts";
import { InvokeAsyncRequest, InvokeAsyncResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1InvokeAsyncCommand,
  serializeAws_restJson1InvokeAsyncCommand,
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

export type InvokeAsyncCommandInput = Omit<InvokeAsyncRequest, "InvokeArgs"> & {
  InvokeArgs: InvokeAsyncRequest["InvokeArgs"] | string | Uint8Array | Buffer;
};
export type InvokeAsyncCommandOutput = InvokeAsyncResponse & __MetadataBearer;

/**
 * <important>
 *             <p>For asynchronous function invocation, use <a>Invoke</a>.</p>
 *          </important>
 *          <p>Invokes a function asynchronously.</p>
 */
export class InvokeAsyncCommand extends $Command<
  InvokeAsyncCommandInput,
  InvokeAsyncCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InvokeAsyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeAsyncCommandInput, InvokeAsyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "InvokeAsyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeAsyncRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InvokeAsyncResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InvokeAsyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InvokeAsyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeAsyncCommandOutput> {
    return deserializeAws_restJson1InvokeAsyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
