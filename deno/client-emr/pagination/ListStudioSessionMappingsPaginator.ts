import { EMR } from "../EMR.ts";
import { EMRClient } from "../EMRClient.ts";
import {
  ListStudioSessionMappingsCommand,
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "../commands/ListStudioSessionMappingsCommand.ts";
import { EMRPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListStudioSessionMappingsCommandInput,
  ...args: any
): Promise<ListStudioSessionMappingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStudioSessionMappingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMR,
  input: ListStudioSessionMappingsCommandInput,
  ...args: any
): Promise<ListStudioSessionMappingsCommandOutput> => {
  // @ts-ignore
  return await client.listStudioSessionMappings(input, ...args);
};
export async function* paginateListStudioSessionMappings(
  config: EMRPaginationConfiguration,
  input: ListStudioSessionMappingsCommandInput,
  ...additionalArguments: any
): Paginator<ListStudioSessionMappingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStudioSessionMappingsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
