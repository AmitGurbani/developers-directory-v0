import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import ContributorHeader from "../components/ContributorHeader";
import ContributorContent from "../components/ContributorContent";
import { GithubData, getGithubDataServerSide } from "../helpers/github";

export const query = graphql`
  query ($github: String!) {
    contributorsJson(github: { eq: $github }) {
      displayName
      github
      linkedin
      stackoverflow
      skills
      twitter
    }
  }
`;

type ContributorProps = {
  data: {
    contributorsJson: {
      displayName: string;
      github: string;
      stackoverflow: string;
    };
  };
  serverData: {
    github: GithubData;
    status: number;
  };
};

const Contributor: FunctionComponent<ContributorProps> = ({
  data,
  serverData,
}) => {
  const { displayName, stackoverflow } = data.contributorsJson;
  const { github } = serverData;

  return (
    <div>
      <ContributorHeader
        displayName={displayName}
        githubUsername={github.user.login}
        githubUrl={github.user.url}
      />
      <ContributorContent github={github} stackoverflow={stackoverflow} />
    </div>
  );
};

type PageContext = {
  github: string;
};

type ServerProps = {
  pageContext: PageContext;
};

export async function getServerData(props: ServerProps) {
  const { github } = props.pageContext;

  try {
    return {
      props: { github: await getGithubDataServerSide(github) },
      status: 200,
    };
  } catch {
    return {
      props: {},
      status: 500,
    };
  }
}

export default Contributor;
