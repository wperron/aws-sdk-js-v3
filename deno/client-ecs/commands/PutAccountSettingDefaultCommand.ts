import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient.ts";
import { PutAccountSettingDefaultRequest, PutAccountSettingDefaultResponse } from "../models/models_0.ts";
import {
  deserializeAws_json1_1PutAccountSettingDefaultCommand,
  serializeAws_json1_1PutAccountSettingDefaultCommand,
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

export type PutAccountSettingDefaultCommandInput = PutAccountSettingDefaultRequest;
export type PutAccountSettingDefaultCommandOutput = PutAccountSettingDefaultResponse & __MetadataBearer;

/**
 * <p>Modifies an account setting for all IAM users on an account for whom no individual
 * 			account setting has been specified. Account settings are set on a per-Region
 * 			basis.</p>
 */
export class PutAccountSettingDefaultCommand extends $Command<
  PutAccountSettingDefaultCommandInput,
  PutAccountSettingDefaultCommandOutput,
  ECSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccountSettingDefaultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAccountSettingDefaultCommandInput, PutAccountSettingDefaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "PutAccountSettingDefaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountSettingDefaultRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAccountSettingDefaultResponse.filterSensitiveLog,
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

  private serialize(input: PutAccountSettingDefaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAccountSettingDefaultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccountSettingDefaultCommandOutput> {
    return deserializeAws_json1_1PutAccountSettingDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
