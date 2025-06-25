import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SendApprovalScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, requirePassword, password, receiverId } = (location.state || {}) as any;
  const [isApproving, setIsApproving] = useState(false);

  const handleApprove = () => {
    setIsApproving(true);
    // Mock transaction approval delay
    setTimeout(() => {
      navigate('/send/success', { 
        state: { amount, requirePassword, password, receiverId } 
      });
    }, 1500);
  };

  const handleReject = () => {
    navigate('/send/details');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24
    }}>
      <div style={{
        background: '#2d2d2d',
        borderRadius: 16,
        padding: 24,
        width: '100%',
        maxWidth: 380,
        border: '1px solid #3d3d3d',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 20,
          padding: '0 12px'
        }}>
          <span style={{ fontSize: 24, marginRight: 12 }}>🦊</span>
          <h3 style={{ margin: 0, color: '#ffffff' }}>MetaMask</h3>
        </div>

        <div style={{
          background: '#1a1a1a',
          borderRadius: 12,
          padding: 16,
          marginBottom: 20
        }}>
          <div style={{ color: '#999', marginBottom: 8 }}>Transaction Details</div>
          <div style={{ marginBottom: 12 }}>
            <div style={{ color: '#666' }}>Amount</div>
            <div style={{ color: '#fff', fontSize: 20 }}>{amount} USDT</div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <div style={{ color: '#666' }}>To</div>
            <div style={{ color: '#fff', fontSize: 14 }}>Lockbox Smart Contract</div>
          </div>
          {requirePassword && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ color: '#666' }}>Pass Phrase</div>
              <div style={{ color: '#fff', fontSize: 14 }}>{password}</div>
            </div>
          )}
          <div>
            <div style={{ color: '#666' }}>Network Fee</div>
            <div style={{ color: '#fff', fontSize: 14 }}>~$2.50</div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: 12
        }}>
          <button
            onClick={handleReject}
            style={{
              flex: 1,
              padding: 12,
              fontSize: 16,
              borderRadius: 8,
              background: '#1a1a1a',
              border: '1px solid #3d3d3d',
              color: '#ff4444'
            }}
            disabled={isApproving}
          >
            Reject
          </button>
          <button
            onClick={handleApprove}
            style={{
              flex: 1,
              padding: 12,
              fontSize: 16,
              borderRadius: 8,
              background: isApproving ? '#2d6c3e' : '#1a472a',
              border: '1px solid #2d6c3e',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden'
            }}
            disabled={isApproving}
          >
            {isApproving ? 'Approving...' : 'Approve'}
            {isApproving && (
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

export default SendApprovalScreen; 