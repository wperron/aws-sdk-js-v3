import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient.ts";
import { GetFindingsStatisticsRequest, GetFindingsStatisticsResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1GetFindingsStatisticsCommand,
  serializeAws_restJson1GetFindingsStatisticsCommand,
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

export type GetFindingsStatisticsCommandInput = GetFindingsStatisticsRequest;
export type GetFindingsStatisticsCommandOutput = GetFindingsStatisticsResponse & __MetadataBearer;

/**
 * <p>Lists Amazon GuardDuty findings statistics for the specified detector ID.</p>
 */
export class GetFindingsStatisticsCommand extends $Command<
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFindingsStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFindingsStatisticsCommandInput, GetFindingsStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetFindingsStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFindingsStatisticsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFindingsStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFindingsStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFindingsStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingsStatisticsCommandOutput> {
    return deserializeAws_restJson1GetFindingsStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
