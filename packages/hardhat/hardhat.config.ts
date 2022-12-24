import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "dotenv/config";
import "@nomiclabs/hardhat-etherscan";

import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  solidity: "0.8.3",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY || "",
  },
  typechain: {
    outDir: "./types/typechain",
    target: "ethers-v5",
  },
};

export default config;
