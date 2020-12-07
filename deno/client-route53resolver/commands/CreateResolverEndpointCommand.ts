import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import { CreateResolverEndpointRequest, CreateResolverEndpointResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1CreateResolverEndpointCommand,
  serializeAws_json1_1CreateResolverEndpointCommand,
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

export type CreateResolverEndpointCommandInput = CreateResolverEndpointRequest;
export type CreateResolverEndpointCommandOutput = CreateResolverEndpointResponse & __MetadataBearer;

/**
 * <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p>
 * 		       <ul>
 *             <li>
 *                <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC
 * 				from your network.</p>
 *             </li>
 *             <li>
 *                <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC
 * 				to your network.</p>
 *             </li>
 *          </ul>
 */
export class CreateResolverEndpointCommand extends $Command<
  CreateResolverEndpointCommandInput,
  CreateResolverEndpointCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateResolverEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "CreateResolverEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResolverEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateResolverEndpointResponse.filterSensitiveLog,
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

  private serialize(input: CreateResolverEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateResolverEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResolverEndpointCommandOutput> {
    return deserializeAws_json1_1CreateResolverEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
