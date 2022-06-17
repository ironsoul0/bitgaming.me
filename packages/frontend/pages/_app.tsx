import "styles/index.scss";

import {
  ChainId,
  Config,
  DAppProvider,
  MULTICALL_ADDRESSES,
} from "@usedapp/core";
import { readOnlyUrls } from "config";
import { Multicall } from "config/contracts";
import type { AppProps } from "next/app";

const config: Config = {
  readOnlyUrls: { ...readOnlyUrls },
  supportedChains: [
    ChainId.Mainnet,
    ChainId.Kovan,
    ChainId.Rinkeby,
    ChainId.Ropsten,
    ChainId.Localhost,
    ChainId.Hardhat,
  ],
  multicallAddresses: {
    ...MULTICALL_ADDRESSES,
    [ChainId.Hardhat]: Multicall[ChainId.Hardhat],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
