import { PinpointEmail } from "../PinpointEmail.ts";
import { PinpointEmailClient } from "../PinpointEmailClient.ts";
import {
  GetDedicatedIpsCommand,
  GetDedicatedIpsCommandInput,
  GetDedicatedIpsCommandOutput,
} from "../commands/GetDedicatedIpsCommand.ts";
import { PinpointEmailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: GetDedicatedIpsCommandInput,
  ...args: any
): Promise<GetDedicatedIpsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDedicatedIpsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointEmail,
  input: GetDedicatedIpsCommandInput,
  ...args: any
): Promise<GetDedicatedIpsCommandOutput> => {
  // @ts-ignore
  return await client.getDedicatedIps(input, ...args);
};
export async function* paginateGetDedicatedIps(
  config: PinpointEmailPaginationConfiguration,
  input: GetDedicatedIpsCommandInput,
  ...additionalArguments: any
): Paginator<GetDedicatedIpsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDedicatedIpsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
