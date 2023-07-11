/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import { MobilePage } from "./sections/main/mobile";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <MobilePage />
    </NextUIProvider>
  );
}

export default App;
