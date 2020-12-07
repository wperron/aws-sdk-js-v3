import { SSM } from "../SSM.ts";
import { SSMClient } from "../SSMClient.ts";
import {
  DescribePatchBaselinesCommand,
  DescribePatchBaselinesCommandInput,
  DescribePatchBaselinesCommandOutput,
} from "../commands/DescribePatchBaselinesCommand.ts";
import { SSMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribePatchBaselinesCommandInput,
  ...args: any
): Promise<DescribePatchBaselinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePatchBaselinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribePatchBaselinesCommandInput,
  ...args: any
): Promise<DescribePatchBaselinesCommandOutput> => {
  // @ts-ignore
  return await client.describePatchBaselines(input, ...args);
};
export async function* paginateDescribePatchBaselines(
  config: SSMPaginationConfiguration,
  input: DescribePatchBaselinesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePatchBaselinesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePatchBaselinesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
