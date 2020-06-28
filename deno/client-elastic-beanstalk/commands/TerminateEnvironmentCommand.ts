import {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticBeanstalkClient.ts";
import {
  EnvironmentDescription,
  TerminateEnvironmentMessage
} from "../models/index.ts";
import {
  deserializeAws_queryTerminateEnvironmentCommand,
  serializeAws_queryTerminateEnvironmentCommand
} from "../protocols/Aws_query.ts";
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

export type TerminateEnvironmentCommandInput = TerminateEnvironmentMessage;
export type TerminateEnvironmentCommandOutput = EnvironmentDescription &
  __MetadataBearer;

export class TerminateEnvironmentCommand extends $Command<
  TerminateEnvironmentCommandInput,
  TerminateEnvironmentCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TerminateEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    TerminateEnvironmentCommandInput,
    TerminateEnvironmentCommandOutput
  > {
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
    input: TerminateEnvironmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryTerminateEnvironmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<TerminateEnvironmentCommandOutput> {
    return deserializeAws_queryTerminateEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
