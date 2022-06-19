import {
  ChainId,
  useContractFunction,
  useEtherBalance,
  useEthers,
} from "@usedapp/core";
import clsx from "clsx";
import { chainReadProvider, TARGET_CHAIN } from "config";
import { useCoinsContext } from "config/context";
import { BITContract, NFTContract } from "config/contracts";
import { SyncIcon } from "core";
import { Contract, ethers, utils } from "ethers";
import { LogDescription } from "ethers/lib/utils";
import { useWindowSize } from "hooks";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import { BrainNFT } from "types/typechain";
import { BITToken } from "types/typechain/BITToken";

import { Modal, NFTCard, VerticalNavigationTemplate } from "../components";

const default_avatar =
  "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png";

const BRONZE_THRESHOLD = 50;
const SILVER_THRESHOLD = 300;
const GOLD_THRESHOLD = 500;

const bronzeNFT = [
  {
    image: "https://ironsoul0.github.io/bronze/brain1.png",
    name: "Smally brain",
    description: "The brains of crypto beginners.",
    requiredScore: "Requires 50 on-chain BIT",
    gen: "gen 1 - 1",
    supply: "supply: 12323",
  },
  {
    image: "https://ironsoul0.github.io/bronze/brain2.png",
    name: "Mini brain",
    description: "Another type of brains of crypto beginners.",
    requiredScore: "Requires 50 on-chain BIT",
    gen: "gen 1 - 2",
    supply: "supply: 21321",
  },
];
const silverNFT = [
  {
    image: "https://ironsoul0.github.io/silver/brain1.png",
    name: "Miner's brain",
    description: "The brain of average mining enjoyer.",
    requiredScore: "Requires 300 on-chain BIT",
    gen: "gen 2 - 1",
    supply: "supply: 423",
  },
  {
    image: "https://ironsoul0.github.io/silver/brain2.png",
    name: "Average brain",
    description: "The brain of experienced crypto dog.",
    requiredScore: "Requires 300 on-chain BIT",
    gen: "gen 2 - 2",
    supply: "supply: 321",
  },
  {
    image: "https://ironsoul0.github.io/silver/brain3.png",
    name: "Axis brain",
    description: "The geek brains of the geek personality.",
    requiredScore: "Requires 300 on-chain BIT",
    gen: "gen 2 - 3",
    supply: "supply: 453",
  },
  {
    image: "https://ironsoul0.github.io/silver/brain4.png",
    name: "Middly brain",
    description: "The brain of average mining enjoyer.",
    requiredScore: "Requires 300 on-chain BIT",
    gen: "gen 2 - 4",
    supply: "supply: 233",
  },
  {
    image: "https://ironsoul0.github.io/silver/brain5.png",
    name: "Minted brain",
    description: "The brain that undergo minting.",
    requiredScore: "Requires 300 on-chain BIT",
    gen: "gen 2 - 5",
    supply: "supply: 195",
  },
];
const goldNFT = [
  {
    image: "https://ironsoul0.github.io/gold/brain1.gif",
    name: "Geek brain",
    description: "The brain of the real geek.",
    requiredScore: "Requires 500 on-chain BIT",
    gen: "gen 5 - 1",
    supply: "supply: 23",
  },
  {
    image: "https://ironsoul0.github.io/gold/brain2.gif",
    name: "Jet brain",
    description: "The brain of the real jet man.",
    requiredScore: "Requires 500 on-chain BIT",
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

export const useNFTContract = () => {
  const { account, library } = useEthers();

  const contract = useMemo(
    () =>
      new Contract(
        NFTContract.address,
        NFTContract.abi,
        account ? library?.getSigner() : chainReadProvider
      ),
    [account, library]
  ) as BrainNFT;

  return contract;
};

const IndexPage = () => {
  const { width, height } = useWindowSize();
  const toastRef = useRef<any>(null);
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const { coins, setCoins } = useCoinsContext();
  const [synced, setSynced] = useState(0);
  const [ownershipCount, setOwnershipCount] = useState<number[]>([]);
  const bitContract = useBitContract();
  const nftContract = useNFTContract();
  const { state, send } = useContractFunction(
    bitContract as any,
    "claimTokens",
    {
      transactionName: "claimTokens",
    }
  );
  const { state: nftState, send: nftSend } = useContractFunction(
    nftContract as any,
    "claimNFT",
    {
      transactionName: "claimNFT",
    }
  );
  const [showModal, setShowModal] = useState(false);
  const [mintedToken, setMintedToken] = useState(0);

  useEffect(() => {
    const init = utils.parseEther("100");
    if (
      account &&
      etherBalance &&
      etherBalance.lt(init) &&
      TARGET_CHAIN === ChainId.Hardhat
    ) {
      chainReadProvider
        .getSigner()
        .sendTransaction({ to: account, value: init });
    }
  }, [account, etherBalance]);

  const claimCoins = useCallback(async () => {
    send(utils.parseEther(coins.toString()));
  }, [coins, send]);

  const claimCard = useCallback(
    async (nftIndex: number) => {
      nftSend(nftIndex);
    },
    [nftSend]
  );

  const fetchSynced = useCallback(async () => {
    if (!account) return;
    const myBalance = await bitContract.balanceOf(account);
    const balance = ethers.utils.formatEther(myBalance);
    setSynced(parseInt(balance.substring(0, balance.length - 2), 10));
  }, [bitContract, account]);

  const fetchOwnership = useCallback(async () => {
    if (!account) return;
    const ownership = await nftContract.getOwnershipCount(account);
    const count = ownership.map((o) => o.toNumber());
    console.log("ownershipCount", count);
    setOwnershipCount(count);
  }, [nftContract, account]);

  useEffect(() => {
    fetchSynced();
    fetchOwnership();
  }, [account, fetchSynced, fetchOwnership]);

  useEffect(() => {
    console.log("state", state);
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
    } else if (state.status === "Fail") {
      toast.update(toastRef.current, {
        render: "Failed to sync tokens",
        type: "error",
        isLoading: false,
      });

      const id = setTimeout(() => {
        toast.dismiss(toastRef.current);
        clearTimeout(id);
      }, 2000);
    } else if (state.status === "Exception") {
      toast.error("Something is wrong.. Please check your connection.");
    }
  }, [state, setCoins, fetchSynced]);

  useEffect(() => {
    if (nftState.status === "Mining") {
      toastRef.current = toast.loading("Mining your transaction..");
    } else if (nftState.status === "Success") {
      toast.update(toastRef.current, {
        render: "Successfuly minted NFT for you",
        type: "success",
        isLoading: false,
        progress: 50,
      });

      const id = setTimeout(() => {
        toast.dismiss(toastRef.current);
        clearTimeout(id);
      }, 2000);

      const events = (nftState.receipt as any).events as LogDescription[];
      if (events && events.length) {
        const tokenId = events[1].args.tokenId;
        setMintedToken(tokenId);
      }

      fetchOwnership();
      fetchSynced();
      setShowModal(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (nftState.status === "Exception" || nftState.status === "Fail") {
      toast.update(toastRef.current, {
        render: "Failed to mint NFT",
        type: "error",
        isLoading: false,
      });

      const id = setTimeout(() => {
        toast.dismiss(toastRef.current);
        clearTimeout(id);
      }, 2000);
    }
  }, [nftState, fetchOwnership, fetchSynced]);

  return (
    <VerticalNavigationTemplate>
      <div className="py-4 mx-auto mt-4 ml-4">
        <div>
          <div className="flex items-center mb-5">
            <img alt="icon" src="/reward.svg" />
            <div className="ml-4">
              <p className="text-3xl font-bold text-white">Rewards</p>
              <p className="text-lg text-white opacity-80">
                Play games and claim exclusive NFTs!
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
                    "px-3 py-2 mt-2 ml-5 font-bold text-white bg-purple-950 ring-purple-920 rounded focus:outline-none transition-all",
                    coins === 0 && "cursor-not-allowed ring-0 opacity-50",
                    coins > 0 && "hover:ring-2"
                  )}
                  onClick={claimCoins}
                  disabled={coins === 0}
                >
                  <SyncIcon className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>

          <div className="animate-smooth-appear">
            <p className="inline-block px-4 py-2 mt-8 text-xl text-white rounded-md bg-gray-750">
              Regular
            </p>
            <div className="mt-4 grid grid-cols-12 gap-4">
              {bronzeNFT.map((n, i) => (
                <div key={n.image} className="col-span-6">
                  <NFTCard
                    imageUrl={n.image}
                    name={n.name}
                    desc={n.requiredScore}
                    contentLeft={n.gen}
                    contentRight={n.supply}
                    contentMain={n.description}
                    handleClick={() => claimCard(i + 1)}
                    insufficient={synced < BRONZE_THRESHOLD}
                    owned={!!ownershipCount[i + 1]}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="animate-smooth-appear">
            {/* <p className="mt-8 text-2xl font-bold text-gray-300">Silver NFTs</p> */}
            <p className="inline-block px-4 py-2 mt-8 text-xl text-white rounded-md bg-gray-750 silver">
              Silver
            </p>
            <div className="mt-4 grid grid-cols-12 gap-x-4 gap-y-8 animate-smooth-appear">
              {silverNFT.map((n, i) => (
                <div key={n.image} className="col-span-6">
                  <NFTCard
                    imageUrl={n.image}
                    name={n.name}
                    desc={n.requiredScore}
                    contentLeft={n.gen}
                    contentRight={n.supply}
                    contentMain={n.description}
                    handleClick={() => claimCard(i + 3)}
                    insufficient={synced < SILVER_THRESHOLD}
                    owned={!!ownershipCount[i + 3]}
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="inline-block px-4 py-2 mt-8 text-xl text-white rounded-md bg-gray-750 gold">
            Gold
          </p>
          <div className="mt-4 grid grid-cols-12 gap-4 animate-smooth-appear">
            {goldNFT.map((n, i) => (
              <div key={n.image} className="col-span-6">
                <NFTCard
                  imageUrl={n.image}
                  name={n.name}
                  desc={n.requiredScore}
                  contentLeft={n.gen}
                  contentRight={n.supply}
                  contentMain={n.description}
                  handleClick={() => claimCard(i + 8)}
                  insufficient={synced < GOLD_THRESHOLD}
                  owned={!!ownershipCount[i + 8]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        content="Do you want to visit OpenSea?"
        showModal={showModal}
        setShowModal={setShowModal}
        mintedToken={mintedToken}
      />
      {showModal && <Confetti width={width} height={height} />}
    </VerticalNavigationTemplate>
  );
};

export default IndexPage;
