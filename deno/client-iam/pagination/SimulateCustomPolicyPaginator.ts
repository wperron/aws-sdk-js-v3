import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  SimulateCustomPolicyCommand,
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "../commands/SimulateCustomPolicyCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: SimulateCustomPolicyCommandInput,
  ...args: any
): Promise<SimulateCustomPolicyCommandOutput> => {
  // @ts-ignore
  return await client.send(new SimulateCustomPolicyCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: SimulateCustomPolicyCommandInput,
  ...args: any
): Promise<SimulateCustomPolicyCommandOutput> => {
  // @ts-ignore
  return await client.simulateCustomPolicy(input, ...args);
};
export async function* paginateSimulateCustomPolicy(
  config: IAMPaginationConfiguration,
  input: SimulateCustomPolicyCommandInput,
  ...additionalArguments: any
): Paginator<SimulateCustomPolicyCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SimulateCustomPolicyCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
