import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  SearchTransitGatewayMulticastGroupsCommand,
  SearchTransitGatewayMulticastGroupsCommandInput,
  SearchTransitGatewayMulticastGroupsCommandOutput,
} from "../commands/SearchTransitGatewayMulticastGroupsCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: SearchTransitGatewayMulticastGroupsCommandInput,
  ...args: any
): Promise<SearchTransitGatewayMulticastGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchTransitGatewayMulticastGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: SearchTransitGatewayMulticastGroupsCommandInput,
  ...args: any
): Promise<SearchTransitGatewayMulticastGroupsCommandOutput> => {
  // @ts-ignore
  return await client.searchTransitGatewayMulticastGroups(input, ...args);
};
export async function* paginateSearchTransitGatewayMulticastGroups(
  config: EC2PaginationConfiguration,
  input: SearchTransitGatewayMulticastGroupsCommandInput,
  ...additionalArguments: any
): Paginator<SearchTransitGatewayMulticastGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchTransitGatewayMulticastGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
