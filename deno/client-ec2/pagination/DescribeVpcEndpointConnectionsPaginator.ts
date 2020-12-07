import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  DescribeVpcEndpointConnectionsCommand,
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
} from "../commands/DescribeVpcEndpointConnectionsCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeVpcEndpointConnectionsCommandInput,
  ...args: any
): Promise<DescribeVpcEndpointConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeVpcEndpointConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeVpcEndpointConnectionsCommandInput,
  ...args: any
): Promise<DescribeVpcEndpointConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.describeVpcEndpointConnections(input, ...args);
};
export async function* paginateDescribeVpcEndpointConnections(
  config: EC2PaginationConfiguration,
  input: DescribeVpcEndpointConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeVpcEndpointConnectionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeVpcEndpointConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
