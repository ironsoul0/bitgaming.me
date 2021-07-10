import { useEtherBalance, useEthers } from "@usedapp/core";
import { CONTRACT_ADDRESS } from "artifacts/contracts/contractAddress";
import YourContract from "artifacts/contracts/YourContract.sol/YourContract.json";
import { Contract, providers } from "ethers";
import React, { useMemo } from "react";
import { YourContract as YourContractType } from "types/typechain";

const localProvider = new providers.StaticJsonRpcProvider(
  "http://localhost:8545"
);

const useYourContract = () => {
  const { library } = useEthers();

  const contract = useMemo(
    () =>
      new Contract(
        CONTRACT_ADDRESS,
        YourContract.abi,
        library?.getSigner()
      ) as YourContractType,
    [library]
  );

  return contract;
};

const IndexPage = () => {
  const { deactivate, activateBrowserWallet, account, library, chainId } =
    useEthers();

  const balance = useEtherBalance(account);

  console.log(balance);

  const contract = useYourContract();

  return (
    <div className="max-w-lg py-4 mx-auto text-center">
      <p>Connected account: {account}</p>
      <p>Chain ID: {chainId}</p>
      <p>Balance: {balance}</p>
      <button onClick={() => activateBrowserWallet()} className="bg-green-500">
        Connect to a wallet
      </button>
      <br />
      <button onClick={() => deactivate()}>Deactivate</button>
    </div>
  );
};

export default IndexPage;
