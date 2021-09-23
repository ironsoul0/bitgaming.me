import { useEthers } from "@usedapp/core";
import { YourContract as CONTRACT_ADDRESS } from "artifacts/contracts";
import YourContract from "artifacts/contracts/YourContract.sol/YourContract.json";
import { Contract, providers } from "ethers";
import React, { useEffect, useMemo, useState } from "react";
import { YourContract as YourContractType } from "types/typechain";

const localProvider = new providers.StaticJsonRpcProvider(
  "http://localhost:8545"
);

const useYourContract = () => {
  const { account, library } = useEthers();
  console.log("account", account, library);

  const contract = useMemo(
    () =>
      new Contract(
        CONTRACT_ADDRESS,
        YourContract.abi,
        account ? library?.getSigner() : localProvider
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
    <div className="max-w-lg py-4 mx-auto text-center">
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
            <span className="font-bold text-red-500">Chain ID:</span> {chainId}
          </p>
          <p>
            <span className="font-bold text-red-500">Greeting:</span> {greeting}
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
  );
};

export default IndexPage;
