import { AuditManager } from "../AuditManager.ts";
import { AuditManagerClient } from "../AuditManagerClient.ts";
import {
  ListControlsCommand,
  ListControlsCommandInput,
  ListControlsCommandOutput,
} from "../commands/ListControlsCommand.ts";
import { AuditManagerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: ListControlsCommandInput,
  ...args: any
): Promise<ListControlsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListControlsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: ListControlsCommandInput,
  ...args: any
): Promise<ListControlsCommandOutput> => {
  // @ts-ignore
  return await client.listControls(input, ...args);
};
export async function* paginateListControls(
  config: AuditManagerPaginationConfiguration,
  input: ListControlsCommandInput,
  ...additionalArguments: any
): Paginator<ListControlsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListControlsCommandOutput;
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
