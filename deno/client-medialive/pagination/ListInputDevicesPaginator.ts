import { MediaLive } from "../MediaLive.ts";
import { MediaLiveClient } from "../MediaLiveClient.ts";
import {
  ListInputDevicesCommand,
  ListInputDevicesCommandInput,
  ListInputDevicesCommandOutput,
} from "../commands/ListInputDevicesCommand.ts";
import { MediaLivePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListInputDevicesCommandInput,
  ...args: any
): Promise<ListInputDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInputDevicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaLive,
  input: ListInputDevicesCommandInput,
  ...args: any
): Promise<ListInputDevicesCommandOutput> => {
  // @ts-ignore
  return await client.listInputDevices(input, ...args);
};
export async function* paginateListInputDevices(
  config: MediaLivePaginationConfiguration,
  input: ListInputDevicesCommandInput,
  ...additionalArguments: any
): Paginator<ListInputDevicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInputDevicesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaLive) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaLiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
