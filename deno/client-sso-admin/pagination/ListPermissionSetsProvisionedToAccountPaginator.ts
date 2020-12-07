import { SSOAdmin } from "../SSOAdmin.ts";
import { SSOAdminClient } from "../SSOAdminClient.ts";
import {
  ListPermissionSetsProvisionedToAccountCommand,
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "../commands/ListPermissionSetsProvisionedToAccountCommand.ts";
import { SSOAdminPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  ...args: any
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionSetsProvisionedToAccountCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  ...args: any
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  // @ts-ignore
  return await client.listPermissionSetsProvisionedToAccount(input, ...args);
};
export async function* paginateListPermissionSetsProvisionedToAccount(
  config: SSOAdminPaginationConfiguration,
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionSetsProvisionedToAccountCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionSetsProvisionedToAccountCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSOAdmin) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSOAdminClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSOAdmin | SSOAdminClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
