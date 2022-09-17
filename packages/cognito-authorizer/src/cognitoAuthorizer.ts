import { PromiseHandler } from "@lambda-middleware/utils";
import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { logger } from "./logger";

export const cognitoAuthorizer = <Event, Response>() => (
  handler: PromiseHandler<APIGatewayEvent, APIGatewayProxyResult>
) => async (    event: APIGatewayEvent,
  context: Context): Promise<APIGatewayProxyResult> => {
  logger("Running handler");
    if(event.requestContext?.authorizer?.claims === undefined){
      logger("no authorizer claims in request context")
      throw new Error("Gateway not providing authorizer claims")

    } else {
      return  await handler(event, context);
    }

};
