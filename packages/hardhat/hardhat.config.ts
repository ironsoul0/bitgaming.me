import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";

import { HardhatUserConfig } from "hardhat/types";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: "0.8.3",
  paths: {
    artifacts: "../frontend/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  typechain: {
    outDir: "../frontend/types/typechain",
    target: "web3-v1",
  },
};

export default config;
