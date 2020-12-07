import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "../commands/ListAccessPoliciesCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAccessPoliciesCommandInput,
  ...args: any
): Promise<ListAccessPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListAccessPoliciesCommandInput,
  ...args: any
): Promise<ListAccessPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listAccessPolicies(input, ...args);
};
export async function* paginateListAccessPolicies(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAccessPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessPoliciesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
