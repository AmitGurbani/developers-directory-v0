import React, { FunctionComponent } from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import ContributorHeader from "../components/ContributorHeader";
import ContributorContent from "../components/ContributorContent";
import { GithubData, getGithubDataServerSide } from "../helpers/github";
import UserCard from "../components/UserCard";

export const query = graphql`
  query ($github: String!) {
    contributorsJson(github: { eq: $github }) {
      displayName
      github
      linkedin
      stackoverflow
      skills
      summary
      twitter
    }
  }
`;

type Data = {
  contributorsJson: {
    displayName: string;
    github: string;
    linkedin: string;
    skills: Array<string>;
    stackoverflow: string;
    summary: string;
    twitter: string;
  };
};

type ServerData = {
  github: GithubData;
  status: number;
};

const Profile: FunctionComponent<
  PageProps<Data, object, unknown, ServerData>
> = ({ data, serverData }) => {
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

export const Head: HeadFC<Data> = (props) => {
  console.log(props);
  const {
    data: {
      contributorsJson: { displayName, skills, summary, github },
    },
  } = props;
  const title = displayName || github;
  const description = summary || title;
  const url = window.location.href;
  return (
    <>
      <title>
        {title}
        {skills ? " - " + skills.join(" | ") : ""}
      </title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta property="og:url" content={url} />
    </>
  );
};

type PageContext = {
  github: string;
};

type ServerProps = {
  pageContext: PageContext;
};

export async function getServerData(props: ServerProps) {
  console.log(props);
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

export default Profile;
