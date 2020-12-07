import { WorkDocs } from "../WorkDocs.ts";
import { WorkDocsClient } from "../WorkDocsClient.ts";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "../commands/DescribeUsersCommand.ts";
import { WorkDocsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeUsersCommandInput,
  ...args: any
): Promise<DescribeUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUsersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: WorkDocs,
  input: DescribeUsersCommandInput,
  ...args: any
): Promise<DescribeUsersCommandOutput> => {
  // @ts-ignore
  return await client.describeUsers(input, ...args);
};
export async function* paginateDescribeUsers(
  config: WorkDocsPaginationConfiguration,
  input: DescribeUsersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUsersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeUsersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkDocsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
