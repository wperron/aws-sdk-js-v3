import { GlobalAccelerator } from "../GlobalAccelerator.ts";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient.ts";
import {
  ListCustomRoutingEndpointGroupsCommand,
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
} from "../commands/ListCustomRoutingEndpointGroupsCommand.ts";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListCustomRoutingEndpointGroupsCommandInput,
  ...args: any
): Promise<ListCustomRoutingEndpointGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomRoutingEndpointGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GlobalAccelerator,
  input: ListCustomRoutingEndpointGroupsCommandInput,
  ...args: any
): Promise<ListCustomRoutingEndpointGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listCustomRoutingEndpointGroups(input, ...args);
};
export async function* paginateListCustomRoutingEndpointGroups(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingEndpointGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomRoutingEndpointGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomRoutingEndpointGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlobalAccelerator) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlobalAcceleratorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GlobalAccelerator | GlobalAcceleratorClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
