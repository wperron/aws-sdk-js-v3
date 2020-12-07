import { Backup } from "../Backup.ts";
import { BackupClient } from "../BackupClient.ts";
import {
  ListRestoreJobsCommand,
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput,
} from "../commands/ListRestoreJobsCommand.ts";
import { BackupPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListRestoreJobsCommandInput,
  ...args: any
): Promise<ListRestoreJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRestoreJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListRestoreJobsCommandInput,
  ...args: any
): Promise<ListRestoreJobsCommandOutput> => {
  // @ts-ignore
  return await client.listRestoreJobs(input, ...args);
};
export async function* paginateListRestoreJobs(
  config: BackupPaginationConfiguration,
  input: ListRestoreJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListRestoreJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRestoreJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
