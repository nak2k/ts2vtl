import { $util, $ctx } from "@ts2vtl/aws-appsync";

export default function () {
  return {
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
      "id": $util.dynamodb.toDynamoDBJson($ctx.args.id),
    }
  };
}
