import { AuditManager } from "../AuditManager.ts";
import { AuditManagerClient } from "../AuditManagerClient.ts";
import {
  GetChangeLogsCommand,
  GetChangeLogsCommandInput,
  GetChangeLogsCommandOutput,
} from "../commands/GetChangeLogsCommand.ts";
import { AuditManagerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: GetChangeLogsCommandInput,
  ...args: any
): Promise<GetChangeLogsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetChangeLogsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: GetChangeLogsCommandInput,
  ...args: any
): Promise<GetChangeLogsCommandOutput> => {
  // @ts-ignore
  return await client.getChangeLogs(input, ...args);
};
export async function* paginateGetChangeLogs(
  config: AuditManagerPaginationConfiguration,
  input: GetChangeLogsCommandInput,
  ...additionalArguments: any
): Paginator<GetChangeLogsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetChangeLogsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AuditManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AuditManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AuditManager | AuditManagerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
