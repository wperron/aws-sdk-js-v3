import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient.ts";
import { RevokeDomainAccessRequest, RevokeDomainAccessResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1RevokeDomainAccessCommand,
  serializeAws_restJson1RevokeDomainAccessCommand,
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

export type RevokeDomainAccessCommandInput = RevokeDomainAccessRequest;
export type RevokeDomainAccessCommandOutput = RevokeDomainAccessResponse & __MetadataBearer;

/**
 * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
 */
export class RevokeDomainAccessCommand extends $Command<
  RevokeDomainAccessCommandInput,
  RevokeDomainAccessCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeDomainAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeDomainAccessCommandInput, RevokeDomainAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "RevokeDomainAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeDomainAccessRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeDomainAccessResponse.filterSensitiveLog,
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

  private serialize(input: RevokeDomainAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RevokeDomainAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeDomainAccessCommandOutput> {
    return deserializeAws_restJson1RevokeDomainAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
