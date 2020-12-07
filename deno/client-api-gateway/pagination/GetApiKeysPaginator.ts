import { APIGateway } from "../APIGateway.ts";
import { APIGatewayClient } from "../APIGatewayClient.ts";
import { GetApiKeysCommand, GetApiKeysCommandInput, GetApiKeysCommandOutput } from "../commands/GetApiKeysCommand.ts";
import { APIGatewayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetApiKeysCommandInput,
  ...args: any
): Promise<GetApiKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetApiKeysCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: APIGateway,
  input: GetApiKeysCommandInput,
  ...args: any
): Promise<GetApiKeysCommandOutput> => {
  // @ts-ignore
  return await client.getApiKeys(input, ...args);
};
export async function* paginateGetApiKeys(
  config: APIGatewayPaginationConfiguration,
  input: GetApiKeysCommandInput,
  ...additionalArguments: any
): Paginator<GetApiKeysCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetApiKeysCommandOutput;
  while (hasNext) {
    input.position = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof APIGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof APIGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected APIGateway | APIGatewayClient");
    }
    yield page;
    token = page.position;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
