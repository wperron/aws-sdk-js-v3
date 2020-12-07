import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient.ts";
import { ListRateBasedRulesRequest, ListRateBasedRulesResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1ListRateBasedRulesCommand,
  serializeAws_json1_1ListRateBasedRulesCommand,
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

export type ListRateBasedRulesCommandInput = ListRateBasedRulesRequest;
export type ListRateBasedRulesCommandOutput = ListRateBasedRulesResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of <a>RuleSummary</a> objects.</p>
 */
export class ListRateBasedRulesCommand extends $Command<
  ListRateBasedRulesCommandInput,
  ListRateBasedRulesCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRateBasedRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRateBasedRulesCommandInput, ListRateBasedRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "ListRateBasedRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRateBasedRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRateBasedRulesResponse.filterSensitiveLog,
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

  private serialize(input: ListRateBasedRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRateBasedRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRateBasedRulesCommandOutput> {
    return deserializeAws_json1_1ListRateBasedRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
