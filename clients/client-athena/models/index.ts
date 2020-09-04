import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface BatchGetNamedQueryInput {
  __type?: "BatchGetNamedQueryInput";
  /**
   * <p>An array of query IDs.</p>
   */
  NamedQueryIds: string[] | undefined;
}

export namespace BatchGetNamedQueryInput {
  export const filterSensitiveLog = (obj: BatchGetNamedQueryInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetNamedQueryInput => __isa(o, "BatchGetNamedQueryInput");
}

export interface BatchGetNamedQueryOutput {
  __type?: "BatchGetNamedQueryOutput";
  /**
   * <p>Information about the named query IDs submitted.</p>
   */
  NamedQueries?: NamedQuery[];

  /**
   * <p>Information about provided query IDs.</p>
   */
  UnprocessedNamedQueryIds?: UnprocessedNamedQueryId[];
}

export namespace BatchGetNamedQueryOutput {
  export const filterSensitiveLog = (obj: BatchGetNamedQueryOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetNamedQueryOutput => __isa(o, "BatchGetNamedQueryOutput");
}

export interface BatchGetQueryExecutionInput {
  __type?: "BatchGetQueryExecutionInput";
  /**
   * <p>An array of query execution IDs.</p>
   */
  QueryExecutionIds: string[] | undefined;
}

export namespace BatchGetQueryExecutionInput {
  export const filterSensitiveLog = (obj: BatchGetQueryExecutionInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetQueryExecutionInput => __isa(o, "BatchGetQueryExecutionInput");
}

export interface BatchGetQueryExecutionOutput {
  __type?: "BatchGetQueryExecutionOutput";
  /**
   * <p>Information about the query executions that failed to run.</p>
   */
  UnprocessedQueryExecutionIds?: UnprocessedQueryExecutionId[];

  /**
   * <p>Information about a query execution.</p>
   */
  QueryExecutions?: QueryExecution[];
}

export namespace BatchGetQueryExecutionOutput {
  export const filterSensitiveLog = (obj: BatchGetQueryExecutionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetQueryExecutionOutput => __isa(o, "BatchGetQueryExecutionOutput");
}

/**
 * <p>Contains metadata for a column in a table.</p>
 */
export interface Column {
  __type?: "Column";
  /**
   * <p>Optional information about the column.</p>
   */
  Comment?: string;

  /**
   * <p>The data type of the column.</p>
   */
  Type?: string;

  /**
   * <p>The name of the column.</p>
   */
  Name: string | undefined;
}

export namespace Column {
  export const filterSensitiveLog = (obj: Column): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Column => __isa(o, "Column");
}

/**
 * <p>Information about the columns in a query execution result.</p>
 */
export interface ColumnInfo {
  __type?: "ColumnInfo";
  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits in the
   *             fractional part of the value. Defaults to 0.</p>
   */
  Scale?: number;

  /**
   * <p>The table name for the query results.</p>
   */
  TableName?: string;

  /**
   * <p>Indicates whether values in the column are case-sensitive.</p>
   */
  CaseSensitive?: boolean;

  /**
   * <p>The catalog to which the query results belong.</p>
   */
  CatalogName?: string;

  /**
   * <p>The name of the column.</p>
   */
  Name: string | undefined;

  /**
   * <p>The data type of the column.</p>
   */
  Type: string | undefined;

  /**
   * <p>Indicates the column's nullable status.</p>
   */
  Nullable?: ColumnNullable | string;

  /**
   * <p>A column label.</p>
   */
  Label?: string;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits, up to 38.
   *             For performance reasons, we recommend up to 18 digits.</p>
   */
  Precision?: number;

  /**
   * <p>The schema name (database name) to which the query results belong.</p>
   */
  SchemaName?: string;
}

export namespace ColumnInfo {
  export const filterSensitiveLog = (obj: ColumnInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ColumnInfo => __isa(o, "ColumnInfo");
}

export enum ColumnNullable {
  NOT_NULL = "NOT_NULL",
  NULLABLE = "NULLABLE",
  UNKNOWN = "UNKNOWN",
}

export interface CreateDataCatalogInput {
  __type?: "CreateDataCatalogInput";
  /**
   * <p>The name of the data catalog to create. The catalog name must be unique for the AWS
   *             account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen
   *             characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of data catalog to create: <code>LAMBDA</code> for a federated catalog,
   *                 <code>GLUE</code> for AWS Glue Catalog, or <code>HIVE</code> for an external hive
   *             metastore.</p>
   */
  Type: DataCatalogType | string | undefined;

  /**
   * <p>Specifies the Lambda function or functions to use for creating the data catalog. This
   *             is a mapping whose values depend on the catalog type. </p>
   *         <ul>
   *             <li>
   *                 <p>For the <code>HIVE</code> data catalog type, use the following syntax. The
   *                         <code>metadata-function</code> parameter is required. <code>The
   *                         sdk-version</code> parameter is optional and defaults to the currently
   *                     supported version.</p>
   *                 <p>
   *                   <code>metadata-function=<i>lambda_arn</i>,
   *                             sdk-version=<i>version_number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets
   *                     of required parameters, but not both.</p>
   *                 <ul>
   *                   <li>
   *                         <p>If you have one Lambda function that processes metadata and another
   *                             for reading the actual data, use the following syntax. Both parameters
   *                             are required.</p>
   *                         <p>
   *                         <code>metadata-function=<i>lambda_arn</i>,
   *                                     record-function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p> If you have a composite Lambda function that processes both metadata
   *                             and data, use the following syntax to specify your Lambda
   *                             function.</p>
   *                         <p>
   *                         <code>function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>The <code>GLUE</code> type has no parameters.</p>
   *             </li>
   *          </ul>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>A list of comma separated tags to add to the data catalog that is created.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A description of the data catalog to be created.</p>
   */
  Description?: string;
}

export namespace CreateDataCatalogInput {
  export const filterSensitiveLog = (obj: CreateDataCatalogInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDataCatalogInput => __isa(o, "CreateDataCatalogInput");
}

export interface CreateDataCatalogOutput {
  __type?: "CreateDataCatalogOutput";
}

export namespace CreateDataCatalogOutput {
  export const filterSensitiveLog = (obj: CreateDataCatalogOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDataCatalogOutput => __isa(o, "CreateDataCatalogOutput");
}

export interface CreateNamedQueryInput {
  __type?: "CreateNamedQueryInput";
  /**
   * <p>The name of the workgroup in which the named query is being created.</p>
   */
  WorkGroup?: string;

  /**
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * <p>A unique case-sensitive string used to ensure the request to create the query is
   *             idempotent (executes only once). If another <code>CreateNamedQuery</code> request is
   *             received, the same response is returned and another query is not created. If a parameter
   *             has changed, for example, the <code>QueryString</code>, an error is returned.</p>
   *         <important>
   *             <p>This token is listed as not required because AWS SDKs (for example the AWS SDK for
   *                 Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS
   *                 CLI, you must provide this token or the action will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>The contents of the query with all query statements.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The database to which the query belongs.</p>
   */
  Database: string | undefined;

  /**
   * <p>The query name.</p>
   */
  Name: string | undefined;
}

export namespace CreateNamedQueryInput {
  export const filterSensitiveLog = (obj: CreateNamedQueryInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateNamedQueryInput => __isa(o, "CreateNamedQueryInput");
}

export interface CreateNamedQueryOutput {
  __type?: "CreateNamedQueryOutput";
  /**
   * <p>The unique ID of the query.</p>
   */
  NamedQueryId?: string;
}

export namespace CreateNamedQueryOutput {
  export const filterSensitiveLog = (obj: CreateNamedQueryOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateNamedQueryOutput => __isa(o, "CreateNamedQueryOutput");
}

export interface CreateWorkGroupInput {
  __type?: "CreateWorkGroupInput";
  /**
   * <p>A list of comma separated tags to add to the workgroup that is created.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The configuration for the workgroup, which includes the location in Amazon S3 where
   *             query results are stored, the encryption configuration, if any, used for encrypting
   *             query results, whether the Amazon CloudWatch Metrics are enabled for the workgroup, the
   *             limit for the amount of bytes scanned (cutoff) per query, if it is specified, and
   *             whether workgroup's settings (specified with EnforceWorkGroupConfiguration) in the
   *             WorkGroupConfiguration override client-side settings. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: WorkGroupConfiguration;

  /**
   * <p>The workgroup name.</p>
   */
  Name: string | undefined;
}

export namespace CreateWorkGroupInput {
  export const filterSensitiveLog = (obj: CreateWorkGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateWorkGroupInput => __isa(o, "CreateWorkGroupInput");
}

export interface CreateWorkGroupOutput {
  __type?: "CreateWorkGroupOutput";
}

export namespace CreateWorkGroupOutput {
  export const filterSensitiveLog = (obj: CreateWorkGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateWorkGroupOutput => __isa(o, "CreateWorkGroupOutput");
}

/**
 * <p>Contains metadata information for a database in a data catalog.</p>
 */
export interface Database {
  __type?: "Database";
  /**
   * <p>A set of custom key/value pairs.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The name of the database.</p>
   */
  Name: string | undefined;

  /**
   * <p>An optional description of the database.</p>
   */
  Description?: string;
}

export namespace Database {
  export const filterSensitiveLog = (obj: Database): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Database => __isa(o, "Database");
}

/**
 * <p>Contains information about a data catalog in an AWS account.</p>
 */
export interface DataCatalog {
  __type?: "DataCatalog";
  /**
   * <p>An optional description of the data catalog.</p>
   */
  Description?: string;

  /**
   * <p>The name of the data catalog. The catalog name must be unique for the AWS account and
   *             can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of data catalog: <code>LAMBDA</code> for a federated catalog,
   *                 <code>GLUE</code> for AWS Glue Catalog, or <code>HIVE</code> for an external hive
   *             metastore.</p>
   */
  Type: DataCatalogType | string | undefined;

  /**
   * <p>Specifies the Lambda function or functions to use for the data catalog. This is a
   *             mapping whose values depend on the catalog type. </p>
   *         <ul>
   *             <li>
   *                 <p>For the <code>HIVE</code> data catalog type, use the following syntax. The
   *                         <code>metadata-function</code> parameter is required. <code>The
   *                         sdk-version</code> parameter is optional and defaults to the currently
   *                     supported version.</p>
   *                 <p>
   *                   <code>metadata-function=<i>lambda_arn</i>,
   *                             sdk-version=<i>version_number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets
   *                     of required parameters, but not both.</p>
   *                 <ul>
   *                   <li>
   *                         <p>If you have one Lambda function that processes metadata and another
   *                             for reading the actual data, use the following syntax. Both parameters
   *                             are required.</p>
   *                         <p>
   *                         <code>metadata-function=<i>lambda_arn</i>,
   *                                     record-function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p> If you have a composite Lambda function that processes both metadata
   *                             and data, use the following syntax to specify your Lambda
   *                             function.</p>
   *                         <p>
   *                         <code>function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>The <code>GLUE</code> type has no parameters.</p>
   *             </li>
   *          </ul>
   */
  Parameters?: { [key: string]: string };
}

export namespace DataCatalog {
  export const filterSensitiveLog = (obj: DataCatalog): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataCatalog => __isa(o, "DataCatalog");
}

/**
 * <p>The summary information for the data catalog, which includes its name and type.</p>
 */
export interface DataCatalogSummary {
  __type?: "DataCatalogSummary";
  /**
   * <p>The name of the data catalog.</p>
   */
  CatalogName?: string;

  /**
   * <p>The data catalog type.</p>
   */
  Type?: DataCatalogType | string;
}

export namespace DataCatalogSummary {
  export const filterSensitiveLog = (obj: DataCatalogSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DataCatalogSummary => __isa(o, "DataCatalogSummary");
}

export enum DataCatalogType {
  GLUE = "GLUE",
  HIVE = "HIVE",
  LAMBDA = "LAMBDA",
}

/**
 * <p>A piece of data (a field in the table).</p>
 */
export interface Datum {
  __type?: "Datum";
  /**
   * <p>The value of the datum.</p>
   */
  VarCharValue?: string;
}

export namespace Datum {
  export const filterSensitiveLog = (obj: Datum): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Datum => __isa(o, "Datum");
}

export interface DeleteDataCatalogInput {
  __type?: "DeleteDataCatalogInput";
  /**
   * <p>The name of the data catalog to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteDataCatalogInput {
  export const filterSensitiveLog = (obj: DeleteDataCatalogInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDataCatalogInput => __isa(o, "DeleteDataCatalogInput");
}

export interface DeleteDataCatalogOutput {
  __type?: "DeleteDataCatalogOutput";
}

export namespace DeleteDataCatalogOutput {
  export const filterSensitiveLog = (obj: DeleteDataCatalogOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDataCatalogOutput => __isa(o, "DeleteDataCatalogOutput");
}

export interface DeleteNamedQueryInput {
  __type?: "DeleteNamedQueryInput";
  /**
   * <p>The unique ID of the query to delete.</p>
   */
  NamedQueryId?: string;
}

export namespace DeleteNamedQueryInput {
  export const filterSensitiveLog = (obj: DeleteNamedQueryInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteNamedQueryInput => __isa(o, "DeleteNamedQueryInput");
}

export interface DeleteNamedQueryOutput {
  __type?: "DeleteNamedQueryOutput";
}

export namespace DeleteNamedQueryOutput {
  export const filterSensitiveLog = (obj: DeleteNamedQueryOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteNamedQueryOutput => __isa(o, "DeleteNamedQueryOutput");
}

export interface DeleteWorkGroupInput {
  __type?: "DeleteWorkGroupInput";
  /**
   * <p>The option to delete the workgroup and its contents even if the workgroup contains any
   *             named queries.</p>
   */
  RecursiveDeleteOption?: boolean;

  /**
   * <p>The unique name of the workgroup to delete.</p>
   */
  WorkGroup: string | undefined;
}

export namespace DeleteWorkGroupInput {
  export const filterSensitiveLog = (obj: DeleteWorkGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteWorkGroupInput => __isa(o, "DeleteWorkGroupInput");
}

export interface DeleteWorkGroupOutput {
  __type?: "DeleteWorkGroupOutput";
}

export namespace DeleteWorkGroupOutput {
  export const filterSensitiveLog = (obj: DeleteWorkGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteWorkGroupOutput => __isa(o, "DeleteWorkGroupOutput");
}

/**
 * <p>If query results are encrypted in Amazon S3, indicates the encryption option used (for
 *             example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.</p>
 */
export interface EncryptionConfiguration {
  __type?: "EncryptionConfiguration";
  /**
   * <p>Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys
   *                 (<code>SSE-S3</code>), server-side encryption with KMS-managed keys
   *                 (<code>SSE-KMS</code>), or client-side encryption with KMS-managed keys (CSE-KMS) is
   *             used.</p>
   *         <p>If a query runs in a workgroup and the workgroup overrides client-side settings, then
   *             the workgroup's setting for encryption is used. It specifies whether query results must
   *             be encrypted, for all queries that run in this workgroup. </p>
   */
  EncryptionOption: EncryptionOption | string | undefined;

  /**
   * <p>For <code>SSE-KMS</code> and <code>CSE-KMS</code>, this is the KMS key ARN or
   *             ID.</p>
   */
  KmsKey?: string;
}

export namespace EncryptionConfiguration {
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EncryptionConfiguration => __isa(o, "EncryptionConfiguration");
}

export enum EncryptionOption {
  CSE_KMS = "CSE_KMS",
  SSE_KMS = "SSE_KMS",
  SSE_S3 = "SSE_S3",
}

export interface GetDatabaseInput {
  __type?: "GetDatabaseInput";
  /**
   * <p>The name of the database to return.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the data catalog that contains the database to return.</p>
   */
  CatalogName: string | undefined;
}

export namespace GetDatabaseInput {
  export const filterSensitiveLog = (obj: GetDatabaseInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDatabaseInput => __isa(o, "GetDatabaseInput");
}

export interface GetDatabaseOutput {
  __type?: "GetDatabaseOutput";
  /**
   * <p>The database returned.</p>
   */
  Database?: Database;
}

export namespace GetDatabaseOutput {
  export const filterSensitiveLog = (obj: GetDatabaseOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDatabaseOutput => __isa(o, "GetDatabaseOutput");
}

export interface GetDataCatalogInput {
  __type?: "GetDataCatalogInput";
  /**
   * <p>The name of the data catalog to return.</p>
   */
  Name: string | undefined;
}

export namespace GetDataCatalogInput {
  export const filterSensitiveLog = (obj: GetDataCatalogInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDataCatalogInput => __isa(o, "GetDataCatalogInput");
}

export interface GetDataCatalogOutput {
  __type?: "GetDataCatalogOutput";
  /**
   * <p>The data catalog returned.</p>
   */
  DataCatalog?: DataCatalog;
}

export namespace GetDataCatalogOutput {
  export const filterSensitiveLog = (obj: GetDataCatalogOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDataCatalogOutput => __isa(o, "GetDataCatalogOutput");
}

export interface GetNamedQueryInput {
  __type?: "GetNamedQueryInput";
  /**
   * <p>The unique ID of the query. Use <a>ListNamedQueries</a> to get query
   *             IDs.</p>
   */
  NamedQueryId: string | undefined;
}

export namespace GetNamedQueryInput {
  export const filterSensitiveLog = (obj: GetNamedQueryInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetNamedQueryInput => __isa(o, "GetNamedQueryInput");
}

export interface GetNamedQueryOutput {
  __type?: "GetNamedQueryOutput";
  /**
   * <p>Information about the query.</p>
   */
  NamedQuery?: NamedQuery;
}

export namespace GetNamedQueryOutput {
  export const filterSensitiveLog = (obj: GetNamedQueryOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetNamedQueryOutput => __isa(o, "GetNamedQueryOutput");
}

export interface GetQueryExecutionInput {
  __type?: "GetQueryExecutionInput";
  /**
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;
}

export namespace GetQueryExecutionInput {
  export const filterSensitiveLog = (obj: GetQueryExecutionInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetQueryExecutionInput => __isa(o, "GetQueryExecutionInput");
}

export interface GetQueryExecutionOutput {
  __type?: "GetQueryExecutionOutput";
  /**
   * <p>Information about the query execution.</p>
   */
  QueryExecution?: QueryExecution;
}

export namespace GetQueryExecutionOutput {
  export const filterSensitiveLog = (obj: GetQueryExecutionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetQueryExecutionOutput => __isa(o, "GetQueryExecutionOutput");
}

export interface GetQueryResultsInput {
  __type?: "GetQueryResultsInput";
  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the
   *                 <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The unique ID of the query execution.</p>
   */
  QueryExecutionId: string | undefined;

  /**
   * <p>The maximum number of results (rows) to return in this request.</p>
   */
  MaxResults?: number;
}

export namespace GetQueryResultsInput {
  export const filterSensitiveLog = (obj: GetQueryResultsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetQueryResultsInput => __isa(o, "GetQueryResultsInput");
}

export interface GetQueryResultsOutput {
  __type?: "GetQueryResultsOutput";
  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the
   *                 <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The results of the query execution.</p>
   */
  ResultSet?: ResultSet;

  /**
   * <p>The number of rows inserted with a CREATE TABLE AS SELECT statement. </p>
   */
  UpdateCount?: number;
}

export namespace GetQueryResultsOutput {
  export const filterSensitiveLog = (obj: GetQueryResultsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetQueryResultsOutput => __isa(o, "GetQueryResultsOutput");
}

export interface GetTableMetadataInput {
  __type?: "GetTableMetadataInput";
  /**
   * <p>The name of the data catalog that contains the database and table metadata to
   *             return.</p>
   */
  CatalogName: string | undefined;

  /**
   * <p>The name of the table for which metadata is returned.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the database that contains the table metadata to return.</p>
   */
  DatabaseName: string | undefined;
}

export namespace GetTableMetadataInput {
  export const filterSensitiveLog = (obj: GetTableMetadataInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTableMetadataInput => __isa(o, "GetTableMetadataInput");
}

export interface GetTableMetadataOutput {
  __type?: "GetTableMetadataOutput";
  /**
   * <p>An object that contains table metadata.</p>
   */
  TableMetadata?: TableMetadata;
}

export namespace GetTableMetadataOutput {
  export const filterSensitiveLog = (obj: GetTableMetadataOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetTableMetadataOutput => __isa(o, "GetTableMetadataOutput");
}

export interface GetWorkGroupInput {
  __type?: "GetWorkGroupInput";
  /**
   * <p>The name of the workgroup.</p>
   */
  WorkGroup: string | undefined;
}

export namespace GetWorkGroupInput {
  export const filterSensitiveLog = (obj: GetWorkGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetWorkGroupInput => __isa(o, "GetWorkGroupInput");
}

export interface GetWorkGroupOutput {
  __type?: "GetWorkGroupOutput";
  /**
   * <p>Information about the workgroup.</p>
   */
  WorkGroup?: WorkGroup;
}

export namespace GetWorkGroupOutput {
  export const filterSensitiveLog = (obj: GetWorkGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetWorkGroupOutput => __isa(o, "GetWorkGroupOutput");
}

/**
 * <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The error code returned when the query execution failed to process, or when the
   *             processing request for the named query failed.</p>
   */
  AthenaErrorCode?: string;

  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidRequestException => __isa(o, "InvalidRequestException");
}

export interface ListDatabasesInput {
  __type?: "ListDatabasesInput";
  /**
   * <p>The name of the data catalog that contains the databases to return.</p>
   */
  CatalogName: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the
   *                 <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace ListDatabasesInput {
  export const filterSensitiveLog = (obj: ListDatabasesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDatabasesInput => __isa(o, "ListDatabasesInput");
}

export interface ListDatabasesOutput {
  __type?: "ListDatabasesOutput";
  /**
   * <p>A list of databases from a data catalog.</p>
   */
  DatabaseList?: Database[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the NextToken
   *             from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export namespace ListDatabasesOutput {
  export const filterSensitiveLog = (obj: ListDatabasesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDatabasesOutput => __isa(o, "ListDatabasesOutput");
}

export interface ListDataCatalogsInput {
  __type?: "ListDataCatalogsInput";
  /**
   * <p>Specifies the maximum number of data catalogs to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the NextToken
   *             from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export namespace ListDataCatalogsInput {
  export const filterSensitiveLog = (obj: ListDataCatalogsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDataCatalogsInput => __isa(o, "ListDataCatalogsInput");
}

export interface ListDataCatalogsOutput {
  __type?: "ListDataCatalogsOutput";
  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the NextToken
   *             from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>A summary list of data catalogs.</p>
   */
  DataCatalogsSummary?: DataCatalogSummary[];
}

export namespace ListDataCatalogsOutput {
  export const filterSensitiveLog = (obj: ListDataCatalogsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDataCatalogsOutput => __isa(o, "ListDataCatalogsOutput");
}

export interface ListNamedQueriesInput {
  __type?: "ListNamedQueriesInput";
  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the
   *                 <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of queries to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the workgroup from which the named queries are being returned. If a
   *             workgroup is not specified, the saved queries for the primary workgroup are
   *             returned.</p>
   */
  WorkGroup?: string;
}

export namespace ListNamedQueriesInput {
  export const filterSensitiveLog = (obj: ListNamedQueriesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListNamedQueriesInput => __isa(o, "ListNamedQueriesInput");
}

export interface ListNamedQueriesOutput {
  __type?: "ListNamedQueriesOutput";
  /**
   * <p>The list of unique query IDs.</p>
   */
  NamedQueryIds?: string[];

  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the
   *                 <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

export namespace ListNamedQueriesOutput {
  export const filterSensitiveLog = (obj: ListNamedQueriesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListNamedQueriesOutput => __isa(o, "ListNamedQueriesOutput");
}

export interface ListQueryExecutionsInput {
  __type?: "ListQueryExecutionsInput";
  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the
   *                 <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the workgroup from which queries are being returned. If a workgroup is not
   *             specified, a list of available query execution IDs for the queries in the primary
   *             workgroup is returned.</p>
   */
  WorkGroup?: string;

  /**
   * <p>The maximum number of query executions to return in this request.</p>
   */
  MaxResults?: number;
}

export namespace ListQueryExecutionsInput {
  export const filterSensitiveLog = (obj: ListQueryExecutionsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListQueryExecutionsInput => __isa(o, "ListQueryExecutionsInput");
}

export interface ListQueryExecutionsOutput {
  __type?: "ListQueryExecutionsOutput";
  /**
   * <p>The unique IDs of each query execution as an array of strings.</p>
   */
  QueryExecutionIds?: string[];

  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;
}

export namespace ListQueryExecutionsOutput {
  export const filterSensitiveLog = (obj: ListQueryExecutionsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListQueryExecutionsOutput => __isa(o, "ListQueryExecutionsOutput");
}

export interface ListTableMetadataInput {
  __type?: "ListTableMetadataInput";
  /**
   * <p>The name of the database for which table metadata should be returned.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the NextToken
   *             from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A regex filter that pattern-matches table names. If no expression is supplied,
   *             metadata for all tables are listed.</p>
   */
  Expression?: string;

  /**
   * <p>The name of the data catalog for which table metadata should be returned.</p>
   */
  CatalogName: string | undefined;
}

export namespace ListTableMetadataInput {
  export const filterSensitiveLog = (obj: ListTableMetadataInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTableMetadataInput => __isa(o, "ListTableMetadataInput");
}

export interface ListTableMetadataOutput {
  __type?: "ListTableMetadataOutput";
  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the NextToken
   *             from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of table metadata.</p>
   */
  TableMetadataList?: TableMetadata[];
}

export namespace ListTableMetadataOutput {
  export const filterSensitiveLog = (obj: ListTableMetadataOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTableMetadataOutput => __isa(o, "ListTableMetadataOutput");
}

export interface ListTagsForResourceInput {
  __type?: "ListTagsForResourceInput";
  /**
   * <p>The maximum number of results to be returned per request that lists the tags for the
   *             resource.</p>
   */
  MaxResults?: number;

  /**
   * <p>Lists the tags for the resource with the specified ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results for
   *             this request, where the request lists the tags for the resource with the specified
   *             ARN.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceInput {
  export const filterSensitiveLog = (obj: ListTagsForResourceInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceInput => __isa(o, "ListTagsForResourceInput");
}

export interface ListTagsForResourceOutput {
  __type?: "ListTagsForResourceOutput";
  /**
   * <p>A token to be used by the next request if this request is truncated.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of tags associated with the specified resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceOutput {
  export const filterSensitiveLog = (obj: ListTagsForResourceOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceOutput => __isa(o, "ListTagsForResourceOutput");
}

export interface ListWorkGroupsInput {
  __type?: "ListWorkGroupsInput";
  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the
   *                 <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workgroups to return in this request.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkGroupsInput {
  export const filterSensitiveLog = (obj: ListWorkGroupsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListWorkGroupsInput => __isa(o, "ListWorkGroupsInput");
}

export interface ListWorkGroupsOutput {
  __type?: "ListWorkGroupsOutput";
  /**
   * <p>A token generated by the Athena service that specifies where to continue pagination if
   *             a previous request was truncated. To obtain the next set of pages, pass in the
   *                 <code>NextToken</code> from the response object of the previous page call.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of workgroups, including their names, descriptions, creation times, and
   *             states.</p>
   */
  WorkGroups?: WorkGroupSummary[];
}

export namespace ListWorkGroupsOutput {
  export const filterSensitiveLog = (obj: ListWorkGroupsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListWorkGroupsOutput => __isa(o, "ListWorkGroupsOutput");
}

/**
 * <p>An exception that Athena received when it called a custom metastore. Occurs if the
 *             error is not caused by user input (<code>InvalidRequestException</code>) or from the
 *             Athena platform (<code>InternalServerException</code>). For example, if a user-created
 *             Lambda function is missing permissions, the Lambda <code>4XX</code> exception is
 *             returned in a <code>MetadataException</code>.</p>
 */
export interface MetadataException extends __SmithyException, $MetadataBearer {
  name: "MetadataException";
  $fault: "client";
  Message?: string;
}

export namespace MetadataException {
  export const filterSensitiveLog = (obj: MetadataException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MetadataException => __isa(o, "MetadataException");
}

/**
 * <p>A query, where <code>QueryString</code> is the list of SQL query statements that
 *             comprise the query.</p>
 */
export interface NamedQuery {
  __type?: "NamedQuery";
  /**
   * <p>The query name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the query.</p>
   */
  NamedQueryId?: string;

  /**
   * <p>The SQL query statements that comprise the query.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>The query description.</p>
   */
  Description?: string;

  /**
   * <p>The database to which the query belongs.</p>
   */
  Database: string | undefined;

  /**
   * <p>The name of the workgroup that contains the named query.</p>
   */
  WorkGroup?: string;
}

export namespace NamedQuery {
  export const filterSensitiveLog = (obj: NamedQuery): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NamedQuery => __isa(o, "NamedQuery");
}

/**
 * <p>Information about a single instance of a query execution.</p>
 */
export interface QueryExecution {
  __type?: "QueryExecution";
  /**
   * <p>Query execution statistics, such as the amount of data scanned, the amount of time
   *             that the query took to process, and the type of statement that was run.</p>
   */
  Statistics?: QueryExecutionStatistics;

  /**
   * <p>The database in which the query execution occurred.</p>
   */
  QueryExecutionContext?: QueryExecutionContext;

  /**
   * <p>The SQL query statements which the query execution ran.</p>
   */
  Query?: string;

  /**
   * <p>The completion date, current state, submission time, and state change reason (if
   *             applicable) for the query execution.</p>
   */
  Status?: QueryExecutionStatus;

  /**
   * <p>The name of the workgroup in which the query ran.</p>
   */
  WorkGroup?: string;

  /**
   * <p>The location in Amazon S3 where query results were stored and the encryption option,
   *             if any, used for query results. These are known as "client-side settings". If workgroup
   *             settings override client-side settings, then the query uses the location for the query
   *             results and the encryption configuration that are specified for the workgroup.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * <p>The unique identifier for each query execution.</p>
   */
  QueryExecutionId?: string;

  /**
   * <p>The type of query statement that was run. <code>DDL</code> indicates DDL query
   *             statements. <code>DML</code> indicates DML (Data Manipulation Language) query
   *             statements, such as <code>CREATE TABLE AS SELECT</code>. <code>UTILITY</code> indicates
   *             query statements other than DDL and DML, such as <code>SHOW CREATE TABLE</code>, or
   *                 <code>DESCRIBE <table></code>.</p>
   */
  StatementType?: StatementType | string;
}

export namespace QueryExecution {
  export const filterSensitiveLog = (obj: QueryExecution): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryExecution => __isa(o, "QueryExecution");
}

/**
 * <p>The database and data catalog context in which the query execution occurs.</p>
 */
export interface QueryExecutionContext {
  __type?: "QueryExecutionContext";
  /**
   * <p>The name of the database used in the query execution.</p>
   */
  Database?: string;

  /**
   * <p>The name of the data catalog used in the query execution.</p>
   */
  Catalog?: string;
}

export namespace QueryExecutionContext {
  export const filterSensitiveLog = (obj: QueryExecutionContext): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryExecutionContext => __isa(o, "QueryExecutionContext");
}

export enum QueryExecutionState {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  QUEUED = "QUEUED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>The amount of data scanned during the query execution and the amount of time that it
 *             took to execute, and the type of statement that was run.</p>
 */
export interface QueryExecutionStatistics {
  __type?: "QueryExecutionStatistics";
  /**
   * <p>The location and file name of a data manifest file. The manifest file is saved to the
   *             Athena query results location in Amazon S3. The manifest file tracks files that the
   *             query wrote to Amazon S3. If the query fails, the manifest file also tracks files that
   *             the query intended to write. The manifest is useful for identifying orphaned files
   *             resulting from a failed query. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Working with Query Results, Output Files, and
   *                 Query History</a> in the <i>Amazon Athena User Guide</i>.</p>
   */
  DataManifestLocation?: string;

  /**
   * <p>The number of milliseconds that the query was in your query queue waiting for
   *             resources. Note that if transient errors occur, Athena might automatically add the query
   *             back to the queue.</p>
   */
  QueryQueueTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to finalize and publish the query results
   *             after the query engine finished running the query.</p>
   */
  ServiceProcessingTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to run the query.</p>
   */
  TotalExecutionTimeInMillis?: number;

  /**
   * <p>The number of milliseconds that Athena took to plan the query processing flow. This
   *             includes the time spent retrieving table partitions from the data source. Note that
   *             because the query engine performs the query planning, query planning time is a subset of
   *             engine processing time.</p>
   */
  QueryPlanningTimeInMillis?: number;

  /**
   * <p>The number of bytes in the data that was queried.</p>
   */
  DataScannedInBytes?: number;

  /**
   * <p>The number of milliseconds that the query took to execute.</p>
   */
  EngineExecutionTimeInMillis?: number;
}

export namespace QueryExecutionStatistics {
  export const filterSensitiveLog = (obj: QueryExecutionStatistics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryExecutionStatistics => __isa(o, "QueryExecutionStatistics");
}

/**
 * <p>The completion date, current state, submission time, and state change reason (if
 *             applicable) for the query execution.</p>
 */
export interface QueryExecutionStatus {
  __type?: "QueryExecutionStatus";
  /**
   * <p>The state of query execution. <code>QUEUED</code> indicates that the query has been
   *             submitted to the service, and Athena will execute the query as soon as resources are
   *             available. <code>RUNNING</code> indicates that the query is in execution phase.
   *                 <code>SUCCEEDED</code> indicates that the query completed without errors.
   *                 <code>FAILED</code> indicates that the query experienced an error and did not
   *             complete processing. <code>CANCELLED</code> indicates that a user input interrupted
   *             query execution.</p>
   *         <note>
   *             <p>Athena automatically retries your queries in cases of certain transient errors. As
   *                 a result, you may see the query state transition from <code>RUNNING</code> or
   *                     <code>FAILED</code> to <code>QUEUED</code>. </p>
   *         </note>
   */
  State?: QueryExecutionState | string;

  /**
   * <p>The date and time that the query completed.</p>
   */
  CompletionDateTime?: Date;

  /**
   * <p>The date and time that the query was submitted.</p>
   */
  SubmissionDateTime?: Date;

  /**
   * <p>Further detail about the status of the query.</p>
   */
  StateChangeReason?: string;
}

export namespace QueryExecutionStatus {
  export const filterSensitiveLog = (obj: QueryExecutionStatus): any => ({
    ...obj,
  });
  export const isa = (o: any): o is QueryExecutionStatus => __isa(o, "QueryExecutionStatus");
}

/**
 * <p>A resource, such as a workgroup, was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  ResourceName?: string;
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The location in Amazon S3 where query results are stored and the encryption option, if
 *             any, used for query results. These are known as "client-side settings". If workgroup
 *             settings override client-side settings, then the query uses the workgroup
 *             settings.</p>
 */
export interface ResultConfiguration {
  __type?: "ResultConfiguration";
  /**
   * <p>If query results are encrypted in Amazon S3, indicates the encryption option used (for
   *             example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information. This is a
   *             client-side setting. If workgroup settings override client-side settings, then the query
   *             uses the encryption configuration that is specified for the workgroup, and also uses the
   *             location for storing query results specified in the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a> and <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The location in Amazon S3 where your query results are stored, such as
   *                 <code>s3://path/to/query/bucket/</code>. To run the query, you must specify the
   *             query results location using one of the ways: either for individual queries using either
   *             this setting (client-side), or in the workgroup, using <a>WorkGroupConfiguration</a>. If none of them is set, Athena issues an error
   *             that no output location is provided. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a>. If
   *             workgroup settings override client-side settings, then the query uses the settings
   *             specified for the workgroup. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;
}

export namespace ResultConfiguration {
  export const filterSensitiveLog = (obj: ResultConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResultConfiguration => __isa(o, "ResultConfiguration");
}

/**
 * <p>The information about the updates in the query results, such as output location and
 *             encryption configuration for the query results.</p>
 */
export interface ResultConfigurationUpdates {
  __type?: "ResultConfigurationUpdates";
  /**
   * <p>The encryption configuration for the query results.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>If set to "true", indicates that the previously-specified query results location (also
   *             known as a client-side setting) for queries in this workgroup should be ignored and set
   *             to null. If set to "false" or not set, and a value is present in the OutputLocation in
   *             ResultConfigurationUpdates (the client-side setting), the OutputLocation in the
   *             workgroup's ResultConfiguration will be updated with the new value. For more
   *             information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   */
  RemoveOutputLocation?: boolean;

  /**
   * <p>If set to "true", indicates that the previously-specified encryption configuration
   *             (also known as the client-side setting) for queries in this workgroup should be ignored
   *             and set to null. If set to "false" or not set, and a value is present in the
   *             EncryptionConfiguration in ResultConfigurationUpdates (the client-side setting), the
   *             EncryptionConfiguration in the workgroup's ResultConfiguration will be updated with the
   *             new value. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override
   *                 Client-Side Settings</a>.</p>
   */
  RemoveEncryptionConfiguration?: boolean;

  /**
   * <p>The location in Amazon S3 where your query results are stored, such as
   *                 <code>s3://path/to/query/bucket/</code>. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> If
   *             workgroup settings override client-side settings, then the query uses the location for
   *             the query results and the encryption configuration that are specified for the workgroup.
   *             The "workgroup settings override" is specified in EnforceWorkGroupConfiguration
   *             (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  OutputLocation?: string;
}

export namespace ResultConfigurationUpdates {
  export const filterSensitiveLog = (obj: ResultConfigurationUpdates): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResultConfigurationUpdates => __isa(o, "ResultConfigurationUpdates");
}

/**
 * <p>The metadata and rows that comprise a query result set. The metadata describes the
 *             column structure and data types. To return a <code>ResultSet</code> object, use <a>GetQueryResults</a>.</p>
 */
export interface ResultSet {
  __type?: "ResultSet";
  /**
   * <p>The metadata that describes the column structure and data types of a table of query
   *             results.</p>
   */
  ResultSetMetadata?: ResultSetMetadata;

  /**
   * <p>The rows in the table.</p>
   */
  Rows?: Row[];
}

export namespace ResultSet {
  export const filterSensitiveLog = (obj: ResultSet): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResultSet => __isa(o, "ResultSet");
}

/**
 * <p>The metadata that describes the column structure and data types of a table of query
 *             results. To return a <code>ResultSetMetadata</code> object, use <a>GetQueryResults</a>.</p>
 */
export interface ResultSetMetadata {
  __type?: "ResultSetMetadata";
  /**
   * <p>Information about the columns returned in a query result metadata.</p>
   */
  ColumnInfo?: ColumnInfo[];
}

export namespace ResultSetMetadata {
  export const filterSensitiveLog = (obj: ResultSetMetadata): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResultSetMetadata => __isa(o, "ResultSetMetadata");
}

/**
 * <p>The rows that comprise a query result table.</p>
 */
export interface Row {
  __type?: "Row";
  /**
   * <p>The data that populates a row in a query result table.</p>
   */
  Data?: Datum[];
}

export namespace Row {
  export const filterSensitiveLog = (obj: Row): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Row => __isa(o, "Row");
}

export interface StartQueryExecutionInput {
  __type?: "StartQueryExecutionInput";
  /**
   * <p>The database within which the query executes.</p>
   */
  QueryExecutionContext?: QueryExecutionContext;

  /**
   * <p>Specifies information about where and how to save the results of the query execution.
   *             If the query runs in a workgroup, then workgroup's settings may override query settings.
   *             This affects the query results location. The workgroup settings override is specified in
   *             EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  ResultConfiguration?: ResultConfiguration;

  /**
   * <p>The SQL query statements to be executed.</p>
   */
  QueryString: string | undefined;

  /**
   * <p>A unique case-sensitive string used to ensure the request to create the query is
   *             idempotent (executes only once). If another <code>StartQueryExecution</code> request is
   *             received, the same response is returned and another query is not created. If a parameter
   *             has changed, for example, the <code>QueryString</code>, an error is returned.</p>
   *         <important>
   *             <p>This token is listed as not required because AWS SDKs (for example the AWS SDK for
   *                 Java) auto-generate the token for users. If you are not using the AWS SDK or the AWS
   *                 CLI, you must provide this token or the action will fail.</p>
   *         </important>
   */
  ClientRequestToken?: string;

  /**
   * <p>The name of the workgroup in which the query is being started.</p>
   */
  WorkGroup?: string;
}

export namespace StartQueryExecutionInput {
  export const filterSensitiveLog = (obj: StartQueryExecutionInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartQueryExecutionInput => __isa(o, "StartQueryExecutionInput");
}

export interface StartQueryExecutionOutput {
  __type?: "StartQueryExecutionOutput";
  /**
   * <p>The unique ID of the query that ran as a result of this request.</p>
   */
  QueryExecutionId?: string;
}

export namespace StartQueryExecutionOutput {
  export const filterSensitiveLog = (obj: StartQueryExecutionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartQueryExecutionOutput => __isa(o, "StartQueryExecutionOutput");
}

export enum StatementType {
  DDL = "DDL",
  DML = "DML",
  UTILITY = "UTILITY",
}

export interface StopQueryExecutionInput {
  __type?: "StopQueryExecutionInput";
  /**
   * <p>The unique ID of the query execution to stop.</p>
   */
  QueryExecutionId?: string;
}

export namespace StopQueryExecutionInput {
  export const filterSensitiveLog = (obj: StopQueryExecutionInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopQueryExecutionInput => __isa(o, "StopQueryExecutionInput");
}

export interface StopQueryExecutionOutput {
  __type?: "StopQueryExecutionOutput";
}

export namespace StopQueryExecutionOutput {
  export const filterSensitiveLog = (obj: StopQueryExecutionOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopQueryExecutionOutput => __isa(o, "StopQueryExecutionOutput");
}

/**
 * <p>Contains metadata for a table.</p>
 */
export interface TableMetadata {
  __type?: "TableMetadata";
  /**
   * <p>The type of table. In Athena, only <code>EXTERNAL_TABLE</code> is supported.</p>
   */
  TableType?: string;

  /**
   * <p>A list of the partition keys in the table.</p>
   */
  PartitionKeys?: Column[];

  /**
   * <p>A set of custom key/value pairs for table properties.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The last time the table was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>A list of the columns in the table.</p>
   */
  Columns?: Column[];

  /**
   * <p>The name of the table.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that the table was created.</p>
   */
  CreateTime?: Date;
}

export namespace TableMetadata {
  export const filterSensitiveLog = (obj: TableMetadata): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TableMetadata => __isa(o, "TableMetadata");
}

/**
 * <p>A label that you assign to a resource. In Athena, a resource can be a workgroup or
 *             data catalog. Each tag consists of a key and an optional value, both of which you
 *             define. For example, you can use tags to categorize Athena workgroups or data catalogs
 *             by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to
 *             search and filter workgroups or data catalogs in your account. For best practices, see
 *                 <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode
 *             characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use
 *             letters and numbers representable in UTF-8, and the following characters: + - = . _ : /
 *             @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you
 *             specify more than one tag, separate them by commas. </p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can
   *             use letters and numbers representable in UTF-8, and the following characters: + - = . _
   *             : / @. Tag keys are case-sensitive and must be unique per resource. </p>
   */
  Key?: string;

  /**
   * <p>A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You
   *             can use letters and numbers representable in UTF-8, and the following characters: + - =
   *             . _ : / @. Tag values are case-sensitive. </p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceInput {
  __type?: "TagResourceInput";
  /**
   * <p>A collection of one or more tags, separated by commas, to be added to an Athena
   *             workgroup or data catalog resource.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>Specifies the ARN of the Athena resource (workgroup or data catalog) to which tags are
   *             to be added.</p>
   */
  ResourceARN: string | undefined;
}

export namespace TagResourceInput {
  export const filterSensitiveLog = (obj: TagResourceInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceInput => __isa(o, "TagResourceInput");
}

export interface TagResourceOutput {
  __type?: "TagResourceOutput";
}

export namespace TagResourceOutput {
  export const filterSensitiveLog = (obj: TagResourceOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceOutput => __isa(o, "TagResourceOutput");
}

export enum ThrottleReason {
  CONCURRENT_QUERY_LIMIT_EXCEEDED = "CONCURRENT_QUERY_LIMIT_EXCEEDED",
}

/**
 * <p>Indicates that the request was throttled.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The reason for the query throttling, for example, when it exceeds the concurrent query
   *             limit.</p>
   */
  Reason?: ThrottleReason | string;

  Message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
}

/**
 * <p>Information about a named query ID that could not be processed.</p>
 */
export interface UnprocessedNamedQueryId {
  __type?: "UnprocessedNamedQueryId";
  /**
   * <p>The error message returned when the processing request for the named query failed, if
   *             applicable.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code returned when the processing request for the named query failed, if
   *             applicable.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The unique identifier of the named query.</p>
   */
  NamedQueryId?: string;
}

export namespace UnprocessedNamedQueryId {
  export const filterSensitiveLog = (obj: UnprocessedNamedQueryId): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnprocessedNamedQueryId => __isa(o, "UnprocessedNamedQueryId");
}

/**
 * <p>Describes a query execution that failed to process.</p>
 */
export interface UnprocessedQueryExecutionId {
  __type?: "UnprocessedQueryExecutionId";
  /**
   * <p>The error code returned when the query execution failed to process, if
   *             applicable.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message returned when the query execution failed to process, if
   *             applicable.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The unique identifier of the query execution.</p>
   */
  QueryExecutionId?: string;
}

export namespace UnprocessedQueryExecutionId {
  export const filterSensitiveLog = (obj: UnprocessedQueryExecutionId): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UnprocessedQueryExecutionId => __isa(o, "UnprocessedQueryExecutionId");
}

export interface UntagResourceInput {
  __type?: "UntagResourceInput";
  /**
   * <p>A comma-separated list of one or more tag keys whose tags are to be removed from the
   *             specified resource.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>Specifies the ARN of the resource from which tags are to be removed.</p>
   */
  ResourceARN: string | undefined;
}

export namespace UntagResourceInput {
  export const filterSensitiveLog = (obj: UntagResourceInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceInput => __isa(o, "UntagResourceInput");
}

export interface UntagResourceOutput {
  __type?: "UntagResourceOutput";
}

export namespace UntagResourceOutput {
  export const filterSensitiveLog = (obj: UntagResourceOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceOutput => __isa(o, "UntagResourceOutput");
}

export interface UpdateDataCatalogInput {
  __type?: "UpdateDataCatalogInput";
  /**
   * <p>Specifies the type of data catalog to update. Specify <code>LAMBDA</code> for a
   *             federated catalog, <code>GLUE</code> for AWS Glue Catalog, or <code>HIVE</code> for an
   *             external hive metastore.</p>
   */
  Type: DataCatalogType | string | undefined;

  /**
   * <p>The name of the data catalog to update. The catalog name must be unique for the AWS
   *             account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen
   *             characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>New or modified text that describes the data catalog.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the Lambda function or functions to use for updating the data catalog. This
   *             is a mapping whose values depend on the catalog type. </p>
   *         <ul>
   *             <li>
   *                 <p>For the <code>HIVE</code> data catalog type, use the following syntax. The
   *                         <code>metadata-function</code> parameter is required. <code>The
   *                         sdk-version</code> parameter is optional and defaults to the currently
   *                     supported version.</p>
   *                 <p>
   *                   <code>metadata-function=<i>lambda_arn</i>,
   *                             sdk-version=<i>version_number</i>
   *                   </code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For the <code>LAMBDA</code> data catalog type, use one of the following sets
   *                     of required parameters, but not both.</p>
   *                 <ul>
   *                   <li>
   *                         <p>If you have one Lambda function that processes metadata and another
   *                             for reading the actual data, use the following syntax. Both parameters
   *                             are required.</p>
   *                         <p>
   *                         <code>metadata-function=<i>lambda_arn</i>,
   *                                     record-function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p> If you have a composite Lambda function that processes both metadata
   *                             and data, use the following syntax to specify your Lambda
   *                             function.</p>
   *                         <p>
   *                         <code>function=<i>lambda_arn</i>
   *                         </code>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>The <code>GLUE</code> type has no parameters.</p>
   *             </li>
   *          </ul>
   */
  Parameters?: { [key: string]: string };
}

export namespace UpdateDataCatalogInput {
  export const filterSensitiveLog = (obj: UpdateDataCatalogInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDataCatalogInput => __isa(o, "UpdateDataCatalogInput");
}

export interface UpdateDataCatalogOutput {
  __type?: "UpdateDataCatalogOutput";
}

export namespace UpdateDataCatalogOutput {
  export const filterSensitiveLog = (obj: UpdateDataCatalogOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateDataCatalogOutput => __isa(o, "UpdateDataCatalogOutput");
}

export interface UpdateWorkGroupInput {
  __type?: "UpdateWorkGroupInput";
  /**
   * <p>The workgroup state that will be updated for the given workgroup.</p>
   */
  State?: WorkGroupState | string;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The workgroup configuration that will be updated for the given workgroup.</p>
   */
  ConfigurationUpdates?: WorkGroupConfigurationUpdates;

  /**
   * <p>The specified workgroup that will be updated.</p>
   */
  WorkGroup: string | undefined;
}

export namespace UpdateWorkGroupInput {
  export const filterSensitiveLog = (obj: UpdateWorkGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateWorkGroupInput => __isa(o, "UpdateWorkGroupInput");
}

export interface UpdateWorkGroupOutput {
  __type?: "UpdateWorkGroupOutput";
}

export namespace UpdateWorkGroupOutput {
  export const filterSensitiveLog = (obj: UpdateWorkGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateWorkGroupOutput => __isa(o, "UpdateWorkGroupOutput");
}

/**
 * <p>A workgroup, which contains a name, description, creation time, state, and other
 *             configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup
 *             enables you to isolate queries for you or your group of users from other queries in the
 *             same account, to configure the query results location and the encryption configuration
 *             (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and
 *             to establish per-query data usage control limits for all queries in a workgroup. The
 *             workgroup settings override is specified in EnforceWorkGroupConfiguration (true/false)
 *             in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
 */
export interface WorkGroup {
  __type?: "WorkGroup";
  /**
   * <p>The workgroup name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The date and time the workgroup was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The state of the workgroup: ENABLED or DISABLED.</p>
   */
  State?: WorkGroupState | string;

  /**
   * <p>The configuration of the workgroup, which includes the location in Amazon S3 where
   *             query results are stored, the encryption configuration, if any, used for query results;
   *             whether the Amazon CloudWatch Metrics are enabled for the workgroup; whether workgroup
   *             settings override client-side settings; and the data usage limits for the amount of data
   *             scanned per query or per workgroup. The workgroup settings override is specified in
   *             EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.</p>
   */
  Configuration?: WorkGroupConfiguration;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;
}

export namespace WorkGroup {
  export const filterSensitiveLog = (obj: WorkGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WorkGroup => __isa(o, "WorkGroup");
}

/**
 * <p>The configuration of the workgroup, which includes the location in Amazon S3 where
 *             query results are stored, the encryption option, if any, used for query results, whether
 *             the Amazon CloudWatch Metrics are enabled for the workgroup and whether workgroup
 *             settings override query settings, and the data usage limits for the amount of data
 *             scanned per query or per workgroup. The workgroup settings override is specified in
 *             EnforceWorkGroupConfiguration (true/false) in the WorkGroupConfiguration. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>. </p>
 */
export interface WorkGroupConfiguration {
  __type?: "WorkGroupConfiguration";
  /**
   * <p>The upper data usage limit (cutoff) for the amount of bytes a single query in a
   *             workgroup is allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to reference
   *             Amazon S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup
   *             members cannot query data from Requester Pays buckets, and queries that retrieve data
   *             from Requester Pays buckets cause an error. The default is <code>false</code>. For more
   *             information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>
   *             in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  RequesterPaysEnabled?: boolean;

  /**
   * <p>Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set
   *             to "false", client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * <p>The configuration for the workgroup, which includes the location in Amazon S3 where
   *             query results are stored and the encryption option, if any, used for query results. To
   *             run the query, you must specify the query results location using one of the ways: either
   *             in the workgroup using this setting, or for individual queries (client-side), using
   *                 <a>ResultConfiguration$OutputLocation</a>. If none of them is set, Athena
   *             issues an error that no output location is provided. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query
   *             Results</a>.</p>
   */
  ResultConfiguration?: ResultConfiguration;
}

export namespace WorkGroupConfiguration {
  export const filterSensitiveLog = (obj: WorkGroupConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WorkGroupConfiguration => __isa(o, "WorkGroupConfiguration");
}

/**
 * <p>The configuration information that will be updated for this workgroup, which includes
 *             the location in Amazon S3 where query results are stored, the encryption option, if any,
 *             used for query results, whether the Amazon CloudWatch Metrics are enabled for the
 *             workgroup, whether the workgroup settings override the client-side settings, and the
 *             data usage limit for the amount of bytes scanned per query, if it is specified.</p>
 */
export interface WorkGroupConfigurationUpdates {
  __type?: "WorkGroupConfigurationUpdates";
  /**
   * <p>Indicates whether this workgroup enables publishing metrics to Amazon
   *             CloudWatch.</p>
   */
  PublishCloudWatchMetricsEnabled?: boolean;

  /**
   * <p>The result configuration information about the queries in this workgroup that will be
   *             updated. Includes the updated results location and an updated option for encrypting
   *             query results.</p>
   */
  ResultConfigurationUpdates?: ResultConfigurationUpdates;

  /**
   * <p>If set to <code>true</code>, allows members assigned to a workgroup to specify Amazon
   *             S3 Requester Pays buckets in queries. If set to <code>false</code>, workgroup members
   *             cannot query data from Requester Pays buckets, and queries that retrieve data from
   *             Requester Pays buckets cause an error. The default is <code>false</code>. For more
   *             information about Requester Pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays Buckets</a>
   *             in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  RequesterPaysEnabled?: boolean;

  /**
   * <p>The upper limit (cutoff) for the amount of bytes a single query in a workgroup is
   *             allowed to scan.</p>
   */
  BytesScannedCutoffPerQuery?: number;

  /**
   * <p>If set to "true", the settings for the workgroup override client-side settings. If set
   *             to "false" client-side settings are used. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html">Workgroup Settings Override Client-Side Settings</a>.</p>
   */
  EnforceWorkGroupConfiguration?: boolean;

  /**
   * <p>Indicates that the data usage control limit per query is removed. <a>WorkGroupConfiguration$BytesScannedCutoffPerQuery</a>
   *          </p>
   */
  RemoveBytesScannedCutoffPerQuery?: boolean;
}

export namespace WorkGroupConfigurationUpdates {
  export const filterSensitiveLog = (obj: WorkGroupConfigurationUpdates): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WorkGroupConfigurationUpdates => __isa(o, "WorkGroupConfigurationUpdates");
}

export enum WorkGroupState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The summary information for the workgroup, which includes its name, state,
 *             description, and the date and time it was created.</p>
 */
export interface WorkGroupSummary {
  __type?: "WorkGroupSummary";
  /**
   * <p>The workgroup creation date and time.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the workgroup.</p>
   */
  Name?: string;

  /**
   * <p>The workgroup description.</p>
   */
  Description?: string;

  /**
   * <p>The state of the workgroup.</p>
   */
  State?: WorkGroupState | string;
}

export namespace WorkGroupSummary {
  export const filterSensitiveLog = (obj: WorkGroupSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WorkGroupSummary => __isa(o, "WorkGroupSummary");
}
