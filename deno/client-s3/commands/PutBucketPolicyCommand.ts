import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.ts";
import { PutBucketPolicyRequest } from "../models/models_0.ts";
import {
  deserializeAws_restXmlPutBucketPolicyCommand,
  serializeAws_restXmlPutBucketPolicyCommand,
} from "../protocols/Aws_restXml.ts";
import { getApplyMd5BodyChecksumPlugin } from "../../middleware-apply-body-checksum/mod.ts";
import { getBucketEndpointPlugin } from "../../middleware-bucket-endpoint/mod.ts";
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

export type PutBucketPolicyCommandInput = PutBucketPolicyRequest;
export type PutBucketPolicyCommandOutput = __MetadataBearer;

/**
 * <p>Applies an Amazon S3 bucket policy to an Amazon S3 bucket. If you are using an identity other than
 *          the root user of the AWS account that owns the bucket, the calling identity must have the
 *             <code>PutBucketPolicy</code> permissions on the specified bucket and belong to the
 *          bucket owner's account in order to use this operation.</p>
 *
 *          <p>If you don't have <code>PutBucketPolicy</code> permissions, Amazon S3 returns a <code>403
 *             Access Denied</code> error. If you have the correct permissions, but you're not using an
 *          identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not
 *             Allowed</code> error.</p>
 *
 *          <important>
 *             <p> As a security precaution, the root user of the AWS account that owns a bucket can
 *             always use this operation, even if the policy explicitly denies the root user the
 *             ability to perform this action. </p>
 *          </important>
 *
 *
 *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 *             Policies</a>.</p>
 *
 *          <p>The following operations are related to <code>PutBucketPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html">DeleteBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class PutBucketPolicyCommand extends $Command<
  PutBucketPolicyCommandInput,
  PutBucketPolicyCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutBucketPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutBucketPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBucketPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
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

  private serialize(input: PutBucketPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutBucketPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBucketPolicyCommandOutput> {
    return deserializeAws_restXmlPutBucketPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
