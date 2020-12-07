import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeNodeConfigurationOptionsCommand,
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
} from "../commands/DescribeNodeConfigurationOptionsCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeNodeConfigurationOptionsCommandInput,
  ...args: any
): Promise<DescribeNodeConfigurationOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeNodeConfigurationOptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeNodeConfigurationOptionsCommandInput,
  ...args: any
): Promise<DescribeNodeConfigurationOptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeNodeConfigurationOptions(input, ...args);
};
export async function* paginateDescribeNodeConfigurationOptions(
  config: RedshiftPaginationConfiguration,
  input: DescribeNodeConfigurationOptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeNodeConfigurationOptionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeNodeConfigurationOptionsCommandOutput;
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
