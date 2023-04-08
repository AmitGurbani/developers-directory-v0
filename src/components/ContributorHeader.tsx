import React, { FunctionComponent } from "react";

type ContributorHeaderProps = {
  displayName: string;
  github: string;
};

const ContributorHeader: FunctionComponent<ContributorHeaderProps> = ({
  displayName,
  github,
}) => {
  return (
    <div>
      <h1>{displayName}</h1>
      <p>{github}</p>
    </div>
  );
};

export default ContributorHeader;
