import React, { FunctionComponent } from "react";
import ContributorGithubCard from "./ContributorGithubCard";

type ContributorContentProps = {
  github: string;
};

const ContributorContent: FunctionComponent<ContributorContentProps> = ({
  github,
}) => {
  return (
    <div>
      <ContributorGithubCard github={github} />
    </div>
  );
};

export default ContributorContent;
