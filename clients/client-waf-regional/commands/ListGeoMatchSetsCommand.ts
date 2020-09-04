import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { ListGeoMatchSetsRequest, ListGeoMatchSetsResponse } from "../models/index";
import {
  deserializeAws_json1_1ListGeoMatchSetsCommand,
  serializeAws_json1_1ListGeoMatchSetsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListGeoMatchSetsCommandInput = ListGeoMatchSetsRequest;
export type ListGeoMatchSetsCommandOutput = ListGeoMatchSetsResponse & __MetadataBearer;

export class ListGeoMatchSetsCommand extends $Command<
  ListGeoMatchSetsCommandInput,
  ListGeoMatchSetsCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGeoMatchSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGeoMatchSetsCommandInput, ListGeoMatchSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListGeoMatchSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGeoMatchSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGeoMatchSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGeoMatchSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGeoMatchSetsCommandOutput> {
    return deserializeAws_json1_1ListGeoMatchSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
