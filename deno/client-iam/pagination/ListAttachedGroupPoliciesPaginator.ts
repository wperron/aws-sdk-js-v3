import { IAM } from "../IAM.ts";
import { IAMClient } from "../IAMClient.ts";
import {
  ListAttachedGroupPoliciesCommand,
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "../commands/ListAttachedGroupPoliciesCommand.ts";
import { IAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListAttachedGroupPoliciesCommandInput,
  ...args: any
): Promise<ListAttachedGroupPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttachedGroupPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListAttachedGroupPoliciesCommandInput,
  ...args: any
): Promise<ListAttachedGroupPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listAttachedGroupPolicies(input, ...args);
};
export async function* paginateListAttachedGroupPolicies(
  config: IAMPaginationConfiguration,
  input: ListAttachedGroupPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttachedGroupPoliciesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttachedGroupPoliciesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
