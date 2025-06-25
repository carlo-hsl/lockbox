import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReceiveMessageScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isClaiming, setIsClaiming] = useState(false);

  const handleClaim = () => {
    setIsClaiming(true);
    setTimeout(() => {
      navigate('/receive/claim-success');
    }, 2000);
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
      <div style={{
        background: '#2d2d2d',
        borderRadius: 16,
        padding: 32,
        maxWidth: 360,
        width: '100%',
        border: '1px solid #3d3d3d',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          fontSize: 32,
          marginBottom: 16,
          color: '#4a9eff',
        }}>💬</div>
        <h2 style={{ color: '#fff', marginBottom: 8, textAlign: 'center' }}>
          John Doe sent you crypto!
        </h2>
        <div style={{
          background: '#232323',
          borderRadius: 12,
          padding: 16,
          margin: '16px 0',
          width: '100%',
          border: '1px solid #3d3d3d',
          marginBottom: 16
        }}>
          <div style={{ color: '#999', fontSize: 14, marginBottom: 4 }}>Amount</div>
          <div style={{ color: '#28a745', fontWeight: 'bold', fontSize: 22, marginBottom: 8 }}>1,000 USDT</div>
          <div style={{ color: '#999', fontSize: 13, marginBottom: 8 }}>On Tron Network</div>
          <div style={{ color: '#aaa', fontSize: 13, marginBottom: 8 }}>
            💬 "Here's the payment for the project. Password: <b>crypto123</b>"
          </div>
        </div>
        <button
          onClick={handleClaim}
          disabled={isClaiming}
          style={{
            width: '100%',
            maxWidth: 320,
            padding: 16,
            fontSize: 18,
            marginTop: 8,
            borderRadius: 8,
            background: isClaiming ? '#28a745' : '#3d3d3d',
            border: `1px solid ${isClaiming ? '#28a745' : '#4d4d4d'}`,
            color: '#fff',
            fontWeight: 'bold',
            cursor: isClaiming ? 'not-allowed' : 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 0.2s, border 0.2s',
            marginBottom: 8
          }}
        >
          {isClaiming ? 'Claiming...' : 'Claim Now'}
          {isClaiming && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              animation: 'shimmer 1s infinite',
            }} />
          )}
        </button>
        <div style={{ color: '#999', fontSize: 12, marginTop: 12, textAlign: 'center' }}>
          🔒 This is a secure message from Lockbox. Never share your private keys or passwords with anyone.
        </div>
      </div>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </div>
  );
};

export default ReceiveMessageScreen; 