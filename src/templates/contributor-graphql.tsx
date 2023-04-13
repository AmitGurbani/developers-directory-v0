import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import ContributorHeader from "../components/ContributorHeader";
import ContributorContent from "../components/ContributorContent";

export const query = graphql`
  query ($github: String!) {
    contributorsJson(github: { eq: $github }) {
      displayName
      github
      stackoverflow
    }
  }
`;

type ContributorProps = {
  data: {
    contributorsJson: {
      displayName: string;
      github: string;
      stackoverflow: string;
    };
  };
};

const Contributor: FunctionComponent<ContributorProps> = ({ data }) => {
  const { displayName, github, stackoverflow } = data.contributorsJson;

  return (
    <div>
      <ContributorHeader displayName={displayName} github={github} />
      <ContributorContent github={github} stackoverflow={stackoverflow} />
    </div>
  );
};

export default Contributor;
