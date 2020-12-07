import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeClusterParametersCommand,
  DescribeClusterParametersCommandInput,
  DescribeClusterParametersCommandOutput,
} from "../commands/DescribeClusterParametersCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterParametersCommandInput,
  ...args: any
): Promise<DescribeClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterParametersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterParametersCommandInput,
  ...args: any
): Promise<DescribeClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterParameters(input, ...args);
};
export async function* paginateDescribeClusterParameters(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterParametersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterParametersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
