import { SNS } from "../SNS.ts";
import { SNSClient } from "../SNSClient.ts";
import {
  ListSubscriptionsByTopicCommand,
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
} from "../commands/ListSubscriptionsByTopicCommand.ts";
import { SNSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SNSClient,
  input: ListSubscriptionsByTopicCommandInput,
  ...args: any
): Promise<ListSubscriptionsByTopicCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscriptionsByTopicCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SNS,
  input: ListSubscriptionsByTopicCommandInput,
  ...args: any
): Promise<ListSubscriptionsByTopicCommandOutput> => {
  // @ts-ignore
  return await client.listSubscriptionsByTopic(input, ...args);
};
export async function* paginateListSubscriptionsByTopic(
  config: SNSPaginationConfiguration,
  input: ListSubscriptionsByTopicCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscriptionsByTopicCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubscriptionsByTopicCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
