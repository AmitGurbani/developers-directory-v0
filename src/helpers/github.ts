import { gql } from "@apollo/client";
import { client } from "../apollo/client";

export type GithubData = {
  user: {
    avatarUrl: string;
    contributionsCollection: {
      contributionYears: Array<number>;
      hasAnyContributions: boolean;
      totalCommitContributions: number;
      totalIssueContributions: number;
      totalPullRequestContributions: number;
      totalPullRequestReviewContributions: number;
      totalRepositoryContributions: number;
    };
    createdAt: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };
    issueComments: {
      totalCount: number;
    };
    issues: {
      totalCount: number;
    };
    login: string;
    name: string;
    packages: {
      totalCount: number;
    };
    pullRequests: {
      totalCount: number;
    };
    repositories: {
      totalCount: number;
    };
    url: string;
  };
};

export async function getGithubDataServerSide(github: string) {
  const response = await client.query({
    fetchPolicy: "no-cache",
    query: gql`
    {
        user(login: "${github}") {
          avatarUrl
          contributionsCollection {
            contributionYears
            hasAnyContributions
            hasActivityInThePast
            totalCommitContributions
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            totalRepositoryContributions
          }
          createdAt
          followers {
            totalCount
          }
          following {
            totalCount
          }
          issueComments {
            totalCount
          }
          issues {
            totalCount
          }
          login
          name
          packages {
            totalCount
          }
          pullRequests {
            totalCount
          }
          repositories {
            totalCount
          }
          url
        }
      }
    `,
  });

  return response.data as GithubData;
}
