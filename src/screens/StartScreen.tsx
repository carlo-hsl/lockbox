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
      
      {/* Demo Button */}
      <div style={{ marginTop: 32, textAlign: 'center' }}>
        <div style={{ color: '#999', marginBottom: 8, fontSize: 14 }}>Demo</div>
        <button 
          style={{ 
            padding: 12, 
            fontSize: 14,
            borderRadius: 6,
            background: '#1a1a1a',
            border: '1px solid #3d3d3d',
            color: '#999',
            cursor: 'pointer'
          }} 
          onClick={() => navigate('/receive/message')}
        >
          View Receive Message Demo
        </button>
      </div>
    </div>
  );
};

export default StartScreen; 