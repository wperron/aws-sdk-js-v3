import { Chime } from "../Chime.ts";
import { ChimeClient } from "../ChimeClient.ts";
import {
  ListSipRulesCommand,
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput,
} from "../commands/ListSipRulesCommand.ts";
import { ChimePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListSipRulesCommandInput,
  ...args: any
): Promise<ListSipRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSipRulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListSipRulesCommandInput,
  ...args: any
): Promise<ListSipRulesCommandOutput> => {
  // @ts-ignore
  return await client.listSipRules(input, ...args);
};
export async function* paginateListSipRules(
  config: ChimePaginationConfiguration,
  input: ListSipRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListSipRulesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSipRulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
