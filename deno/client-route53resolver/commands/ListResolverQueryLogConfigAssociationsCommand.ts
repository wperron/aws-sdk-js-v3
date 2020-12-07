import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient.ts";
import {
  ListResolverQueryLogConfigAssociationsRequest,
  ListResolverQueryLogConfigAssociationsResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand,
  serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand,
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

export type ListResolverQueryLogConfigAssociationsCommandInput = ListResolverQueryLogConfigAssociationsRequest;
export type ListResolverQueryLogConfigAssociationsCommandOutput = ListResolverQueryLogConfigAssociationsResponse &
  __MetadataBearer;

/**
 * <p>Lists information about associations between Amazon VPCs and query logging configurations.</p>
 */
export class ListResolverQueryLogConfigAssociationsCommand extends $Command<
  ListResolverQueryLogConfigAssociationsCommandInput,
  ListResolverQueryLogConfigAssociationsCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResolverQueryLogConfigAssociationsCommandInput) {
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
  ): Handler<ListResolverQueryLogConfigAssociationsCommandInput, ListResolverQueryLogConfigAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverQueryLogConfigAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResolverQueryLogConfigAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResolverQueryLogConfigAssociationsResponse.filterSensitiveLog,
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

  private serialize(
    input: ListResolverQueryLogConfigAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResolverQueryLogConfigAssociationsCommandOutput> {
    return deserializeAws_json1_1ListResolverQueryLogConfigAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
