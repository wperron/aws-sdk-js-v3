import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient.ts";
import { ListFirewallPoliciesRequest, ListFirewallPoliciesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_0ListFirewallPoliciesCommand,
  serializeAws_json1_0ListFirewallPoliciesCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type ListFirewallPoliciesCommandInput = ListFirewallPoliciesRequest;
export type ListFirewallPoliciesCommandOutput = ListFirewallPoliciesResponse & __MetadataBearer;

/**
 * <p>Retrieves the metadata for the firewall policies that you have defined. Depending on
 *          your setting for max results and the number of firewall policies, a single call might not
 *          return the full list. </p>
 */
export class ListFirewallPoliciesCommand extends $Command<
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFirewallPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFirewallPoliciesCommandInput, ListFirewallPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "ListFirewallPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFirewallPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFirewallPoliciesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFirewallPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListFirewallPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFirewallPoliciesCommandOutput> {
    return deserializeAws_json1_0ListFirewallPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
