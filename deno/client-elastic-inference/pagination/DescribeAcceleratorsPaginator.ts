import { ElasticInference } from "../ElasticInference.ts";
import { ElasticInferenceClient } from "../ElasticInferenceClient.ts";
import {
  DescribeAcceleratorsCommand,
  DescribeAcceleratorsCommandInput,
  DescribeAcceleratorsCommandOutput,
} from "../commands/DescribeAcceleratorsCommand.ts";
import { ElasticInferencePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticInferenceClient,
  input: DescribeAcceleratorsCommandInput,
  ...args: any
): Promise<DescribeAcceleratorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAcceleratorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticInference,
  input: DescribeAcceleratorsCommandInput,
  ...args: any
): Promise<DescribeAcceleratorsCommandOutput> => {
  // @ts-ignore
  return await client.describeAccelerators(input, ...args);
};
export async function* paginateDescribeAccelerators(
  config: ElasticInferencePaginationConfiguration,
  input: DescribeAcceleratorsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAcceleratorsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAcceleratorsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ElasticInference) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticInferenceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticInference | ElasticInferenceClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
