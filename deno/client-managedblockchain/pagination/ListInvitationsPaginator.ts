import { ManagedBlockchain } from "../ManagedBlockchain.ts";
import { ManagedBlockchainClient } from "../ManagedBlockchainClient.ts";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "../commands/ListInvitationsCommand.ts";
import { ManagedBlockchainPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ManagedBlockchainClient,
  input: ListInvitationsCommandInput,
  ...args: any
): Promise<ListInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInvitationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ManagedBlockchain,
  input: ListInvitationsCommandInput,
  ...args: any
): Promise<ListInvitationsCommandOutput> => {
  // @ts-ignore
  return await client.listInvitations(input, ...args);
};
export async function* paginateListInvitations(
  config: ManagedBlockchainPaginationConfiguration,
  input: ListInvitationsCommandInput,
  ...additionalArguments: any
): Paginator<ListInvitationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInvitationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ManagedBlockchain) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ManagedBlockchainClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ManagedBlockchain | ManagedBlockchainClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
