import { Macie2 } from "../Macie2.ts";
import { Macie2Client } from "../Macie2Client.ts";
import {
  ListClassificationJobsCommand,
  ListClassificationJobsCommandInput,
  ListClassificationJobsCommandOutput,
} from "../commands/ListClassificationJobsCommand.ts";
import { Macie2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListClassificationJobsCommandInput,
  ...args: any
): Promise<ListClassificationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClassificationJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Macie2,
  input: ListClassificationJobsCommandInput,
  ...args: any
): Promise<ListClassificationJobsCommandOutput> => {
  // @ts-ignore
  return await client.listClassificationJobs(input, ...args);
};
export async function* paginateListClassificationJobs(
  config: Macie2PaginationConfiguration,
  input: ListClassificationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListClassificationJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClassificationJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
