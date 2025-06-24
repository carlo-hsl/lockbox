import React from "react";
import { useNavigate } from "react-router-dom";

const StartScreen: React.FC = () => {
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
      <h1 style={{ color: '#ffffff', marginBottom: 32 }}>Crypto Lockbox</h1>
      <button 
        style={{ 
          width: '100%', 
          maxWidth: 320, 
          padding: 16, 
          margin: 8, 
          fontSize: 18,
          borderRadius: 8,
          background: '#3d3d3d',
          border: '1px solid #4d4d4d'
        }} 
        onClick={() => navigate('/send/wallet')}
      >
        Send
      </button>
      <button 
        style={{ 
          width: '100%', 
          maxWidth: 320, 
          padding: 16, 
          margin: 8, 
          fontSize: 18,
          borderRadius: 8,
          background: '#2d2d2d',
          border: '1px solid #3d3d3d',
          color: '#666666'
        }} 
        disabled
      >
        Receive (coming soon)
      </button>
    </div>
  );
};

export default StartScreen; 