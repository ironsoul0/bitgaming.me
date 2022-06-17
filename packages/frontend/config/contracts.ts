import { ChainId } from "@usedapp/core";
import YourContract from "artifacts/contracts/YourContract.sol/YourContract.json";
import { ChainIDUrl, TARGET_CHAIN } from "config";
import { ethers } from "ethers";

const myContractAddresses: ChainIDUrl = {
  [ChainId.Hardhat]: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  [ChainId.Ropsten]: "0xB394202a75BB251DC3CC45FbD324C44c233FE3F4",
};

export const MyContract = {
  abi: YourContract.abi,
  address: myContractAddresses[TARGET_CHAIN],
  interface: new ethers.utils.Interface(YourContract.abi),
};

export const Multicall = {
  [ChainId.Hardhat]: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
};
