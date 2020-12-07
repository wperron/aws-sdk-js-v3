import { DevOpsGuru } from "../DevOpsGuru.ts";
import { DevOpsGuruClient } from "../DevOpsGuruClient.ts";
import {
  SearchInsightsCommand,
  SearchInsightsCommandInput,
  SearchInsightsCommandOutput,
} from "../commands/SearchInsightsCommand.ts";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: SearchInsightsCommandInput,
  ...args: any
): Promise<SearchInsightsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchInsightsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: SearchInsightsCommandInput,
  ...args: any
): Promise<SearchInsightsCommandOutput> => {
  // @ts-ignore
  return await client.searchInsights(input, ...args);
};
export async function* paginateSearchInsights(
  config: DevOpsGuruPaginationConfiguration,
  input: SearchInsightsCommandInput,
  ...additionalArguments: any
): Paginator<SearchInsightsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchInsightsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DevOpsGuru) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
