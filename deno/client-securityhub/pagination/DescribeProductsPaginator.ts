import { SecurityHub } from "../SecurityHub.ts";
import { SecurityHubClient } from "../SecurityHubClient.ts";
import {
  DescribeProductsCommand,
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput,
} from "../commands/DescribeProductsCommand.ts";
import { SecurityHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeProductsCommandInput,
  ...args: any
): Promise<DescribeProductsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeProductsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityHub,
  input: DescribeProductsCommandInput,
  ...args: any
): Promise<DescribeProductsCommandOutput> => {
  // @ts-ignore
  return await client.describeProducts(input, ...args);
};
export async function* paginateDescribeProducts(
  config: SecurityHubPaginationConfiguration,
  input: DescribeProductsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeProductsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeProductsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
