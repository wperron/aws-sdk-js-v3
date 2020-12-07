import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeClusterDbRevisionsCommand,
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
} from "../commands/DescribeClusterDbRevisionsCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterDbRevisionsCommandInput,
  ...args: any
): Promise<DescribeClusterDbRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterDbRevisionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterDbRevisionsCommandInput,
  ...args: any
): Promise<DescribeClusterDbRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterDbRevisions(input, ...args);
};
export async function* paginateDescribeClusterDbRevisions(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterDbRevisionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterDbRevisionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterDbRevisionsCommandOutput;
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
