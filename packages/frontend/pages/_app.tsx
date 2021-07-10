import "styles/index.scss";

import { ChainId, Config, DAppProvider } from "@usedapp/core";
import type { AppProps } from "next/app";

const config: Config = {
  supportedChains: [ChainId.Mainnet, ChainId.Localhost, ChainId.Hardhat],
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
