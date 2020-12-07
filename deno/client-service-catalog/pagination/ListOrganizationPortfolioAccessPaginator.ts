import { ServiceCatalog } from "../ServiceCatalog.ts";
import { ServiceCatalogClient } from "../ServiceCatalogClient.ts";
import {
  ListOrganizationPortfolioAccessCommand,
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput,
} from "../commands/ListOrganizationPortfolioAccessCommand.ts";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...args: any
): Promise<ListOrganizationPortfolioAccessCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrganizationPortfolioAccessCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...args: any
): Promise<ListOrganizationPortfolioAccessCommandOutput> => {
  // @ts-ignore
  return await client.listOrganizationPortfolioAccess(input, ...args);
};
export async function* paginateListOrganizationPortfolioAccess(
  config: ServiceCatalogPaginationConfiguration,
  input: ListOrganizationPortfolioAccessCommandInput,
  ...additionalArguments: any
): Paginator<ListOrganizationPortfolioAccessCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrganizationPortfolioAccessCommandOutput;
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
