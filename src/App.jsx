// Import necessary components from react-router-dom v6
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { MobilePage } from "./sections/main/mobile";
import { HuntagoLegal } from "./sections/main/HuntagoLegal"; // Ensure this component is created
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MobilePage />} />
          <Route path="/huntago_legal" element={<HuntagoLegal />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
