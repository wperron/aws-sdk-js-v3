import { defaultRegionInfoProvider } from "./endpoints.ts";
import { Logger as __Logger } from "../types/mod.ts";

/**
 * @internal
 */
export const ClientSharedValues = {
  apiVersion: "2018-07-27",
  disableHostPrefix: false,
  logger: {} as __Logger,
  regionInfoProvider: defaultRegionInfoProvider,
  serviceId: "IoT Events",
};
