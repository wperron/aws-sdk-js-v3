import { RoboMaker } from "../RoboMaker.ts";
import { RoboMakerClient } from "../RoboMakerClient.ts";
import { ListWorldsCommand, ListWorldsCommandInput, ListWorldsCommandOutput } from "../commands/ListWorldsCommand.ts";
import { RoboMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListWorldsCommandInput,
  ...args: any
): Promise<ListWorldsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorldsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RoboMaker,
  input: ListWorldsCommandInput,
  ...args: any
): Promise<ListWorldsCommandOutput> => {
  // @ts-ignore
  return await client.listWorlds(input, ...args);
};
export async function* paginateListWorlds(
  config: RoboMakerPaginationConfiguration,
  input: ListWorldsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorldsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorldsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
