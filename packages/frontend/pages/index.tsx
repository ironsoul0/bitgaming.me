import { useEthers } from "@usedapp/core";
import { chainReadProvider } from "config";
import { MyContract } from "config/contracts";
import { Contract } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { YourContract as YourContractType } from "types/typechain";

import { VerticalNavigationTemplate } from "../components";

const default_avatar =
  "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png";

const useYourContract = () => {
  const { account, library } = useEthers();

  const contract = useMemo(
    () =>
      new Contract(
        MyContract.address,
        MyContract.abi,
        account ? library?.getSigner() : chainReadProvider
      ),
    [account, library]
  ) as YourContractType;

  return contract;
};

const IndexPage = () => {
  const { deactivate, activateBrowserWallet, account, chainId } = useEthers();
  const contract = useYourContract();

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const greeting = await contract.greeting();
        setGreeting(greeting);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGreeting();
  }, [contract, account]);

  return (
    <VerticalNavigationTemplate>
      <div
        style={{
          width: "100%",
          background: "linear-gradient(to right, #2193b0, #6dd5ed);",
        }}
        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
      ></div>
      <div className="py-4 mx-auto ml-10">
        {!account ? (
          <button
            className="px-4 py-3 mt-4 text-white bg-blue-500 rounded-sm"
            onClick={() => activateBrowserWallet()}
          >
            Please connect account
          </button>
        ) : (
          <div>
            <div className="flex items-center mb-5">
              <div
                className="w-12 h-12 bg-gray-300 rounded-full"
                style={{
                  backgroundImage: "url(" + default_avatar + ")",
                  backgroundSize: "cover",
                }}
              />
              <p className="ml-4 text-lg font-bold text-white">Rewards</p>
            </div>
            <div className="w-24 h-16 px-3 py-2 bg-gray-700 rounded-xl">
              <p className="text-xs text-gray-400">Synced</p>
              <div className="flex items-center">
                <p className="text-xl font-bold text-white">0</p>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundImage: "url(" + default_avatar + ")",
                    backgroundSize: "cover",
                  }}
                />
              </div>
            </div>
            <p>
              <span className="font-bold text-red-500">Connected account:</span>{" "}
              {account.substr(0, 7).concat("...")}
            </p>
            <p>
              <span className="font-bold text-red-500">Chain ID:</span>{" "}
              {chainId}
            </p>
            <p>
              <span className="font-bold text-red-500">Greeting:</span>{" "}
              {greeting}
            </p>
            <button
              className="px-4 py-3 mt-3 text-white bg-blue-500 rounded-sm"
              onClick={() => deactivate()}
            >
              Disconnect wallet
            </button>
          </div>
        )}
      </div>
    </VerticalNavigationTemplate>
  );
};

export default IndexPage;
