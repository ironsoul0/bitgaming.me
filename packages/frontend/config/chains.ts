import { ChainId } from "@usedapp/core";

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;

export const readOnlyUrls = {
  [ChainId.Mainnet]: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  [ChainId.Ropsten]: `https://ropsten.infura.io/v3/${INFURA_ID}`,
  [ChainId.Hardhat]: "http://localhost:8545",
  [ChainId.Localhost]: "http://localhost:8545",
};

export const TARGET_CHAIN = process.env
  .NEXT_PUBLIC_TARGET_CHAIN_ID as unknown as ChainId;
