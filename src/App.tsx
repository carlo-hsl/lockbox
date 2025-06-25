import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./screens/StartScreen";
import WalletConnectScreen from "./screens/WalletConnectScreen";
import WalletConnectedScreen from "./screens/WalletConnectedScreen";
import SendDetailsScreen from "./screens/SendDetailsScreen";
import SendApprovalScreen from "./screens/SendApprovalScreen";
import SendSuccessScreen from "./screens/SendSuccessScreen";
import SendConfirmationScreen from "./screens/SendConfirmationScreen";
import ReceiveMessageScreen from "./screens/ReceiveMessageScreen";
import ClaimSuccessScreen from "./screens/ClaimSuccessScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/send/wallet" element={<WalletConnectScreen />} />
        <Route path="/send/wallet-connected" element={<WalletConnectedScreen />} />
        <Route path="/send/details" element={<SendDetailsScreen />} />
        <Route path="/send/approve" element={<SendApprovalScreen />} />
        <Route path="/send/success" element={<SendSuccessScreen />} />
        <Route path="/send/confirmation" element={<SendConfirmationScreen />} />
        <Route path="/receive/message" element={<ReceiveMessageScreen />} />
        <Route path="/receive/claim-success" element={<ClaimSuccessScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
