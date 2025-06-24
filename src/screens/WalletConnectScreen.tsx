import React from "react";
import { useNavigate } from "react-router-dom";

const wallets = [
  { name: "MetaMask", icon: "🦊" },
  { name: "Phantom", icon: "👻" },
  { name: "Jupiter", icon: "🪐" },
];

const WalletConnectScreen: React.FC = () => {
  const navigate = useNavigate();
  const handleConnect = (wallet: string) => {
    // Mock connect
    setTimeout(() => navigate("/send/wallet-connected"), 500);
  };
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 24,
      background: 'linear-gradient(to bottom, #1a1a1a, #2d2d2d)'
    }}>
      <h2 style={{ color: '#ffffff', marginBottom: 32 }}>Connect your wallet</h2>
      {wallets.map(w => (
        <button 
          key={w.name} 
          style={{ 
            width: '100%', 
            maxWidth: 320, 
            padding: 16, 
            margin: 8, 
            fontSize: 18,
            borderRadius: 8,
            background: '#3d3d3d',
            border: '1px solid #4d4d4d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
          onClick={() => handleConnect(w.name)}
        >
          <span style={{ marginRight: 12, fontSize: 24 }}>{w.icon}</span>
          {w.name}
        </button>
      ))}
    </div>
  );
};

export default WalletConnectScreen; 