import { EKS } from "../EKS.ts";
import { EKSClient } from "../EKSClient.ts";
import {
  DescribeAddonVersionsCommand,
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "../commands/DescribeAddonVersionsCommand.ts";
import { EKSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: DescribeAddonVersionsCommandInput,
  ...args: any
): Promise<DescribeAddonVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAddonVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EKS,
  input: DescribeAddonVersionsCommandInput,
  ...args: any
): Promise<DescribeAddonVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeAddonVersions(input, ...args);
};
export async function* paginateDescribeAddonVersions(
  config: EKSPaginationConfiguration,
  input: DescribeAddonVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAddonVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAddonVersionsCommandOutput;
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
