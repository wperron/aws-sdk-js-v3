import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient.ts";
import { TransferCertificateRequest, TransferCertificateResponse } from "../models/models_2.ts";
import {
  deserializeAws_restJson1TransferCertificateCommand,
  serializeAws_restJson1TransferCertificateCommand,
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

export type TransferCertificateCommandInput = TransferCertificateRequest;
export type TransferCertificateCommandOutput = TransferCertificateResponse & __MetadataBearer;

/**
 * <p>Transfers the specified certificate to the specified AWS account.</p>
 *          <p>You can cancel the transfer until it is acknowledged by the recipient.</p>
 *          <p>No notification is sent to the transfer destination's account. It is up to the caller
 *          to notify the transfer target.</p>
 *          <p>The certificate being transferred must not be in the ACTIVE state. You can use the
 *          UpdateCertificate API to deactivate it.</p>
 *          <p>The certificate must not have any policies attached to it. You can use the
 *          DetachPrincipalPolicy API to detach them.</p>
 */
export class TransferCertificateCommand extends $Command<
  TransferCertificateCommandInput,
  TransferCertificateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TransferCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransferCertificateCommandInput, TransferCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "TransferCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransferCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TransferCertificateResponse.filterSensitiveLog,
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

  private serialize(input: TransferCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TransferCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TransferCertificateCommandOutput> {
    return deserializeAws_restJson1TransferCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
