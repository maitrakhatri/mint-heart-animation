import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { createClient, WagmiConfig } from "wagmi";
// import { SafeConnector } from "wagmi/connectors/safe";
// import { chains, provider } from "./utils/chain";
// import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const { connectors } = getDefaultWallets({
//   appName: "Fileverse",
//   projectId: "ff71575e67eb530fe9b1a99d0a1d8a37",
//   chains,
// });

// const rainbowKitConnectors = connectors();

// const wagmiClient = createClient({
//   connectors: [
//     new SafeConnector({
//       chains,
//       options: {
//         allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
//         debug: false,
//       },
//     }),
//     ...rainbowKitConnectors,
//   ],
//   provider,
//   autoConnect: true,
// });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
