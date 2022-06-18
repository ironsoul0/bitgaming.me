import React from "react";

import { NFTCard, VerticalNavigationTemplate } from "../components";

const default_avatar =
  "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png";

const IndexPage = () => {
  return (
    <VerticalNavigationTemplate>
      <div className="py-4 mx-auto mt-4 ml-10">
        <div>
          <div className="flex items-center mb-5">
            <div
              className="w-10 h-10 bg-gray-300 rounded-full"
              style={{
                backgroundImage: "url(" + default_avatar + ")",
                backgroundSize: "cover",
              }}
            />
            <p className="ml-4 text-2xl text-white font-500">Rewards</p>
          </div>
          <div
            style={{ background: "#202a30" }}
            className="w-32 h-20 px-4 py-3 rounded-2xl"
          >
            <p className="text-sm text-gray-300">Synced</p>
            <div className="flex items-center">
              <p className="mr-2 text-3xl font-bold text-white">0</p>
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundImage: "url(" + default_avatar + ")",
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <NFTCard
                imageUrl={default_avatar}
                name="Zaphrodite"
                desc="Requires 1,000 BIT"
                contentLeft="GEN 2 - 1"
                contentRight="supply: 10718"
                contentMain="Zaphrodite is the daughter of Zapeus, and thereforeghter of Zapeus, and thereforeghter of Zapeus, and therefore"
                handleClick={() => console.log("hi 1")}
                handleSecondClick={() => console.log("hi 2")}
              />
            </div>
            <div className="col-span-6">
              <NFTCard
                imageUrl={default_avatar}
                name="Zaphrodite"
                desc="Requires 1,000 BIT"
                contentLeft="GEN 2 - 1"
                contentRight="supply: 10718"
                contentMain="Zaphrodite is the daughter of Zapeus, and thereforeghter of Zapeus, and thereforeghter of Zapeus, and therefore"
                handleClick={() => console.log("hi 1")}
                handleSecondClick={() => console.log("hi 2")}
              />
            </div>
          </div>
        </div>
      </div>
    </VerticalNavigationTemplate>
  );
};

export default IndexPage;
