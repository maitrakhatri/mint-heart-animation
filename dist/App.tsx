import React, { useRef } from "react";
import Mint from "./components/Mint";

export default function App() {
  const connectButtonRef = useRef<HTMLButtonElement>(null);
  return <Mint connectButtonRef={connectButtonRef} />;
}
