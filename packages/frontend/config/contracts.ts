import { ChainId } from "@usedapp/core";
import BITToken from "artifacts/contracts/BITToken.sol/BITToken.json";
import BrainNFT from "artifacts/contracts/BrainNFT.sol/BrainNFT.json";
import YourContract from "artifacts/contracts/YourContract.sol/YourContract.json";
import { ChainIDUrl, TARGET_CHAIN } from "config";
import { ethers } from "ethers";

const myContractAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  [ChainId.Ropsten]: "0xB394202a75BB251DC3CC45FbD324C44c233FE3F4",
};

const bitTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
  [ChainId.Ropsten]: "0xB394202a75BB251DC3CC45FbD324C44c233FE3F4",
};

const nftTokenAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
  [ChainId.Ropsten]: "0xB394202a75BB251DC3CC45FbD324C44c233FE3F4",
};

export const MyContract = {
  abi: YourContract.abi,
  address: myContractAddresses[TARGET_CHAIN],
  interface: new ethers.utils.Interface(YourContract.abi),
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
