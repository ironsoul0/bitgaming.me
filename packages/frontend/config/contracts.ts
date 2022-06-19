import { ChainId } from "@usedapp/core";
import BITToken from "artifacts/contracts/BITToken.sol/BITToken.json";
import BrainNFT from "artifacts/contracts/BrainNFT.sol/BrainNFT.json";
import { ChainIDUrl, TARGET_CHAIN } from "config";

const bitTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
  [ChainId.Rinkeby]: "0x2C04c3Faf3040eA42A6887eC230Cf0a397eb28a2",
};

const nftTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
  [ChainId.Rinkeby]: "0xB94DDe6743f073de10943665302b3493e464aa02",
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
