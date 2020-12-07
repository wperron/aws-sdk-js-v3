import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListModelBiasJobDefinitionsCommand,
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput,
} from "../commands/ListModelBiasJobDefinitionsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListModelBiasJobDefinitionsCommandInput,
  ...args: any
): Promise<ListModelBiasJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelBiasJobDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListModelBiasJobDefinitionsCommandInput,
  ...args: any
): Promise<ListModelBiasJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listModelBiasJobDefinitions(input, ...args);
};
export async function* paginateListModelBiasJobDefinitions(
  config: SageMakerPaginationConfiguration,
  input: ListModelBiasJobDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelBiasJobDefinitionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelBiasJobDefinitionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
