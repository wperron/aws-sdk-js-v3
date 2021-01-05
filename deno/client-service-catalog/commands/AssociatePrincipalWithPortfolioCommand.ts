import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient.ts";
import { AssociatePrincipalWithPortfolioInput, AssociatePrincipalWithPortfolioOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand,
  serializeAws_json1_1AssociatePrincipalWithPortfolioCommand,
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

export type AssociatePrincipalWithPortfolioCommandInput = AssociatePrincipalWithPortfolioInput;
export type AssociatePrincipalWithPortfolioCommandOutput = AssociatePrincipalWithPortfolioOutput & __MetadataBearer;

/**
 * <p>Associates the specified principal ARN with the specified portfolio.</p>
 */
export class AssociatePrincipalWithPortfolioCommand extends $Command<
  AssociatePrincipalWithPortfolioCommandInput,
  AssociatePrincipalWithPortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociatePrincipalWithPortfolioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociatePrincipalWithPortfolioCommandInput, AssociatePrincipalWithPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "AssociatePrincipalWithPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociatePrincipalWithPortfolioInput.filterSensitiveLog,
      outputFilterSensitiveLog: AssociatePrincipalWithPortfolioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociatePrincipalWithPortfolioCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociatePrincipalWithPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociatePrincipalWithPortfolioCommandOutput> {
    return deserializeAws_json1_1AssociatePrincipalWithPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
