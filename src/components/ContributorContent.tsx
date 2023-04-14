import React, { FunctionComponent } from "react";
import ContributorGithubCard from "./ContributorGithubCard";
import ContributorStackoverflowCard from "./ContributorStackoverflowCard";
import { GithubData } from "../helpers/github";

type ContributorContentProps = {
  github: GithubData;
  stackoverflow: string;
};

const ContributorContent: FunctionComponent<ContributorContentProps> = ({
  github,
  stackoverflow,
}) => {
  return (
    <div>
      <ContributorGithubCard github={github} />
      {stackoverflow && (
        <ContributorStackoverflowCard stackoverflow={stackoverflow} />
      )}
    </div>
  );
};

export default ContributorContent;
