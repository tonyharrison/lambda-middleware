import { cognitoAuthorizer } from "./cognitoAuthorizer";
import { createEvent, createContext } from "@lambda-middleware/utils";

describe("cognitoAuthorizer", () => {
  it("returns the handler's response", async () => {
    const response = {
      statusCode: 200,
      body: "",
    };
    const handler = jest.fn().mockResolvedValue(response);
    const event = createEvent({});
    event.requestContext.authorizer = {
      claims:{}
    }
    expect(
      await cognitoAuthorizer()(handler)(event, createContext())
    ).toMatchObject(response);
  });
});
