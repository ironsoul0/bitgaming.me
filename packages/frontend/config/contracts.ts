import { ChainId } from "@usedapp/core";
import BITToken from "artifacts/contracts/BITToken.sol/BITToken.json";
import BrainNFT from "artifacts/contracts/BrainNFT.sol/BrainNFT.json";
import { ChainIDUrl, TARGET_CHAIN } from "config";

const bitTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
  [ChainId.Rinkeby]: "0xC2811f398eDD75a04cDCA9C0071F896EDC57e3CE",
};

const nftTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
  [ChainId.Rinkeby]: "0x01487DA7429C891eFC5a1A9903a38FE42847618d",
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
