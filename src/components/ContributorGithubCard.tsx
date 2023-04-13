import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { HiOutlineUsers } from "@react-icons/all-files/hi/HiOutlineUsers";
import { VscGitPullRequest } from "@react-icons/all-files/vsc/VscGitPullRequest";
import {GoRepo } from "@react-icons/all-files/go/GoRepo";
import { GoIssueOpened } from "@react-icons/all-files/go/GoIssueOpened";
import { GoGitCommit } from "@react-icons/all-files/go/GoGitCommit";
import { GoGitBranch } from "@react-icons/all-files/go/GoGitBranch";
// import { VscGitPullRequestNewChanges } from "@react-icons/all-files/vsc/VscGitPullRequestNewChanges";
import { BiGitCompare } from "@react-icons/all-files/bi/BiGitCompare";
type ContributorGithubCardProps = {
  github: string;
};

type GithubUserData = {
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

const ContributorGithubCard: FunctionComponent<ContributorGithubCardProps> = ({
  github,
}) => {
  const GITHUB_USER_QUERY = gql`
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
  }`;

  const { data, loading } = useQuery<GithubUserData>(GITHUB_USER_QUERY);

  return (
    <div>
      {!loading && (
        <div className="max-w-sm bg-white text-gray-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <a href={data?.user.url} target="_blank">
            <img
              className="rounded-t-lg w-full"
              src={data?.user.avatarUrl}
              alt={data?.user.name}
            />
          </a>
          <div className="p-5">
            <a href={data?.user.url} target="_blank">
              <div className="flex">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {github}
                </h5>
                <span className="mt-1 ml-2">
                  (since{" "}
                  {new Date(data?.user.createdAt as string).getFullYear()})
                </span>
              </div>
            </a>
            <div className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
              <HiOutlineUsers size={16} className="mt-1 mr-1" />{" "}
              {data?.user.followers.totalCount} followers &#x2022;{" "}
              {data?.user.following.totalCount} following
            </div>
            {data?.user.contributionsCollection.hasAnyContributions && (
              <div className="font-normal text-gray-700 dark:text-gray-400">
                <div className="flex ">
                  <GoGitBranch size={16} className="mt-1 mr-1 flex" />{" "}
                  <h6 className="text-xl">Contributions - </h6>{" "}
                </div>
                <p className="flex">
                  <GoGitCommit size={16} className="mt-1 mr-1" /> Commits:{" "}
                  {data?.user.contributionsCollection.totalCommitContributions}
                </p>
                <p className="flex">
                  <GoIssueOpened size={16} className="mt-1 mr-1" /> Issues:{" "}
                  {data?.user.contributionsCollection.totalIssueContributions}
                </p>
                <p className="flex">
                  <VscGitPullRequest size={16} className="mt-1 mr-1" /> Pull
                  Requests:{" "}
                  {
                    data?.user.contributionsCollection
                      .totalPullRequestContributions
                  }
                </p>
                <p className="flex">
                  <BiGitCompare size={16} className="mt-1 mr-1" />
                  Pull Request Reviews:{" "}
                  {
                    data?.user.contributionsCollection
                      .totalPullRequestReviewContributions
                  }
                </p>
                <p className="flex">
                  <GoRepo size={16} className="mt-1 mr-1" /> Repositories:{" "}
                  {
                    data?.user.contributionsCollection
                      .totalRepositoryContributions
                  }
                </p>
              </div>
            )}
            <a
              href={data?.user.url}
              className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
            >
              <FaGithub size={24} />
              <span className="mx-1">{github}</span>
              <BsArrowRightShort size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContributorGithubCard;
