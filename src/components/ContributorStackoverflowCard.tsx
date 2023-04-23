import React, { FunctionComponent } from "react";
import useStackoverflow from "../hooks/useStackoveflow";
import { FaMedal } from "@react-icons/all-files/fa/FaMedal";
import { FaStackOverflow } from "@react-icons/all-files/fa/FaStackOverflow";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";

type ContributorStackoverflowCardProps = {
  stackoverflow: string;
};

const ContributorStackoverflowCard: FunctionComponent<
  ContributorStackoverflowCardProps
> = ({ stackoverflow }) => {
  const { userData, userBadges, userTopTags } = useStackoverflow(stackoverflow);

  return (
    <div>
      {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={userData?.link} target="_blank">
          <img className="rounded-t-lg" src={userData?.profile_image} alt="" />
        </a>
        <div className="p-5">
          <a href={userData?.link} target="_blank">
            <div className="flex">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {userData?.display_name}
              </h5>
            </div>
          </a>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Reputation - {userData?.reputation}
          </p>
          <div className="flex">
            <div className="flex mb-3 font-normal text-amber-400 mr-4">
              <FaMedal size={16} className="mt-1" />{" "}
              {userData?.badge_counts.gold}
            </div>

            <div className="flex mb-3 font-normal text-slate-400 mr-4">
              <FaMedal size={16} className="mt-1" />
              {userData?.badge_counts.silver}
            </div>

            <div className="flex mb-3 font-normal text-orange-400 ">
              <FaMedal size={16} className="mt-1" />
              {userData?.badge_counts.bronze}
            </div>
          </div>

          <div>
            <h1>Badges earned - {userBadges.length}</h1>
            {userBadges.map(({ name, link }) => (
              <a href={link} target="_blank">
                <span className="mr-2 px-2 bg-orange-200 rounded-full">
                  {name}
                </span>
              </a>
            ))}
          </div>

          <div>
            <h1>Top tags - {userTopTags.length}</h1>
            {userTopTags.map((tag) => (
              <span className="mr-2 px-2 bg-orange-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={userData?.link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            target="_blank"
          >
            <FaStackOverflow size={24} />
            <span className="mx-1">{userData?.display_name}</span>
            <BsArrowRightShort size={24} />
          </a>
        </div>
            </div> */}

      {/* Horizontal Card */}

      <a
        href={userData?.link}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={userData?.profile_image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {userData?.display_name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Reputation - {userData?.reputation}
          </p>
          <div className="flex">
            <div className="flex mb-3 font-normal text-amber-400 mr-4">
              <FaMedal size={16} className="mt-1" />{" "}
              {userData?.badge_counts.gold}
            </div>

            <div className="flex mb-3 font-normal text-slate-400 mr-4">
              <FaMedal size={16} className="mt-1" />
              {userData?.badge_counts.silver}
            </div>

            <div className="flex mb-3 font-normal text-orange-400 ">
              <FaMedal size={16} className="mt-1" />
              {userData?.badge_counts.bronze}
            </div>
          </div>

          <div>
            <h1 className="font-normal text-gray-700 dark:text-gray-400">
              Badges earned - {userBadges.length}
            </h1>
            {userBadges.map(({ name, link }) => (
              <a href={link} target="_blank">
                <span className="mr-2 px-2 bg-orange-200 rounded-full">
                  {name}
                </span>
              </a>
            ))}
          </div>

          <div>
            <h1 className="mb-2 font-normal text-gray-700 dark:text-gray-400">
              Top tags - {userTopTags.length}
            </h1>
            {userTopTags.map((tag) => (
              <span className="mr-2 px-2 bg-orange-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={userData?.link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            target="_blank"
          >
            <FaStackOverflow size={24} />
            <span className="mx-1">{userData?.display_name}</span>
            <BsArrowRightShort size={24} />
          </a>
        </div>
      </a>
    </div>
  );
};

export default ContributorStackoverflowCard;
