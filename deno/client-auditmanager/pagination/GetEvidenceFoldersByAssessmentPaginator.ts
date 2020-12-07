import { AuditManager } from "../AuditManager.ts";
import { AuditManagerClient } from "../AuditManagerClient.ts";
import {
  GetEvidenceFoldersByAssessmentCommand,
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
} from "../commands/GetEvidenceFoldersByAssessmentCommand.ts";
import { AuditManagerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AuditManagerClient,
  input: GetEvidenceFoldersByAssessmentCommandInput,
  ...args: any
): Promise<GetEvidenceFoldersByAssessmentCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEvidenceFoldersByAssessmentCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AuditManager,
  input: GetEvidenceFoldersByAssessmentCommandInput,
  ...args: any
): Promise<GetEvidenceFoldersByAssessmentCommandOutput> => {
  // @ts-ignore
  return await client.getEvidenceFoldersByAssessment(input, ...args);
};
export async function* paginateGetEvidenceFoldersByAssessment(
  config: AuditManagerPaginationConfiguration,
  input: GetEvidenceFoldersByAssessmentCommandInput,
  ...additionalArguments: any
): Paginator<GetEvidenceFoldersByAssessmentCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetEvidenceFoldersByAssessmentCommandOutput;
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
