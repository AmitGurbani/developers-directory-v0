import axios from "axios";
import { useEffect, useState } from "react";

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

const BASE_URL = "https://api.stackexchange.com/2.3";

const useStackoverflow = (userId: string) => {
  const [userData, setUserData] = useState<StackoverflowUserData | null>(null);

  const getUserData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`, {
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

  useEffect(() => {
    getUserData();
  }, [userId]);

  return { userData };
};

export default useStackoverflow;
