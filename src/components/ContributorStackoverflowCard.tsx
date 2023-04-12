import React, { FunctionComponent, useEffect } from "react";
import axios from "axios";

type ContributorStackoverflowCardProps = {
  stackoverflow: string;
};

type StackoverflowUserData = {
  badge_counts: {
    bronze: number;
    gold: number;
    silver: number;
  };
  display_name: string;
  link: string;
  reputation: number;
};

const ContributorStackoverflowCard: FunctionComponent<
  ContributorStackoverflowCardProps
> = ({ stackoverflow }) => {
  const API_URL = `https://api.stackexchange.com/2.3/users/${stackoverflow}?key=${process.env.GATSBY_SO_KEY}&site=stackoverflow&order=desc&sort=reputation&filter=default`;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(API_URL);
        const user: StackoverflowUserData = response.data.items[0];
        if (user) {
          console.log(user);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
  return <div></div>;
};

export default ContributorStackoverflowCard;
