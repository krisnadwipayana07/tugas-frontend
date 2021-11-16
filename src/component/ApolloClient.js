import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rich-killdeer-40.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "c9NI39G3LmlpZwN0ar7Mo5w4KM9n0jrqGdK7uFON79DULhmFxGbPGmH8sA5Wvw8R",
  },
});
