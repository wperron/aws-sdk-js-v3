import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client.ts";
import { DeleteFirewallManagerRuleGroupsRequest, DeleteFirewallManagerRuleGroupsResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand,
  serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand,
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

export type DeleteFirewallManagerRuleGroupsCommandInput = DeleteFirewallManagerRuleGroupsRequest;
export type DeleteFirewallManagerRuleGroupsCommandOutput = DeleteFirewallManagerRuleGroupsResponse & __MetadataBearer;

/**
 * <p>Deletes all rule groups that are managed by AWS Firewall Manager for the specified web ACL. </p>
 *          <p>You can only use this if <code>ManagedByFirewallManager</code> is false in the specified <a>WebACL</a>.  </p>
 */
export class DeleteFirewallManagerRuleGroupsCommand extends $Command<
  DeleteFirewallManagerRuleGroupsCommandInput,
  DeleteFirewallManagerRuleGroupsCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFirewallManagerRuleGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFirewallManagerRuleGroupsCommandInput, DeleteFirewallManagerRuleGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "DeleteFirewallManagerRuleGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFirewallManagerRuleGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFirewallManagerRuleGroupsResponse.filterSensitiveLog,
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
    input: DeleteFirewallManagerRuleGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteFirewallManagerRuleGroupsCommandOutput> {
    return deserializeAws_json1_1DeleteFirewallManagerRuleGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
