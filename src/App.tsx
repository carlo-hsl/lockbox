import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./screens/StartScreen";
import WalletConnectScreen from "./screens/WalletConnectScreen";
import WalletConnectedScreen from "./screens/WalletConnectedScreen";
import SendDetailsScreen from "./screens/SendDetailsScreen";
import SendSuccessScreen from "./screens/SendSuccessScreen";
import SendConfirmationScreen from "./screens/SendConfirmationScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/send/wallet" element={<WalletConnectScreen />} />
        <Route path="/send/wallet-connected" element={<WalletConnectedScreen />} />
        <Route path="/send/details" element={<SendDetailsScreen />} />
        <Route path="/send/success" element={<SendSuccessScreen />} />
        <Route path="/send/confirmation" element={<SendConfirmationScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
