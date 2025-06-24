import React from "react";
import { useNavigate } from "react-router-dom";

const WalletConnectedScreen: React.FC = () => {
  const navigate = useNavigate();
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
      <h2 style={{ color: '#ffffff', marginBottom: 24 }}>Wallet Connected!</h2>
      <div style={{ fontSize: 48, margin: 24 }}>✅</div>
      <button 
        style={{ 
          width: '100%', 
          maxWidth: 320, 
          padding: 16, 
          fontSize: 18,
          borderRadius: 8,
          background: '#3d3d3d',
          border: '1px solid #4d4d4d'
        }} 
        onClick={() => navigate('/send/details')}
      >
        Continue
      </button>
    </div>
  );
};

export default WalletConnectedScreen; 