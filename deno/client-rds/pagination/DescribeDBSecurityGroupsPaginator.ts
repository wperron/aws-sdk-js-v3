import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBSecurityGroupsCommand,
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
} from "../commands/DescribeDBSecurityGroupsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeDBSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBSecurityGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBSecurityGroupsCommandInput,
  ...args: any
): Promise<DescribeDBSecurityGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBSecurityGroups(input, ...args);
};
export async function* paginateDescribeDBSecurityGroups(
  config: RDSPaginationConfiguration,
  input: DescribeDBSecurityGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBSecurityGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBSecurityGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
