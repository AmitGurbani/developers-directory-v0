import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

type ContributorGithubCardProps = {
  github: string;
};

type GithubData = {
  user: {
    avatarUrl: string;
  };
};

const ContributorGithubCard: FunctionComponent<ContributorGithubCardProps> = ({
  github,
}) => {
  const GITHUB_QUERY = gql`
  {
    user(login: "${github}") {
      avatarUrl
    }
  }`;

  const { data, loading } = useQuery<GithubData>(GITHUB_QUERY);
  return <div>{!loading && <p>{data?.user.avatarUrl}</p>}</div>;
};

export default ContributorGithubCard;
