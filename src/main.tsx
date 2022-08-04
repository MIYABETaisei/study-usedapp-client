import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DAppProvider, Config, Goerli } from "@usedapp/core";

const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/NX9FsfV-iiqhISDbpsY_rQA_Vf9HxXKU",
  },
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>
);
