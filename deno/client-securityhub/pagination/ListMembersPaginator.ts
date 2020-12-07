import { SecurityHub } from "../SecurityHub.ts";
import { SecurityHubClient } from "../SecurityHubClient.ts";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand.ts";
import { SecurityHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: ListMembersCommandInput,
  ...args: any
): Promise<ListMembersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMembersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityHub,
  input: ListMembersCommandInput,
  ...args: any
): Promise<ListMembersCommandOutput> => {
  // @ts-ignore
  return await client.listMembers(input, ...args);
};
export async function* paginateListMembers(
  config: SecurityHubPaginationConfiguration,
  input: ListMembersCommandInput,
  ...additionalArguments: any
): Paginator<ListMembersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMembersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
