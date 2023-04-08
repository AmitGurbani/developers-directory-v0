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
      <h1 className="text-3xl">{displayName}</h1>
      <p className="text-2xl">{github}</p>
    </div>
  );
};

export default ContributorHeader;
