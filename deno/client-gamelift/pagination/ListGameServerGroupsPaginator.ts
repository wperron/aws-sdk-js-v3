import { GameLift } from "../GameLift.ts";
import { GameLiftClient } from "../GameLiftClient.ts";
import {
  ListGameServerGroupsCommand,
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "../commands/ListGameServerGroupsCommand.ts";
import { GameLiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: ListGameServerGroupsCommandInput,
  ...args: any
): Promise<ListGameServerGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGameServerGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: ListGameServerGroupsCommandInput,
  ...args: any
): Promise<ListGameServerGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listGameServerGroups(input, ...args);
};
export async function* paginateListGameServerGroups(
  config: GameLiftPaginationConfiguration,
  input: ListGameServerGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListGameServerGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGameServerGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof GameLift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GameLiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GameLift | GameLiftClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
