import React from "react";
import { graphql } from "gatsby";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export const query = graphql`
  query ($github: String!) {
    contributorsJson(github: { eq: $github }) {
      displayName
      github
    }
  }
`;

const Contributor = ({ data }) => {
  const contributor = data.contributorsJson;

  const GITHUB_QUERY = gql`
  {
    user(login: "${contributor.github}") {
      avatarUrl
    }
  }`;

  const { data: githubData, loading } = useQuery(GITHUB_QUERY);

  return (
    <div>
      <h1>{contributor.displayName}</h1>
      <p>{contributor.github}</p>
      {!loading && <p>{githubData?.user.avatarUrl}</p>}
    </div>
  );
};

export default Contributor;
