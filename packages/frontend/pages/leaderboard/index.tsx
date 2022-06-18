import clsx from "clsx";
import React from "react";

import { VerticalNavigationTemplate } from "../../components";

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

const users = [
  {
    name: "Alibek.eth",
    avatar: "/av1.png",
  },
  {
    name: "Rauan.eth",
    avatar: "/av2.png",
  },
  {
    name: "Ulan.eth",
    avatar: "/av3.png",
  },
  {
    name: "Sanzhar.eth",
    avatar: "/av4.png",
  },
  {
    name: "Temirzhan.eth",
    avatar: "/av5.png",
  },
  {
    name: "Akezhan.eth",
    avatar: "/av6.png",
  },
  {
    name: "Khafiz.eth",
    avatar: "/av7.png",
  },
  {
    name: "Daulet.eth",
    avatar: "/av8.png",
  },
];

const UserRow: React.FC<any> = ({
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
    <div className={clsx(["flex h-10 mx-2 justify-between", className])}>
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center grid grid-cols-12 gap-2">
          <div className="overflow-hidden col-span-1">
            <p className="flex flex-col text-white truncate align-middle text-md font-regular">
              {index}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center ml-1 col-span-2">
            <div
              className="w-10 h-10 bg-gray-300 rounded-full"
              style={{
                backgroundImage:
                  "url(" + (avatar ? avatar : default_avatar) + ")",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="ml-2 overflow-hidden col-span-9">
            <p className="flex flex-col text-white truncate align-middle text-md font-regular">
              {name}
            </p>
            <p className="flex flex-col text-sm text-gray-400 truncate align-middle font-regular">
              {address.substr(0, 10).concat("...")}
            </p>
          </div>
        </div>
      </div>
      <p
        style={{ borderColor: "#784FFE", color: "#E7DFFF" }}
        className="flex items-center justify-center w-32 py-1 py-4 text-xs font-bold border-2 rounded-md"
      >
        {score?.toFixed(1)} BIT
      </p>
    </div>
  );
};

const LeaderboardPage = () => {
  return (
    <>
      <VerticalNavigationTemplate>
        <div className="mt-8 ml-4">
          {leaderboard && (
            <div>
              <div className="flex items-center mb-10">
                <img alt="icon" src="/cup.svg" />

                <div className="ml-4">
                  <p className="text-3xl font-bold text-white">Leaderboard</p>
                  <p className="text-lg text-white opacity-80">
                    All participants sorted by on-chain BIT tokens
                  </p>
                </div>
              </div>

              <div className="animate-smooth-appear">
                {leaderboard.length > 0 ? (
                  leaderboard.map((user, index) => (
                    <UserRow
                      key={user.id}
                      name={users[index].name}
                      avatar={users[index].avatar}
                      score={user.score}
                      address={user.address}
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
