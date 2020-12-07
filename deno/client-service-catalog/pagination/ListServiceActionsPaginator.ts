import { ServiceCatalog } from "../ServiceCatalog.ts";
import { ServiceCatalogClient } from "../ServiceCatalogClient.ts";
import {
  ListServiceActionsCommand,
  ListServiceActionsCommandInput,
  ListServiceActionsCommandOutput,
} from "../commands/ListServiceActionsCommand.ts";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListServiceActionsCommandInput,
  ...args: any
): Promise<ListServiceActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListServiceActionsCommandInput,
  ...args: any
): Promise<ListServiceActionsCommandOutput> => {
  // @ts-ignore
  return await client.listServiceActions(input, ...args);
};
export async function* paginateListServiceActions(
  config: ServiceCatalogPaginationConfiguration,
  input: ListServiceActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceActionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceActionsCommandOutput;
  while (hasNext) {
    input.PageToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    token = page.NextPageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
