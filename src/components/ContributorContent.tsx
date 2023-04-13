import React, { FunctionComponent } from "react";
import ContributorGithubCard from "./ContributorGithubCard";
import ContributorStackoverflowCard from "./ContributorStackoverflowCard";

type ContributorContentProps = {
  github: string;
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
