import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient.ts";
import { SimulatePolicyResponse, SimulatePrincipalPolicyRequest } from "../models/models_0.ts";
import {
  deserializeAws_querySimulatePrincipalPolicyCommand,
  serializeAws_querySimulatePrincipalPolicyCommand,
} from "../protocols/Aws_query.ts";
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

export type SimulatePrincipalPolicyCommandInput = SimulatePrincipalPolicyRequest;
export type SimulatePrincipalPolicyCommandOutput = SimulatePolicyResponse & __MetadataBearer;

/**
 * <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of
 *          API operations and AWS resources to determine the policies' effective permissions. The
 *          entity can be an IAM user, group, or role. If you specify a user, then the simulation
 *          also includes all of the policies that are attached to groups that the user belongs
 *          to.</p>
 *          <p>You can optionally include a list of one or more additional policies specified as
 *          strings to include in the simulation. If you want to simulate only policies specified as
 *          strings, use <a>SimulateCustomPolicy</a> instead.</p>
 *          <p>You can also optionally include one resource-based policy to be evaluated with each of
 *          the resources included in the simulation.</p>
 *          <p>The simulation does not perform the API operations; it only checks the authorization to
 *          determine if the simulated policies allow or deny the operations.</p>
 *          <p>
 *             <b>Note:</b> This API discloses information about the permissions
 *          granted to other users. If you do not want users to see other user's permissions, then
 *          consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p>
 *          <p>Context keys are variables maintained by AWS and its services that provide details
 *          about the context of an API query request. You can use the <code>Condition</code> element
 *          of an IAM policy to evaluate context keys. To get the list of context keys that the
 *          policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p>
 *          <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code>
 *          parameters to paginate the results.</p>
 */
export class SimulatePrincipalPolicyCommand extends $Command<
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SimulatePrincipalPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "SimulatePrincipalPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SimulatePrincipalPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SimulatePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SimulatePrincipalPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySimulatePrincipalPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SimulatePrincipalPolicyCommandOutput> {
    return deserializeAws_querySimulatePrincipalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
