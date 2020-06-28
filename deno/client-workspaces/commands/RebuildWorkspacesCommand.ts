import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesClientResolvedConfig
} from "../WorkSpacesClient.ts";
import {
  RebuildWorkspacesRequest,
  RebuildWorkspacesResult
} from "../models/index.ts";
import {
  deserializeAws_json1_1RebuildWorkspacesCommand,
  serializeAws_json1_1RebuildWorkspacesCommand
} from "../protocols/Aws_json1_1.ts";
import { getSerdePlugin } from "../../middleware-serde/mod.ts";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "../../protocol-http/mod.ts";
import { Command as $Command } from "../../smithy-client/mod.ts";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "../../types/mod.ts";

export type RebuildWorkspacesCommandInput = RebuildWorkspacesRequest;
export type RebuildWorkspacesCommandOutput = RebuildWorkspacesResult &
  __MetadataBearer;

export class RebuildWorkspacesCommand extends $Command<
  RebuildWorkspacesCommandInput,
  RebuildWorkspacesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebuildWorkspacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RebuildWorkspacesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RebuildWorkspacesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RebuildWorkspacesCommandOutput> {
    return deserializeAws_json1_1RebuildWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
