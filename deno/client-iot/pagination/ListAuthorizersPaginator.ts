import { IoT } from "../IoT.ts";
import { IoTClient } from "../IoTClient.ts";
import {
  ListAuthorizersCommand,
  ListAuthorizersCommandInput,
  ListAuthorizersCommandOutput,
} from "../commands/ListAuthorizersCommand.ts";
import { IoTPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuthorizersCommandInput,
  ...args: any
): Promise<ListAuthorizersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuthorizersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListAuthorizersCommandInput,
  ...args: any
): Promise<ListAuthorizersCommandOutput> => {
  // @ts-ignore
  return await client.listAuthorizers(input, ...args);
};
export async function* paginateListAuthorizers(
  config: IoTPaginationConfiguration,
  input: ListAuthorizersCommandInput,
  ...additionalArguments: any
): Paginator<ListAuthorizersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuthorizersCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
