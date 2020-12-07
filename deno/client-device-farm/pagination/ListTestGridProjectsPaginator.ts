import { DeviceFarm } from "../DeviceFarm.ts";
import { DeviceFarmClient } from "../DeviceFarmClient.ts";
import {
  ListTestGridProjectsCommand,
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput,
} from "../commands/ListTestGridProjectsCommand.ts";
import { DeviceFarmPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestGridProjectsCommandInput,
  ...args: any
): Promise<ListTestGridProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestGridProjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestGridProjectsCommandInput,
  ...args: any
): Promise<ListTestGridProjectsCommandOutput> => {
  // @ts-ignore
  return await client.listTestGridProjects(input, ...args);
};
export async function* paginateListTestGridProjects(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridProjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestGridProjectsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTestGridProjectsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResult"] = config.pageSize;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
