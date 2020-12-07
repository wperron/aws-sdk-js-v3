import { IoTSiteWise } from "../IoTSiteWise.ts";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient.ts";
import {
  ListProjectAssetsCommand,
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
} from "../commands/ListProjectAssetsCommand.ts";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListProjectAssetsCommandInput,
  ...args: any
): Promise<ListProjectAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectAssetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListProjectAssetsCommandInput,
  ...args: any
): Promise<ListProjectAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listProjectAssets(input, ...args);
};
export async function* paginateListProjectAssets(
  config: IoTSiteWisePaginationConfiguration,
  input: ListProjectAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectAssetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProjectAssetsCommandOutput;
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
