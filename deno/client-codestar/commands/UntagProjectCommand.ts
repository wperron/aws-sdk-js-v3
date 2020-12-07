import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient.ts";
import { UntagProjectRequest, UntagProjectResult } from "../models/models_0.ts";
import {
  deserializeAws_json1_1UntagProjectCommand,
  serializeAws_json1_1UntagProjectCommand,
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

export type UntagProjectCommandInput = UntagProjectRequest;
export type UntagProjectCommandOutput = UntagProjectResult & __MetadataBearer;

/**
 * <p>Removes tags from a project.</p>
 */
export class UntagProjectCommand extends $Command<
  UntagProjectCommandInput,
  UntagProjectCommandOutput,
  CodeStarClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UntagProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeStarClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagProjectCommandInput, UntagProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeStarClient";
    const commandName = "UntagProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagProjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UntagProjectResult.filterSensitiveLog,
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

  private serialize(input: UntagProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UntagProjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagProjectCommandOutput> {
    return deserializeAws_json1_1UntagProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
