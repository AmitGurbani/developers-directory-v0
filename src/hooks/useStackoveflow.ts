import useAxios from "axios-hooks";

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

type StackoverflowUserTopTag = {
  tag_name: string;
};

const BASE_URL = "https://api.stackexchange.com/2.3";

const useStackoverflow = (
  userId: string
): {
  userData: StackoverflowUserData | null;
  userBadges: Array<StackoverflowUserBadge>;
  userTopTags: Array<StackoverflowUserTopTag>;
} => {
  const config = {
    baseURL: BASE_URL,
    params: {
      key: process.env.GATSBY_SO_KEY,
      site: "stackoverflow",
    },
  };
  const USER_URL = `/users/${userId}`;
  const USER_BADGES_URL = `${USER_URL}/badges`;
  const USER_TOPTAGS_URL = `${USER_URL}/top-tags`;

  const [{ data: userResponseData }] = useAxios({
    ...config,
    url: USER_URL,
  });

  const [{ data: userResponseBadgesData }] = useAxios({
    ...config,
    url: USER_BADGES_URL,
  });

  const [{ data: userResponseToptagsData }] = useAxios({
    ...config,
    url: USER_TOPTAGS_URL,
  });

  return {
    userData: userResponseData?.items[0],
    userBadges: userResponseBadgesData?.items,
    userTopTags: userResponseToptagsData?.items,
  };
};

export default useStackoverflow;
