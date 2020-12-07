import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient.ts";
import { DescribeCustomRoutingListenerRequest, DescribeCustomRoutingListenerResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DescribeCustomRoutingListenerCommand,
  serializeAws_json1_1DescribeCustomRoutingListenerCommand,
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

export type DescribeCustomRoutingListenerCommandInput = DescribeCustomRoutingListenerRequest;
export type DescribeCustomRoutingListenerCommandOutput = DescribeCustomRoutingListenerResponse & __MetadataBearer;

/**
 * <p>The description of a listener for a custom routing accelerator.</p>
 */
export class DescribeCustomRoutingListenerCommand extends $Command<
  DescribeCustomRoutingListenerCommandInput,
  DescribeCustomRoutingListenerCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomRoutingListenerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCustomRoutingListenerCommandInput, DescribeCustomRoutingListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeCustomRoutingListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomRoutingListenerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomRoutingListenerResponse.filterSensitiveLog,
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

  private serialize(input: DescribeCustomRoutingListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCustomRoutingListenerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomRoutingListenerCommandOutput> {
    return deserializeAws_json1_1DescribeCustomRoutingListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
