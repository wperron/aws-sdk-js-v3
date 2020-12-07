import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import {
  ListPipelineExecutionStepsCommand,
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
} from "../commands/ListPipelineExecutionStepsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListPipelineExecutionStepsCommandInput,
  ...args: any
): Promise<ListPipelineExecutionStepsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipelineExecutionStepsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListPipelineExecutionStepsCommandInput,
  ...args: any
): Promise<ListPipelineExecutionStepsCommandOutput> => {
  // @ts-ignore
  return await client.listPipelineExecutionSteps(input, ...args);
};
export async function* paginateListPipelineExecutionSteps(
  config: SageMakerPaginationConfiguration,
  input: ListPipelineExecutionStepsCommandInput,
  ...additionalArguments: any
): Paginator<ListPipelineExecutionStepsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPipelineExecutionStepsCommandOutput;
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
