import { ServiceCatalog } from "../ServiceCatalog.ts";
import { ServiceCatalogClient } from "../ServiceCatalogClient.ts";
import {
  ListProvisioningArtifactsForServiceActionCommand,
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
} from "../commands/ListProvisioningArtifactsForServiceActionCommand.ts";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListProvisioningArtifactsForServiceActionCommandInput,
  ...args: any
): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProvisioningArtifactsForServiceActionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListProvisioningArtifactsForServiceActionCommandInput,
  ...args: any
): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> => {
  // @ts-ignore
  return await client.listProvisioningArtifactsForServiceAction(input, ...args);
};
export async function* paginateListProvisioningArtifactsForServiceAction(
  config: ServiceCatalogPaginationConfiguration,
  input: ListProvisioningArtifactsForServiceActionCommandInput,
  ...additionalArguments: any
): Paginator<ListProvisioningArtifactsForServiceActionCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProvisioningArtifactsForServiceActionCommandOutput;
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
