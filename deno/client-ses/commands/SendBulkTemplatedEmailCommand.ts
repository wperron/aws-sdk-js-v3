import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import { SendBulkTemplatedEmailRequest, SendBulkTemplatedEmailResponse } from "../models/models_0.ts";
import {
  deserializeAws_querySendBulkTemplatedEmailCommand,
  serializeAws_querySendBulkTemplatedEmailCommand,
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

export type SendBulkTemplatedEmailCommandInput = SendBulkTemplatedEmailRequest;
export type SendBulkTemplatedEmailCommandOutput = SendBulkTemplatedEmailResponse & __MetadataBearer;

/**
 * <p>Composes an email message to multiple destinations. The message body is created using
 *             an email template.</p>
 *         <p>In order to send email using the <code>SendBulkTemplatedEmail</code> operation, your
 *             call to the API must meet the following requirements:</p>
 *         <ul>
 *             <li>
 *                 <p>The call must refer to an existing email template. You can create email
 *                     templates using the <a>CreateTemplate</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p>The message must be sent from a verified email address or domain.</p>
 *             </li>
 *             <li>
 *                 <p>If your account is still in the Amazon SES sandbox, you may only send to verified
 *                     addresses or domains, or to email addresses associated with the Amazon SES Mailbox
 *                     Simulator. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Verifying
 *                         Email Addresses and Domains</a> in the <i>Amazon SES Developer
 *                         Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>The maximum message size is 10 MB.</p>
 *             </li>
 *             <li>
 *                 <p>Each <code>Destination</code> parameter must include at least one recipient
 *                     email address. The recipient address can be a To: address, a CC: address, or a
 *                     BCC: address. If a recipient email address is invalid (that is, it is not in the
 *                     format <i>UserName@[SubDomain.]Domain.TopLevelDomain</i>), the
 *                     entire message will be rejected, even if the message contains other recipients
 *                     that are valid.</p>
 *             </li>
 *             <li>
 *                 <p>The message may not include more than 50 recipients, across the To:, CC: and
 *                     BCC: fields. If you need to send an email message to a larger audience, you can
 *                     divide your recipient list into groups of 50 or fewer, and then call the
 *                         <code>SendBulkTemplatedEmail</code> operation several times to send the
 *                     message to each group.</p>
 *             </li>
 *             <li>
 *                 <p>The number of destinations you can contact in a single call to the API may be
 *                     limited by your account's maximum sending rate.</p>
 *             </li>
 *          </ul>
 */
export class SendBulkTemplatedEmailCommand extends $Command<
  SendBulkTemplatedEmailCommandInput,
  SendBulkTemplatedEmailCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendBulkTemplatedEmailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBulkTemplatedEmailCommandInput, SendBulkTemplatedEmailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SendBulkTemplatedEmailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendBulkTemplatedEmailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendBulkTemplatedEmailResponse.filterSensitiveLog,
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

  private serialize(input: SendBulkTemplatedEmailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySendBulkTemplatedEmailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBulkTemplatedEmailCommandOutput> {
    return deserializeAws_querySendBulkTemplatedEmailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
