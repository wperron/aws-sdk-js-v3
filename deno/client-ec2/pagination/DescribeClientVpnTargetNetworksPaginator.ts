import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  DescribeClientVpnTargetNetworksCommand,
  DescribeClientVpnTargetNetworksCommandInput,
  DescribeClientVpnTargetNetworksCommandOutput,
} from "../commands/DescribeClientVpnTargetNetworksCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeClientVpnTargetNetworksCommandInput,
  ...args: any
): Promise<DescribeClientVpnTargetNetworksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClientVpnTargetNetworksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeClientVpnTargetNetworksCommandInput,
  ...args: any
): Promise<DescribeClientVpnTargetNetworksCommandOutput> => {
  // @ts-ignore
  return await client.describeClientVpnTargetNetworks(input, ...args);
};
export async function* paginateDescribeClientVpnTargetNetworks(
  config: EC2PaginationConfiguration,
  input: DescribeClientVpnTargetNetworksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClientVpnTargetNetworksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClientVpnTargetNetworksCommandOutput;
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
