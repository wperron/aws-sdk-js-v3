import { SSOAdmin } from "../SSOAdmin.ts";
import { SSOAdminClient } from "../SSOAdminClient.ts";
import {
  ListPermissionSetProvisioningStatusCommand,
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
} from "../commands/ListPermissionSetProvisioningStatusCommand.ts";
import { SSOAdminPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSOAdminClient,
  input: ListPermissionSetProvisioningStatusCommandInput,
  ...args: any
): Promise<ListPermissionSetProvisioningStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPermissionSetProvisioningStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSOAdmin,
  input: ListPermissionSetProvisioningStatusCommandInput,
  ...args: any
): Promise<ListPermissionSetProvisioningStatusCommandOutput> => {
  // @ts-ignore
  return await client.listPermissionSetProvisioningStatus(input, ...args);
};
export async function* paginateListPermissionSetProvisioningStatus(
  config: SSOAdminPaginationConfiguration,
  input: ListPermissionSetProvisioningStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListPermissionSetProvisioningStatusCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPermissionSetProvisioningStatusCommandOutput;
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
