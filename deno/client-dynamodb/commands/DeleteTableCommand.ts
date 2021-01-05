import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient.ts";
import { DeleteTableInput, DeleteTableOutput } from "../models/models_0.ts";
import {
  deserializeAws_json1_0DeleteTableCommand,
  serializeAws_json1_0DeleteTableCommand,
} from "../protocols/Aws_json1_0.ts";
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

export type DeleteTableCommandInput = DeleteTableInput;
export type DeleteTableCommandOutput = DeleteTableOutput & __MetadataBearer;

/**
 * <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a
 *         <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until
 *       DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete
 *       it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns
 *       a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a
 *         <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no
 *       error is returned. </p>
 *          <note>
 *             <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and
 *           <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is
 *         complete.</p>
 *          </note>
 *          <p>When you delete a table, any indexes on that table are also deleted.</p>
 *          <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes
 *       into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p>
 *
 *          <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
 */
export class DeleteTableCommand extends $Command<
  DeleteTableCommandInput,
  DeleteTableCommandOutput,
  DynamoDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteTableCommandInput, DeleteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DynamoDBClient";
    const commandName = "DeleteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTableInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTableOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTableCommandOutput> {
    return deserializeAws_json1_0DeleteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
