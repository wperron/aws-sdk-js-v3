import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient.ts";
import { DescribeGlobalNetworksRequest, DescribeGlobalNetworksResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeGlobalNetworksCommand,
  serializeAws_restJson1DescribeGlobalNetworksCommand,
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

export type DescribeGlobalNetworksCommandInput = DescribeGlobalNetworksRequest;
export type DescribeGlobalNetworksCommandOutput = DescribeGlobalNetworksResponse & __MetadataBearer;

/**
 * <p>Describes one or more global networks. By default, all global networks are
 *             described. To describe the objects in your global network, you must use the appropriate
 *                 <code>Get*</code> action. For example, to list the transit gateways in your global
 *             network, use <a>GetTransitGatewayRegistrations</a>.</p>
 */
export class DescribeGlobalNetworksCommand extends $Command<
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGlobalNetworksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGlobalNetworksCommandInput, DescribeGlobalNetworksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DescribeGlobalNetworksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGlobalNetworksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGlobalNetworksResponse.filterSensitiveLog,
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

  private serialize(input: DescribeGlobalNetworksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeGlobalNetworksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGlobalNetworksCommandOutput> {
    return deserializeAws_restJson1DescribeGlobalNetworksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
