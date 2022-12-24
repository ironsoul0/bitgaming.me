import { ChainId } from "@usedapp/core";
import BITToken from "artifacts/contracts/BITToken.sol/BITToken.json";
import BrainNFT from "artifacts/contracts/BrainNFT.sol/BrainNFT.json";
import { ChainIDUrl, TARGET_CHAIN } from "config";

const bitTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",
  [ChainId.Goerli]: "0x032b33471C9EF4E88844D846C22E9423fEB99155",
};

const nftTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x8a791620dd6260079bf849dc5567adc3f2fdc318",
  [ChainId.Goerli]: "0xf300cA633C836bB98d5efD063a5C34e13cDAc6Cc",
};

export const BITContract = {
  abi: BITToken.abi,
  address: bitTokenAddresses[TARGET_CHAIN],
};

export const NFTContract = {
  abi: BrainNFT.abi,
  address: nftTokenAddresses[TARGET_CHAIN],
};

export const Multicall = {
  [ChainId.Hardhat]: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
};
