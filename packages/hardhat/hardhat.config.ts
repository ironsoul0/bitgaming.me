import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "dotenv/config";

import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  solidity: "0.8.3",
  // networks: {
  //   ropsten: {
  //     url: process.env.ROPSTEN_URL,
  //     accounts: [process.env.PRIVATE_KEY || ""],
  //   },
  // },
  typechain: {
    outDir: "./types/typechain",
    target: "ethers-v5",
  },
};

export default config;
