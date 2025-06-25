import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ClaimSuccessScreen: React.FC = () => {
  const navigate = useNavigate();

  // Auto-navigate back to main app after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

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
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: '#232323',
          border: '1px solid #3d3d3d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 40,
          marginBottom: 24,
          animation: 'popIn 0.5s ease-out'
        }}>
          ✅
        </div>
        <h2 style={{ color: '#fff', marginBottom: 16, textAlign: 'center', animation: 'fadeIn 0.5s ease-out 0.3s both' }}>
          Funds Claimed Successfully!
        </h2>
        <div style={{ color: '#999', marginBottom: 20, textAlign: 'center', fontSize: 15 }}>
          1,000 USDT has been transferred to your wallet
        </div>
        <div style={{
          background: '#232323',
          borderRadius: 12,
          padding: 16,
          width: '100%',
          border: '1px solid #3d3d3d',
          marginBottom: 16
        }}>
          <div style={{ color: '#999', fontSize: 14, marginBottom: 4 }}>From</div>
          <div style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>John Doe</div>
          <div style={{ color: '#999', fontSize: 14, marginBottom: 4 }}>Network</div>
          <div style={{ color: '#fff', fontSize: 14, marginBottom: 8 }}>Tron</div>
          <div style={{ color: '#999', fontSize: 14, marginBottom: 4 }}>Transaction ID</div>
          <div style={{ color: '#4a9eff', fontSize: 12, fontFamily: 'monospace', wordBreak: 'break-all' }}>0x1234...5678</div>
        </div>
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%',
            maxWidth: 320,
            padding: 16,
            fontSize: 18,
            marginTop: 8,
            borderRadius: 8,
            background: '#3d3d3d',
            border: '1px solid #4d4d4d',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: 8
          }}
        >
          Done
        </button>
      </div>
      <style>
        {`
          @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ClaimSuccessScreen; 