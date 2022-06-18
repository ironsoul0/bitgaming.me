import clsx from "clsx";
import React from "react";

import { VerticalNavigationTemplate } from "../../components";

export const UserRow: React.FC<any> = ({
  name,
  address,
  score,
  avatar,
  className,
  index,
}: any) => {
  const default_avatar =
    "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png";

  return (
    <div
      className={clsx([
        "flex justify-between h-10 mx-2 justify-between",
        className,
      ])}
    >
      <div className="flex flex-col items-start justify-center col-span-6">
        <div className="flex items-center grid grid-cols-12 gap-2">
          <div className="overflow-hidden col-span-1">
            <p className="flex flex-col text-white truncate align-middle text-md font-regular">
              {index}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ml-1 col-span-2">
            <div
              className="bg-gray-300 rounded-full h-9 w-9"
              style={{
                backgroundImage:
                  "url(" + (avatar ? avatar : default_avatar) + ")",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="overflow-hidden col-span-9">
            <p className="flex flex-col text-white truncate align-middle text-md font-regular">
              {name}
            </p>
            <p className="flex flex-col text-sm text-gray-400 truncate align-middle font-regular">
              {address.substr(0, 10).concat("...")}
            </p>
          </div>
        </div>
      </div>
      <p className="flex items-center justify-end w-32 py-1 pr-4 text-xs font-bold text-white border-2 border-gray-400 rounded-md">
        {score?.toFixed(1)} BIT
      </p>
    </div>
  );
};

const leaderboard = [
  {
    id: 1,
    name: "zara.eth",
    address: "0x314234234234234",
    score: 134000,
  },
  {
    id: 2,
    name: "vitalik.eth",
    address: "0x314234234234234",
    score: 32344,
  },
  {
    id: 3,
    name: "sassal.eth",
    address: "0x314234234234234",
    score: 13443,
  },
  {
    id: 4,
    name: "saketkmr.eth",
    address: "0x314234234234234",
    score: 1443,
  },
  {
    id: 5,
    name: "sebaudet.eth",
    address: "0x314234234234234",
    score: 1324,
  },
];

const LeaderboardPage = () => {
  return (
    <>
      <VerticalNavigationTemplate>
        <div className="mt-5 ml-5">
          {leaderboard && (
            <div>
              <div className="mx-2 animate-smooth-appear">
                <p className="mb-10 text-4xl font-bold text-white">
                  Game points leaderboard
                </p>
              </div>
              <div className="animate-smooth-appear">
                {leaderboard.length > 0 ? (
                  leaderboard.map((user, index) => (
                    <UserRow
                      key={user.id}
                      {...user}
                      index={index + 1}
                      className="mb-4"
                    />
                  ))
                ) : (
                  <p className="px-2">Контакты отсутствуют</p>
                )}
              </div>
            </div>
          )}
        </div>
      </VerticalNavigationTemplate>
    </>
  );
};

export default LeaderboardPage;
