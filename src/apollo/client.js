// src/gatsby-plugin-apollo/client.js
import fetch from "cross-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
    },
    fetch,
  }),
});
