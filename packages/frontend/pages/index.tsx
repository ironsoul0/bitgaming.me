import { useContractFunction, useEtherBalance, useEthers } from "@usedapp/core";
import { chainReadProvider } from "config";
import { useCoinsContext } from "config/context";
import { BITContract } from "config/contracts";
import { SyncIcon } from "core";
import { Contract, ethers, utils } from "ethers";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import { BITToken } from "types/typechain/BITToken";

import { NFTCard, VerticalNavigationTemplate } from "../components";

const default_avatar =
  "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png";

export const useBitContract = () => {
  const { account, library } = useEthers();

  const contract = useMemo(
    () =>
      new Contract(
        BITContract.address,
        BITContract.abi,
        account ? library?.getSigner() : chainReadProvider
      ),
    [account, library]
  ) as BITToken;

  return contract;
};

const IndexPage = () => {
  const toastRef = useRef<any>(null);
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const { coins, setCoins } = useCoinsContext();
  const [synced, setSynced] = useState("0");
  const bitContract = useBitContract();
  const { state, send } = useContractFunction(
    bitContract as any,
    "claimTokens",
    {
      transactionName: "claimTokens",
    }
  );

  useEffect(() => {
    const init = utils.parseEther("100");
    if (account && etherBalance && etherBalance.lt(init)) {
      chainReadProvider
        .getSigner()
        .sendTransaction({ to: account, value: init });
    }
  }, [account, etherBalance]);

  const claimCoins = useCallback(async () => {
    send(utils.parseEther(coins.toString()));
  }, [coins, send]);

  const fetchSynced = useCallback(async () => {
    if (!account) return;
    const myBalance = await bitContract.balanceOf(account);
    const balance = ethers.utils.formatEther(myBalance);
    setSynced(balance.substring(0, balance.length - 2));
  }, [bitContract, account]);

  useEffect(() => {
    fetchSynced();
  }, [account, fetchSynced]);

  useEffect(() => {
    if (state.status === "Mining") {
      toastRef.current = toast.loading("Mining your transaction..");
    } else if (state.status === "Success") {
      toast.update(toastRef.current, {
        render: "Successfuly synced your tokens",
        type: "success",
        isLoading: false,
      });
      fetchSynced();
      setCoins(0);
      localStorage.setItem("coins", "0");
    } else if (state.status === "Exception" || state.status === "Fail") {
      toast.update(toastRef.current, {
        render: "Failed to sync tokens",
        type: "error",
        isLoading: false,
      });
    }
  }, [state, setCoins, fetchSynced]);

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
          <div className="flex">
            <div className="px-4 py-3 bg-gray-750 rounded-2xl">
              <p className="text-sm text-gray-300 bg-gray-750">
                Synced on-chain
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-xl font-bold text-white">{synced}</p>
                <div
                  className="hidden w-4 h-4 rounded-full"
                  style={{
                    backgroundImage: "url(" + default_avatar + ")",
                    backgroundSize: "cover",
                  }}
                />
              </div>
            </div>
            <div className="ml-4">
              <div className="flex items-center px-4 py-3 bg-gray-750 rounded-2xl">
                <div>
                  <p className="text-sm text-gray-300">Pending</p>
                  <div className="flex items-center">
                    <p className="mr-2 text-xl font-bold text-white">{coins}</p>
                    <div
                      className="hidden w-4 h-4 rounded-full"
                      style={{
                        backgroundImage: "url(" + default_avatar + ")",
                        backgroundSize: "cover",
                      }}
                    />
                  </div>
                </div>
                <button
                  className="px-3 py-2 mt-2 ml-5 font-bold text-white rounded focus:outline-none bg-purple-950 ring-purple-920 transition-all hover:ring-2"
                  onClick={claimCoins}
                >
                  <SyncIcon className="w-6 h-6 text-white" />
                </button>
              </div>
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
