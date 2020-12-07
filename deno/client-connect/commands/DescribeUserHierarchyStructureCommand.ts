import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient.ts";
import { DescribeUserHierarchyStructureRequest, DescribeUserHierarchyStructureResponse } from "../models/models_0.ts";
import {
  deserializeAws_restJson1DescribeUserHierarchyStructureCommand,
  serializeAws_restJson1DescribeUserHierarchyStructureCommand,
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

export type DescribeUserHierarchyStructureCommandInput = DescribeUserHierarchyStructureRequest;
export type DescribeUserHierarchyStructureCommandOutput = DescribeUserHierarchyStructureResponse & __MetadataBearer;

/**
 * <p>Describes the hierarchy structure of the specified Amazon Connect instance.</p>
 */
export class DescribeUserHierarchyStructureCommand extends $Command<
  DescribeUserHierarchyStructureCommandInput,
  DescribeUserHierarchyStructureCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeUserHierarchyStructureCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUserHierarchyStructureCommandInput, DescribeUserHierarchyStructureCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeUserHierarchyStructureCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeUserHierarchyStructureRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeUserHierarchyStructureResponse.filterSensitiveLog,
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
    input: DescribeUserHierarchyStructureCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeUserHierarchyStructureCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeUserHierarchyStructureCommandOutput> {
    return deserializeAws_restJson1DescribeUserHierarchyStructureCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
