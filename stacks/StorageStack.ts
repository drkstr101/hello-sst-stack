import { Bucket, StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
  // Create an S3 bucket
  const bucket = new Bucket(stack, "Uploads");

  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      todoId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "todoId" },
  });

  return {
    bucket,
    table,
  };
}
