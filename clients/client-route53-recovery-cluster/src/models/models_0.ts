// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Route53RecoveryClusterServiceException as __BaseException } from "./Route53RecoveryClusterServiceException";

/**
 * <p>You don't have sufficient permissions to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>There was a conflict with this request. Try again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * Identifier of the resource in use
   * @public
   */
  resourceId: string | undefined;

  /**
   * Type of the resource in use
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The cluster endpoint isn't available. Try another cluster endpoint.</p>
 * @public
 */
export class EndpointTemporarilyUnavailableException extends __BaseException {
  readonly name: "EndpointTemporarilyUnavailableException" = "EndpointTemporarilyUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointTemporarilyUnavailableException, __BaseException>) {
    super({
      name: "EndpointTemporarilyUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointTemporarilyUnavailableException.prototype);
  }
}

/**
 * @public
 */
export interface GetRoutingControlStateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the routing control that you want to get the state for.</p>
   * @public
   */
  RoutingControlArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RoutingControlState = {
  Off: "Off",
  On: "On",
} as const;

/**
 * @public
 */
export type RoutingControlState = (typeof RoutingControlState)[keyof typeof RoutingControlState];

/**
 * @public
 */
export interface GetRoutingControlStateResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the response.</p>
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The state of the routing control.</p>
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;

  /**
   * <p>The routing control name.</p>
   * @public
   */
  RoutingControlName?: string | undefined;
}

/**
 * <p>There was an unexpected error during processing of the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * Advice to clients on when the call can be safely retried
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request references a routing control or control panel that was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Hypothetical resource identifier that was not found
   * @public
   */
  resourceId: string | undefined;

  /**
   * Hypothetical resource type that was not found
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request was denied because of request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * Advice to clients on when the call can be safely retried
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>There was a validation error on the request.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field that had the validation exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Information about the validation exception.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>There was a validation error on the request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * Reason the request failed validation
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * The fields that caused the error, if applicable
   * @public
   */
  fields?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * @public
 */
export interface ListRoutingControlsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel of the routing controls to list.</p>
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of routing controls objects that you want to return with this call. The default value is 500.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A routing control, which is a simple on/off switch that you
 * 			can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When
 * 			the state is set to OFF, traffic does not flow. </p>
 * @public
 */
export interface RoutingControl {
  /**
   * <p>The Amazon Resource Name (ARN) of the control panel where the routing control is located.</p>
   * @public
   */
  ControlPanelArn?: string | undefined;

  /**
   * <p>The name of the control panel where the routing control is located. Only ASCII characters are supported for control
   * 		panel names.</p>
   * @public
   */
  ControlPanelName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing control.</p>
   * @public
   */
  RoutingControlArn?: string | undefined;

  /**
   * <p>The name of the routing control.</p>
   * @public
   */
  RoutingControlName?: string | undefined;

  /**
   * <p>The current state of the routing control. When a routing control state is set to ON, traffic flows to a cell. When
   * 			the state is set to OFF, traffic does not flow. </p>
   * @public
   */
  RoutingControlState?: RoutingControlState | undefined;

  /**
   * <p>The Amazon Web Services account ID of the routing control owner.</p>
   * @public
   */
  Owner?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingControlsResponse {
  /**
   * <p>The list of routing controls.</p>
   * @public
   */
  RoutingControls: RoutingControl[] | undefined;

  /**
   * <p>The token for the next set of results. You receive this token from a previous call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The request can't update that many routing control states at the same time. Try again with fewer routing control states.</p>
 * @public
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name: "ServiceLimitExceededException" = "ServiceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource identifier of the limit that was exceeded.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The resource type of the limit that was exceeded.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The code of the limit that was exceeded.</p>
   * @public
   */
  limitCode: string | undefined;

  /**
   * <p>The service code of the limit that was exceeded.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.limitCode = opts.limitCode;
    this.serviceCode = opts.serviceCode;
  }
}

/**
 * @public
 */
export interface UpdateRoutingControlStateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the routing control that you want to update the state for.</p>
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The state of the routing control. You can set the value to ON or OFF.</p>
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the safety rules that you want to override when you're updating the state of
   * 			a routing control. You can override one safety rule or multiple safety rules by including one or more ARNs, separated
   * 			by commas.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
   * 			Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   * @public
   */
  SafetyRulesToOverride?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStateResponse {}

/**
 * <p>A routing control state entry.</p>
 * @public
 */
export interface UpdateRoutingControlStateEntry {
  /**
   * <p>The Amazon Resource Name (ARN) for a routing control state entry.</p>
   * @public
   */
  RoutingControlArn: string | undefined;

  /**
   * <p>The routing control state in a set of routing control state entries.</p>
   * @public
   */
  RoutingControlState: RoutingControlState | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStatesRequest {
  /**
   * <p>A set of routing control entries that you want to update.</p>
   * @public
   */
  UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntry[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) for the safety rules that you want to override when you're updating routing
   * 			control states. You can override one safety rule or multiple safety rules by including one or more ARNs, separated
   * 			by commas.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
   * 			Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
   * @public
   */
  SafetyRulesToOverride?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingControlStatesResponse {}
