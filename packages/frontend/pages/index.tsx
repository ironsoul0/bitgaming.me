import { useEtherBalance, useEthers, useSendTransaction } from "@usedapp/core";
import { YourContract as CONTRACT_ADDRESS } from "artifacts/contracts";
import YourContract from "artifacts/contracts/YourContract.sol/YourContract.json";
import { Contract, providers, utils } from "ethers";
import React, { useEffect, useMemo } from "react";
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
        localProvider.getSigner()
        // library?.getSigner()
      ) as YourContractType,
    []
  );

  return contract;
};

const IndexPage = () => {
  const { deactivate, activateBrowserWallet, account, library, chainId } =
    useEthers();

  const balance = useEtherBalance(account);
  const contract = useYourContract();
  const { sendTransaction } = useSendTransaction({
    signer: localProvider.getSigner(),
  });

  // useEffect(() => {
  //   if (account)
  //     sendTransaction({ to: account, value: utils.parseEther("0.1") });
  // }, [account, sendTransaction]);

  return (
    <div className="max-w-lg py-4 mx-auto text-center">
      <p>Connected account: {account}</p>
      <p>Chain ID: {chainId}</p>
      <p>Balance: {balance?.toString()}</p>
      <button onClick={() => activateBrowserWallet()} className="bg-green-500">
        Connect to a wallet
      </button>
      <br />
      <button onClick={() => deactivate()}>Deactivate</button>
    </div>
  );
};

export default IndexPage;
