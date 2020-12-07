import { CloudFormation } from "../CloudFormation.ts";
import { CloudFormationClient } from "../CloudFormationClient.ts";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand.ts";
import { CloudFormationPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListExportsCommandInput,
  ...args: any
): Promise<ListExportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExportsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudFormation,
  input: ListExportsCommandInput,
  ...args: any
): Promise<ListExportsCommandOutput> => {
  // @ts-ignore
  return await client.listExports(input, ...args);
};
export async function* paginateListExports(
  config: CloudFormationPaginationConfiguration,
  input: ListExportsCommandInput,
  ...additionalArguments: any
): Paginator<ListExportsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExportsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
