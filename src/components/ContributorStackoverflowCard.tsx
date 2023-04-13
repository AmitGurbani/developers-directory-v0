import React, { FunctionComponent } from "react";
import useStackoverflow from "../hooks/useStackoveflow";

type ContributorStackoverflowCardProps = {
  stackoverflow: string;
};

const ContributorStackoverflowCard: FunctionComponent<
  ContributorStackoverflowCardProps
> = ({ stackoverflow }) => {
  const { userData } = useStackoverflow(stackoverflow);

  return <div>{userData?.display_name}</div>;
};

export default ContributorStackoverflowCard;
