import { SmithyException as __SmithyException } from "../../smithy-client/mod.ts";
import { MetadataBearer as $MetadataBearer } from "../../types/mod.ts";

/**
 * <p>The specified version does not match the version of the document.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowRequest {
  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace DeleteThingShadowRequest {
  export const filterSensitiveLog = (obj: DeleteThingShadowRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the DeleteThingShadow operation.</p>
 */
export interface DeleteThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload: Uint8Array | undefined;
}

export namespace DeleteThingShadowResponse {
  export const filterSensitiveLog = (obj: DeleteThingShadowResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An unexpected error has occurred.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified combination of HTTP verb and URI is not supported.</p>
 */
export interface MethodNotAllowedException extends __SmithyException, $MetadataBearer {
  name: "MethodNotAllowedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace MethodNotAllowedException {
  export const filterSensitiveLog = (obj: MethodNotAllowedException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>You are not authorized to perform this operation.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
}

/**
 * <p>The document encoding is not supported.</p>
 */
export interface UnsupportedDocumentEncodingException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedDocumentEncodingException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace UnsupportedDocumentEncodingException {
  export const filterSensitiveLog = (obj: UnsupportedDocumentEncodingException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the GetThingShadow operation.</p>
 */
export interface GetThingShadowRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;
}

export namespace GetThingShadowRequest {
  export const filterSensitiveLog = (obj: GetThingShadowRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the GetThingShadow operation.</p>
 */
export interface GetThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

export namespace GetThingShadowResponse {
  export const filterSensitiveLog = (obj: GetThingShadowResponse): any => ({
    ...obj,
  });
}

export interface ListNamedShadowsForThingRequest {
  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The result page size.</p>
   */
  pageSize?: number;

  /**
   * <p>The token to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListNamedShadowsForThingRequest {
  export const filterSensitiveLog = (obj: ListNamedShadowsForThingRequest): any => ({
    ...obj,
  });
}

export interface ListNamedShadowsForThingResponse {
  /**
   * <p>The list of shadows for the specified thing.</p>
   */
  results?: string[];

  /**
   * <p>The Epoch date and time the response was generated by AWS IoT.</p>
   */
  timestamp?: number;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export namespace ListNamedShadowsForThingResponse {
  export const filterSensitiveLog = (obj: ListNamedShadowsForThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the Publish operation.</p>
 */
export interface PublishRequest {
  /**
   * <p>The name of the MQTT topic.</p>
   */
  topic: string | undefined;

  /**
   * <p>The Quality of Service (QoS) level.</p>
   */
  qos?: number;

  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

export namespace PublishRequest {
  export const filterSensitiveLog = (obj: PublishRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The payload exceeds the maximum size allowed.</p>
 */
export interface RequestEntityTooLargeException extends __SmithyException, $MetadataBearer {
  name: "RequestEntityTooLargeException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace RequestEntityTooLargeException {
  export const filterSensitiveLog = (obj: RequestEntityTooLargeException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowRequest {
  /**
   * <p>The name of the shadow.</p>
   */
  shadowName?: string;

  /**
   * <p>The state information, in JSON format.</p>
   */
  payload: Uint8Array | undefined;

  /**
   * <p>The name of the thing.</p>
   */
  thingName: string | undefined;
}

export namespace UpdateThingShadowRequest {
  export const filterSensitiveLog = (obj: UpdateThingShadowRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The output from the UpdateThingShadow operation.</p>
 */
export interface UpdateThingShadowResponse {
  /**
   * <p>The state information, in JSON format.</p>
   */
  payload?: Uint8Array;
}

export namespace UpdateThingShadowResponse {
  export const filterSensitiveLog = (obj: UpdateThingShadowResponse): any => ({
    ...obj,
  });
}
