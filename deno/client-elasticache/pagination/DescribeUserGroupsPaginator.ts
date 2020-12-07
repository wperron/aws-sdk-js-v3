import { ElastiCache } from "../ElastiCache.ts";
import { ElastiCacheClient } from "../ElastiCacheClient.ts";
import {
  DescribeUserGroupsCommand,
  DescribeUserGroupsCommandInput,
  DescribeUserGroupsCommandOutput,
} from "../commands/DescribeUserGroupsCommand.ts";
import { ElastiCachePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElastiCacheClient,
  input: DescribeUserGroupsCommandInput,
  ...args: any
): Promise<DescribeUserGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUserGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElastiCache,
  input: DescribeUserGroupsCommandInput,
  ...args: any
): Promise<DescribeUserGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeUserGroups(input, ...args);
};
export async function* paginateDescribeUserGroups(
  config: ElastiCachePaginationConfiguration,
  input: DescribeUserGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUserGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeUserGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElastiCache) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElastiCacheClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElastiCache | ElastiCacheClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
