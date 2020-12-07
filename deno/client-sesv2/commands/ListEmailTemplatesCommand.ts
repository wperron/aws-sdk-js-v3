import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { ListEmailTemplatesRequest, ListEmailTemplatesResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListEmailTemplatesCommand,
  serializeAws_restJson1ListEmailTemplatesCommand,
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

export type ListEmailTemplatesCommandInput = ListEmailTemplatesRequest;
export type ListEmailTemplatesCommandOutput = ListEmailTemplatesResponse & __MetadataBearer;

/**
 * <p>Lists the email templates present in your Amazon SES account in the current AWS
 *             Region.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class ListEmailTemplatesCommand extends $Command<
  ListEmailTemplatesCommandInput,
  ListEmailTemplatesCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListEmailTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEmailTemplatesCommandInput, ListEmailTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListEmailTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEmailTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEmailTemplatesResponse.filterSensitiveLog,
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

  private serialize(input: ListEmailTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEmailTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEmailTemplatesCommandOutput> {
    return deserializeAws_restJson1ListEmailTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
