import { ChainId } from "@usedapp/core";
import { providers } from "ethers";

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;

type ValidChainID = ChainId.Goerli | ChainId.Hardhat;

export type ChainIDUrl = {
  [T in ValidChainID]: string;
};

export const readOnlyUrls: ChainIDUrl = {
  [ChainId.Goerli]: `https://goerli.infura.io/v3/${INFURA_ID}`,
  [ChainId.Hardhat]: `http://localhost:8545`,
};

export const blockExplorers: ChainIDUrl = {
  [ChainId.Goerli]: `https://goerli.etherscan.io`,
  [ChainId.Hardhat]: `https://localhost:8545`,
};

export const TARGET_CHAIN = (parseInt(
  process.env.NEXT_PUBLIC_TARGET_CHAIN_ID as string
) || ChainId.Hardhat) as ValidChainID;

export const isValidChain = (chainId: ChainId) => {
  return chainId == TARGET_CHAIN;
};

export const chainReadProvider = new providers.StaticJsonRpcProvider(
  readOnlyUrls[TARGET_CHAIN]
);
