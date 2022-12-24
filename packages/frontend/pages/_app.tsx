import "styles/index.scss";
import "styles/NumberMemory.css";
import "react-toastify/dist/ReactToastify.css";

import {
  ChainId,
  Config,
  DAppProvider,
  MULTICALL_ADDRESSES,
} from "@usedapp/core";
import { readOnlyUrls } from "config";
import { CoinsProvider } from "config/context";
import { Multicall } from "config/contracts";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

const config: Config = {
  readOnlyUrls: { ...readOnlyUrls },
  supportedChains: [
    ChainId.Mainnet,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Ropsten,
    ChainId.Localhost,
    ChainId.Hardhat,
    ChainId.Goerli,
  ],
  multicallAddresses: {
    ...MULTICALL_ADDRESSES,
    [ChainId.Hardhat]: Multicall[ChainId.Hardhat],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <CoinsProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </CoinsProvider>
    </DAppProvider>
  );
}

export default MyApp;
