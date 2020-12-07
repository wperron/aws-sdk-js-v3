import { CodeCommit } from "../CodeCommit.ts";
import { CodeCommitClient } from "../CodeCommitClient.ts";
import {
  GetDifferencesCommand,
  GetDifferencesCommandInput,
  GetDifferencesCommandOutput,
} from "../commands/GetDifferencesCommand.ts";
import { CodeCommitPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeCommitClient,
  input: GetDifferencesCommandInput,
  ...args: any
): Promise<GetDifferencesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDifferencesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeCommit,
  input: GetDifferencesCommandInput,
  ...args: any
): Promise<GetDifferencesCommandOutput> => {
  // @ts-ignore
  return await client.getDifferences(input, ...args);
};
export async function* paginateGetDifferences(
  config: CodeCommitPaginationConfiguration,
  input: GetDifferencesCommandInput,
  ...additionalArguments: any
): Paginator<GetDifferencesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDifferencesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeCommit) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeCommitClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeCommit | CodeCommitClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
