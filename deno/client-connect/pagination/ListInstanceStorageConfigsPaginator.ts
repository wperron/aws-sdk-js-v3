import { Connect } from "../Connect.ts";
import { ConnectClient } from "../ConnectClient.ts";
import {
  ListInstanceStorageConfigsCommand,
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
} from "../commands/ListInstanceStorageConfigsCommand.ts";
import { ConnectPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListInstanceStorageConfigsCommandInput,
  ...args: any
): Promise<ListInstanceStorageConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceStorageConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListInstanceStorageConfigsCommandInput,
  ...args: any
): Promise<ListInstanceStorageConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listInstanceStorageConfigs(input, ...args);
};
export async function* paginateListInstanceStorageConfigs(
  config: ConnectPaginationConfiguration,
  input: ListInstanceStorageConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceStorageConfigsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceStorageConfigsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
