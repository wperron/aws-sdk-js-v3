import { GameLift } from "../GameLift.ts";
import { GameLiftClient } from "../GameLiftClient.ts";
import {
  SearchGameSessionsCommand,
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput,
} from "../commands/SearchGameSessionsCommand.ts";
import { GameLiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GameLiftClient,
  input: SearchGameSessionsCommandInput,
  ...args: any
): Promise<SearchGameSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchGameSessionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GameLift,
  input: SearchGameSessionsCommandInput,
  ...args: any
): Promise<SearchGameSessionsCommandOutput> => {
  // @ts-ignore
  return await client.searchGameSessions(input, ...args);
};
export async function* paginateSearchGameSessions(
  config: GameLiftPaginationConfiguration,
  input: SearchGameSessionsCommandInput,
  ...additionalArguments: any
): Paginator<SearchGameSessionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchGameSessionsCommandOutput;
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
