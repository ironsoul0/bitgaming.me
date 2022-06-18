import { useEthers } from "@usedapp/core";
import { chainReadProvider } from "config";
import { MyContract } from "config/contracts";
import { Contract } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { YourContract as YourContractType } from "types/typechain";

import { VerticalNavigationTemplate } from "../components";

const useYourContract = () => {
  const { account, library } = useEthers();
  console.log("account", account, library);

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
      const greeting = await contract.greeting();
      setGreeting(greeting);
    };

    fetchGreeting();
  }, [contract, account]);

  return (
    <VerticalNavigationTemplate>
      <div
        style={{
          height: 100,
          width: "100%",
          background: "linear-gradient(to right, #2193b0, #6dd5ed);",
        }}
        className="bg-gradient-to-r from-cyan-500 to-blue-500"
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
