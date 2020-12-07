import { EC2 } from "../EC2.ts";
import { EC2Client } from "../EC2Client.ts";
import {
  GetTransitGatewayMulticastDomainAssociationsCommand,
  GetTransitGatewayMulticastDomainAssociationsCommandInput,
  GetTransitGatewayMulticastDomainAssociationsCommandOutput,
} from "../commands/GetTransitGatewayMulticastDomainAssociationsCommand.ts";
import { EC2PaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: GetTransitGatewayMulticastDomainAssociationsCommandInput,
  ...args: any
): Promise<GetTransitGatewayMulticastDomainAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTransitGatewayMulticastDomainAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: GetTransitGatewayMulticastDomainAssociationsCommandInput,
  ...args: any
): Promise<GetTransitGatewayMulticastDomainAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.getTransitGatewayMulticastDomainAssociations(input, ...args);
};
export async function* paginateGetTransitGatewayMulticastDomainAssociations(
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayMulticastDomainAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetTransitGatewayMulticastDomainAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTransitGatewayMulticastDomainAssociationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
