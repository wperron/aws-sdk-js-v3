import { EKS } from "../EKS.ts";
import { EKSClient } from "../EKSClient.ts";
import { ListAddonsCommand, ListAddonsCommandInput, ListAddonsCommandOutput } from "../commands/ListAddonsCommand.ts";
import { EKSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListAddonsCommandInput,
  ...args: any
): Promise<ListAddonsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAddonsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EKS,
  input: ListAddonsCommandInput,
  ...args: any
): Promise<ListAddonsCommandOutput> => {
  // @ts-ignore
  return await client.listAddons(input, ...args);
};
export async function* paginateListAddons(
  config: EKSPaginationConfiguration,
  input: ListAddonsCommandInput,
  ...additionalArguments: any
): Paginator<ListAddonsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAddonsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
