import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2015-04-08",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "WorkSpaces",
};
