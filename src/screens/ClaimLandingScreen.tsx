import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Mock: Assume not authenticated for now
const isAuthenticated = false;
const MOCK_AMOUNT = "1,000 USDT";
const MOCK_EMAIL = "receiver@example.com";

const ClaimLandingScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // In a real app, parse token from location.search

  const handleClaim = () => {
    if (!isAuthenticated) {
      navigate("/claim/register", { state: { email: MOCK_EMAIL, amount: MOCK_AMOUNT } });
    } else {
      // If already authenticated, go to pass phrase entry (not implemented yet)
      // navigate("/claim/passphrase", { state: { amount: MOCK_AMOUNT } });
    }
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
        <div style={{ fontSize: 32, marginBottom: 16, color: '#4a9eff' }}>💸</div>
        <h2 style={{ color: '#fff', marginBottom: 8, textAlign: 'center' }}>
          You've been sent crypto!
        </h2>
        <div style={{ color: '#28a745', fontWeight: 'bold', fontSize: 22, marginBottom: 8 }}>{MOCK_AMOUNT}</div>
        <div style={{ color: '#999', fontSize: 14, marginBottom: 16 }}>Tap below to claim your funds.</div>
        <button
          onClick={handleClaim}
          style={{
            width: '100%',
            maxWidth: 320,
            padding: 16,
            fontSize: 18,
            borderRadius: 8,
            background: '#3d3d3d',
            border: '1px solid #4d4d4d',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: 8
          }}
        >
          Claim Now
        </button>
      </div>
    </div>
  );
};

export default ClaimLandingScreen; 