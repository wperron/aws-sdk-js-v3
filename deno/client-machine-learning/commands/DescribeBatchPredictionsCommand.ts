import {
  MachineLearningClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MachineLearningClient.ts";
import {
  DescribeBatchPredictionsInput,
  DescribeBatchPredictionsOutput
} from "../models/index.ts";
import {
  deserializeAws_json1_1DescribeBatchPredictionsCommand,
  serializeAws_json1_1DescribeBatchPredictionsCommand
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

export type DescribeBatchPredictionsCommandInput = DescribeBatchPredictionsInput;
export type DescribeBatchPredictionsCommandOutput = DescribeBatchPredictionsOutput &
  __MetadataBearer;

export class DescribeBatchPredictionsCommand extends $Command<
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
  MachineLearningClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBatchPredictionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeBatchPredictionsCommandInput,
    DescribeBatchPredictionsCommandOutput
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
    input: DescribeBatchPredictionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBatchPredictionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBatchPredictionsCommandOutput> {
    return deserializeAws_json1_1DescribeBatchPredictionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
