import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";

import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  defaultNetwork: "localhost",
  solidity: "0.8.3",
  paths: {
    artifacts: "../frontend/artifacts",
  },
  typechain: {
    outDir: "../frontend/types/typechain",
    target: "ethers-v5",
  },
};

export default config;
