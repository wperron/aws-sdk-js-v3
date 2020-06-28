import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient.ts";
import {
  CreateDBInstanceReadReplicaMessage,
  CreateDBInstanceReadReplicaResult
} from "../models/index.ts";
import {
  deserializeAws_queryCreateDBInstanceReadReplicaCommand,
  serializeAws_queryCreateDBInstanceReadReplicaCommand
} from "../protocols/Aws_query.ts";
import { getCrossRegionPresignedUrlPlugin } from "../../middleware-sdk-rds/mod.ts";
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

export type CreateDBInstanceReadReplicaCommandInput = CreateDBInstanceReadReplicaMessage;
export type CreateDBInstanceReadReplicaCommandOutput = CreateDBInstanceReadReplicaResult &
  __MetadataBearer;

export class CreateDBInstanceReadReplicaCommand extends $Command<
  CreateDBInstanceReadReplicaCommandInput,
  CreateDBInstanceReadReplicaCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDBInstanceReadReplicaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateDBInstanceReadReplicaCommandInput,
    CreateDBInstanceReadReplicaCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

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
    input: CreateDBInstanceReadReplicaCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBInstanceReadReplicaCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDBInstanceReadReplicaCommandOutput> {
    return deserializeAws_queryCreateDBInstanceReadReplicaCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
