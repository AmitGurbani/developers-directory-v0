import axios from "axios";
import { useEffect, useState } from "react";

type StackoverflowUserData = {
  badge_counts: {
    bronze: number;
    gold: number;
    silver: number;
  };
  creation_date: number;
  display_name: string;
  link: string;
  profile_image: string;
  reputation: number;
};

type StackoverflowUserBadge = {
  name: string;
  link: string;
};

const BASE_URL = "https://api.stackexchange.com/2.3";

const useStackoverflow = (userId: string) => {
  const USER_BASE_URL = `${BASE_URL}/users/${userId}`;
  const [userData, setUserData] = useState<StackoverflowUserData | null>(null);
  const [userBadges, setUserBadges] = useState<Array<StackoverflowUserBadge>>(
    []
  );

  const [userTopTags, setUserTopTags] = useState<Array<string>>([]);

  const getUserData = async () => {
    try {
      const response = await axios.get(USER_BASE_URL, {
        params: {
          key: process.env.GATSBY_SO_KEY,
          site: "stackoverflow",
        },
      });
      const user: StackoverflowUserData = response.data.items[0];
      if (user) {
        setUserData(user);
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserBadges = async () => {
    try {
      const response = await axios.get(`${USER_BASE_URL}/badges`, {
        params: {
          key: process.env.GATSBY_SO_KEY,
          site: "stackoverflow",
        },
      });
      const badges: Array<any> = response.data.items;
      if (badges) {
        setUserBadges(
          badges.map(({ name, link }) => {
            return {
              link,
              name,
            };
          })
        );
      } else {
        console.log("User badges not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserTopTags = async () => {
    try {
      const response = await axios.get(`${USER_BASE_URL}/top-tags`, {
        params: {
          key: process.env.GATSBY_SO_KEY,
          site: "stackoverflow",
        },
      });
      const tags: Array<any> = response.data.items;
      if (tags) {
        setUserTopTags(
          tags.map(({ tag_name }) => tag_name)
        );
      } else {
        console.log("User top tags not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    getUserBadges();
    getUserTopTags();
  }, [userId]);

  return { userData, userBadges, userTopTags };
};

export default useStackoverflow;
