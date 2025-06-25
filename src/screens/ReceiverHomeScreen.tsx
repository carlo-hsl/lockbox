import React from "react";

const MOCK_BALANCE = "1,000 USDT";

const ReceiverHomeScreen: React.FC = () => {
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
        <div style={{ fontSize: 32, marginBottom: 16, color: '#4a9eff' }}>👛</div>
        <h2 style={{ color: '#fff', marginBottom: 8, textAlign: 'center' }}>
          Welcome to Lockbox!
        </h2>
        <div style={{ color: '#999', fontSize: 14, marginBottom: 16, textAlign: 'center' }}>
          Your current balance:
        </div>
        <div style={{ color: '#28a745', fontWeight: 'bold', fontSize: 28, marginBottom: 8 }}>{MOCK_BALANCE}</div>
        <div style={{ color: '#999', fontSize: 14, marginTop: 16, textAlign: 'center' }}>
          You can now send, receive, or withdraw your funds.
        </div>
      </div>
    </div>
  );
};

export default ReceiverHomeScreen; 