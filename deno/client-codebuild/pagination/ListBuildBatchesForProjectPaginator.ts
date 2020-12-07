import { CodeBuild } from "../CodeBuild.ts";
import { CodeBuildClient } from "../CodeBuildClient.ts";
import {
  ListBuildBatchesForProjectCommand,
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
} from "../commands/ListBuildBatchesForProjectCommand.ts";
import { CodeBuildPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildBatchesForProjectCommandInput,
  ...args: any
): Promise<ListBuildBatchesForProjectCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildBatchesForProjectCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeBuild,
  input: ListBuildBatchesForProjectCommandInput,
  ...args: any
): Promise<ListBuildBatchesForProjectCommandOutput> => {
  // @ts-ignore
  return await client.listBuildBatchesForProject(input, ...args);
};
export async function* paginateListBuildBatchesForProject(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildBatchesForProjectCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildBatchesForProjectCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuildBatchesForProjectCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
