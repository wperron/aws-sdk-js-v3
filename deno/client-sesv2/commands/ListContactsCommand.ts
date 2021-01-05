import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client.ts";
import { ListContactsRequest, ListContactsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1ListContactsCommand,
  serializeAws_restJson1ListContactsCommand,
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

export type ListContactsCommandInput = ListContactsRequest;
export type ListContactsCommandOutput = ListContactsResponse & __MetadataBearer;

/**
 * <p>Lists the contacts present in a specific contact list.</p>
 */
export class ListContactsCommand extends $Command<
  ListContactsCommandInput,
  ListContactsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListContactsCommandInput) {
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
  ): Handler<ListContactsCommandInput, ListContactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "ListContactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContactsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListContactsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListContactsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContactsCommandOutput> {
    return deserializeAws_restJson1ListContactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
