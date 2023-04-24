import React, { FunctionComponent } from "react";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { HiOutlineUsers } from "@react-icons/all-files/hi/HiOutlineUsers";
import { VscGitPullRequest } from "@react-icons/all-files/vsc/VscGitPullRequest";
import { GoRepo } from "@react-icons/all-files/go/GoRepo";
import { GoIssueOpened } from "@react-icons/all-files/go/GoIssueOpened";
import { GoGitCommit } from "@react-icons/all-files/go/GoGitCommit";
import { GoGitBranch } from "@react-icons/all-files/go/GoGitBranch";
import { BiGitCompare } from "@react-icons/all-files/bi/BiGitCompare";
import { GithubData } from "../helpers/github";
import { Link } from "gatsby";

type ContributorGithubCardProps = {
  github: GithubData;
};

const ContributorGithubCard: FunctionComponent<ContributorGithubCardProps> = ({
  github,
}) => {
  const {
    user: {
      avatarUrl,
      contributionsCollection,
      createdAt,
      followers,
      following,
      login,
      name,
      url,
    },
  } = github;
  return (
    <div>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Link to={avatarUrl} target="_blank">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={avatarUrl}
            alt={name}
          />
        </Link>
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="flex">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {login}
            </h5>
            <span className="mt-1 ml-2">
              (since {new Date(createdAt).getFullYear()})
            </span>
            <Link
              to={url}
              className="ml-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              target="_blank"
            >
              <FaGithub size={24} />
              <span className="mx-1">{login}</span>
              <BsArrowRightShort size={24} />
            </Link>
          </div>
          <div className="flex mb-3 font-normal text-gray-700 dark:text-gray-400">
            <HiOutlineUsers size={16} className="mt-1 mr-1" />{" "}
            {followers.totalCount} followers &#x2022; {following.totalCount}{" "}
            following
          </div>
          {contributionsCollection.hasAnyContributions && (
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <div className="flex ">
                <GoGitBranch size={16} className="mt-1 mr-1 flex" />{" "}
                <h6 className="text-xl">Contributions - </h6>{" "}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex">
                  <GoGitCommit size={16} className="mt-1 mr-1" /> Commits:{" "}
                  {contributionsCollection.totalCommitContributions}
                </div>
                <div className="flex">
                  <GoIssueOpened size={16} className="mt-1 mr-1" /> Issues:{" "}
                  {contributionsCollection.totalIssueContributions}
                </div>
                <div className="flex">
                  <VscGitPullRequest size={16} className="mt-1 mr-1" /> Pull
                  Requests:{" "}
                  {contributionsCollection.totalPullRequestContributions}
                </div>
                <div className="flex">
                  <BiGitCompare size={16} className="mt-1 mr-1" />
                  Pull Request Reviews:{" "}
                  {contributionsCollection.totalPullRequestReviewContributions}
                </div>
                <div className="flex">
                  <GoRepo size={16} className="mt-1 mr-1" /> Repositories:{" "}
                  {contributionsCollection.totalRepositoryContributions}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributorGithubCard;
