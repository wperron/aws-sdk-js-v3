import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2019-11-07",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "SageMaker A2I Runtime",
};
