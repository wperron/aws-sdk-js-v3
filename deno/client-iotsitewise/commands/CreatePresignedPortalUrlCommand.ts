import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient.ts";
import { CreatePresignedPortalUrlRequest, CreatePresignedPortalUrlResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1CreatePresignedPortalUrlCommand,
  serializeAws_restJson1CreatePresignedPortalUrlCommand,
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

export type CreatePresignedPortalUrlCommandInput = CreatePresignedPortalUrlRequest;
export type CreatePresignedPortalUrlCommandOutput = CreatePresignedPortalUrlResponse & __MetadataBearer;

/**
 * <p>Creates a pre-signed URL to a portal. Use this operation to create URLs to portals that
 *       use AWS Identity and Access Management (IAM) to authenticate users. An IAM user with access to a portal can call this API
 *       to get a URL to that portal. The URL contains an authentication token that lets the IAM user
 *       access the portal.</p>
 */
export class CreatePresignedPortalUrlCommand extends $Command<
  CreatePresignedPortalUrlCommandInput,
  CreatePresignedPortalUrlCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePresignedPortalUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePresignedPortalUrlCommandInput, CreatePresignedPortalUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "CreatePresignedPortalUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePresignedPortalUrlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePresignedPortalUrlResponse.filterSensitiveLog,
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

  private serialize(input: CreatePresignedPortalUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePresignedPortalUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePresignedPortalUrlCommandOutput> {
    return deserializeAws_restJson1CreatePresignedPortalUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
