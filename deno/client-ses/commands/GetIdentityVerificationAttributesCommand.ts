import process from "https://deno.land/std@0.79.0/node/process.ts";
import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient.ts";
import {
  GetIdentityVerificationAttributesRequest,
  GetIdentityVerificationAttributesResponse,
} from "../models/models_0.ts";
import {
  deserializeAws_queryGetIdentityVerificationAttributesCommand,
  serializeAws_queryGetIdentityVerificationAttributesCommand,
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

export type GetIdentityVerificationAttributesCommandInput = GetIdentityVerificationAttributesRequest;
export type GetIdentityVerificationAttributesCommandOutput = GetIdentityVerificationAttributesResponse &
  __MetadataBearer;

/**
 * <p>Given a list of identities (email addresses and/or domains), returns the verification
 *             status and (for domain identities) the verification token for each identity.</p>
 *         <p>The verification status of an email address is "Pending" until the email address owner
 *             clicks the link within the verification email that Amazon SES sent to that address. If the
 *             email address owner clicks the link within 24 hours, the verification status of the
 *             email address changes to "Success". If the link is not clicked within 24 hours, the
 *             verification status changes to "Failed." In that case, if you still want to verify the
 *             email address, you must restart the verification process from the beginning.</p>
 *         <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches
 *             for the required TXT record in the DNS settings of the domain. When Amazon SES detects the
 *             record, the domain's verification status changes to "Success". If Amazon SES is unable to
 *             detect the record within 72 hours, the domain's verification status changes to "Failed."
 *             In that case, if you still want to verify the domain, you must restart the verification
 *             process from the beginning.</p>
 *         <p>This operation is throttled at one request per second and can only get verification
 *             attributes for up to 100 identities at a time.</p>
 */
export class GetIdentityVerificationAttributesCommand extends $Command<
  GetIdentityVerificationAttributesCommandInput,
  GetIdentityVerificationAttributesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIdentityVerificationAttributesCommandInput) {
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
  ): Handler<GetIdentityVerificationAttributesCommandInput, GetIdentityVerificationAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetIdentityVerificationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityVerificationAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityVerificationAttributesResponse.filterSensitiveLog,
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
    input: GetIdentityVerificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetIdentityVerificationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityVerificationAttributesCommandOutput> {
    return deserializeAws_queryGetIdentityVerificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
