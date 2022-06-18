import { useContractFunction, useEtherBalance, useEthers } from "@usedapp/core";
import clsx from "clsx";
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

const bronzeNFT = [
  {
    image: "https://ironsoul0.github.io/bronze/brain1.png",
    name: "Smally brain",
    description: "The brains of crypto beginners.",
    requiredScore: "Requires 500 on-chain BIT",
    gen: "gen 1 - 1",
    supply: "supply: 12323",
  },
  {
    image: "https://ironsoul0.github.io/bronze/brain2.png",
    name: "Mini brain",
    description: "Another type of brains of crypto beginners.",
    requiredScore: "Requires 900 on-chain BIT",
    gen: "gen 1 - 2",
    supply: "supply: 21321",
  },
];
const silverNFT = [
  {
    image: "https://ironsoul0.github.io/silver/brain1.png",
    name: "Miner's brain",
    description: "The brain of average mining enjoyer.",
    requiredScore: "Requires 1000 on-chain BIT",
    gen: "gen 2 - 1",
    supply: "supply: 423",
  },
  {
    image: "https://ironsoul0.github.io/silver/brain2.png",
    name: "Average brain",
    description: "The brain of experienced crypto dog.",
    requiredScore: "Requires 1200 on-chain BIT",
    gen: "gen 2 - 2",
    supply: "supply: 321",
  },
  {
    image: "https://ironsoul0.github.io/silver/brain3.png",
    name: "Axis brain",
    description: "The geek brains of the geek personality.",
    requiredScore: "Requires 1200 on-chain BIT",
    gen: "gen 2 - 3",
    supply: "supply: 453",
  },
  {
    image: "https://ironsoul0.github.io/silver/brain4.png",
    name: "Middly brain",
    description: "The brain of average mining enjoyer.",
    requiredScore: "Requires 1400 on-chain BIT",
    gen: "gen 2 - 4",
    supply: "supply: 233",
  },
  {
    image: "https://ironsoul0.github.io/silver/brain5.png",
    name: "Minted brain",
    description: "The brain that undergo minting.",
    requiredScore: "Requires 1500 on-chain BIT",
    gen: "gen 2 - 5",
    supply: "supply: 195",
  },
];
const goldNFT = [
  {
    image: "https://ironsoul0.github.io/gold/brain1.gif",
    name: "Geek brain",
    description: "The brain of the real geek.",
    requiredScore: "Requires 1800 on-chain BIT",
    gen: "gen 5 - 1",
    supply: "supply: 23",
  },
  {
    image: "https://ironsoul0.github.io/gold/brain2.gif",
    name: "Jet brain",
    description: "The brain of the real jet man.",
    requiredScore: "Requires 2000 on-chain BIT",
    gen: "gen 5 - 2",
    supply: "supply: 10",
  },
];

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
        progress: 50,
      });
      const id = setTimeout(() => {
        toast.dismiss(toastRef.current);
        clearTimeout(id);
      }, 2000);
      fetchSynced();
      setCoins(0);
      localStorage.setItem("coins", "0");
    } else if (state.status === "Exception" || state.status === "Fail") {
      toast.update(toastRef.current, {
        render: "Failed to sync tokens",
        type: "error",
        isLoading: false,
      });
      const id = setTimeout(() => {
        toast.dismiss(toastRef.current);
        clearTimeout(id);
      }, 2000);
    }
  }, [state, setCoins, fetchSynced]);

  return (
    <VerticalNavigationTemplate>
      <div className="py-4 mx-auto mt-4 ml-4">
        <div>
          <div className="flex items-center mb-5">
            <img alt="icon" src="/reward.svg" />
            <div className="ml-4">
              <p className="text-3xl font-bold text-white">Rewards</p>
              <p className="text-lg text-white opacity-80">
                All participants sorted by on-chain BIT tokens
              </p>
            </div>
          </div>
          <div className="flex animate-smooth-appear">
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
                  className={clsx(
                    "px-3 py-2 mt-2 ml-5 font-bold text-white rounded focus:outline-none bg-purple-950 ring-purple-920 transition-all hover:ring-2",
                    coins === 0 && "cursor-not-allowed ring-0"
                  )}
                  onClick={claimCoins}
                  disabled={coins === 0}
                >
                  <SyncIcon className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-8 text-2xl font-bold text-red-400">Bronze NFTs</p>
          <div className="mt-4 grid grid-cols-12 gap-4 animate-smooth-appear">
            {bronzeNFT.map((n) => (
              <div key={n.image} className="col-span-6">
                <NFTCard
                  imageUrl={n.image}
                  name={n.name}
                  desc={n.requiredScore}
                  contentLeft={n.gen}
                  contentRight={n.supply}
                  contentMain={n.description}
                  handleClick={() => console.log("hi 1")}
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-2xl font-bold text-gray-300">Silver NFTs</p>
          <div className="mt-4 grid grid-cols-12 gap-x-4 gap-y-8 animate-smooth-appear">
            {silverNFT.map((n) => (
              <div key={n.image} className="col-span-6">
                <NFTCard
                  imageUrl={n.image}
                  name={n.name}
                  desc={n.requiredScore}
                  contentLeft={n.gen}
                  contentRight={n.supply}
                  contentMain={n.description}
                  handleClick={() => console.log("hi 1")}
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-2xl font-bold text-yellow-500">Gold NFTs</p>
          <div className="mt-4 grid grid-cols-12 gap-4 animate-smooth-appear">
            {goldNFT.map((n) => (
              <div key={n.image} className="col-span-6">
                <NFTCard
                  imageUrl={n.image}
                  name={n.name}
                  desc={n.requiredScore}
                  contentLeft={n.gen}
                  contentRight={n.supply}
                  contentMain={n.description}
                  handleClick={() => console.log("hi 1")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </VerticalNavigationTemplate>
  );
};

export default IndexPage;
