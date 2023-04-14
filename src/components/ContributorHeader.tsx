import React, { FunctionComponent } from "react";

type ContributorHeaderProps = {
  displayName: string;
  githubUrl: string;
  githubUsername: string;
};

const ContributorHeader: FunctionComponent<ContributorHeaderProps> = ({
  displayName,
  githubUrl,
  githubUsername,
}) => {
  return (
    <div>
      <h1 className="text-3xl">{displayName}</h1>
      <p className="text-2xl">{githubUrl}</p>
      <p className="text-2xl">{githubUsername}</p>
    </div>
  );
};

export default ContributorHeader;
