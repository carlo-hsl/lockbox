import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SendConfirmationScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Get state from navigation
  const { amount, requirePassword, password, receiverId } = (location.state || {}) as any;
  const shareUrl = `https://lockbox.app/claim?tx=MOCK12345`;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
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
      <h2 style={{ color: '#ffffff', marginBottom: 24 }}>Transaction Summary</h2>
      
      <div style={{ 
        background: '#2d2d2d', 
        borderRadius: 12, 
        padding: 20, 
        margin: 12, 
        width: '100%', 
        maxWidth: 340,
        border: '1px solid #3d3d3d'
      }}>
        <div style={{ marginBottom: 12 }}><b style={{ color: '#999' }}>Amount:</b> {amount} USDT</div>
        <div style={{ marginBottom: 12 }}><b style={{ color: '#999' }}>Receiver:</b> {receiverId}</div>
        <div style={{ marginBottom: 12 }}><b style={{ color: '#999' }}>Password Required:</b> {requirePassword ? 'Yes' : 'No'}</div>
        {requirePassword && <div style={{ marginBottom: 12 }}><b style={{ color: '#999' }}>Password:</b> {password}</div>}
      </div>
      
      <div style={{ margin: 20, textAlign: 'center' }}>
        <div style={{ color: '#999', marginBottom: 8 }}><b>Share this link with the receiver:</b></div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 8,
          marginTop: 8
        }}>
          <div style={{ 
            wordBreak: 'break-all', 
            color: '#4a9eff', 
            background: '#2d2d2d',
            padding: 12,
            borderRadius: 8,
            border: '1px solid #3d3d3d',
            fontSize: 14,
            maxWidth: 220,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }} title={shareUrl}>
            {shareUrl}
          </div>
          <button 
            onClick={handleCopy}
            style={{ 
              background: '#222', 
              color: '#fff', 
              border: '1px solid #444', 
              borderRadius: 6, 
              padding: '8px 12px', 
              fontSize: 14, 
              cursor: 'pointer',
              minWidth: 60
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      <button 
        style={{ 
          width: '100%', 
          maxWidth: 320, 
          padding: 16, 
          fontSize: 18, 
          marginTop: 16,
          borderRadius: 8,
          background: '#3d3d3d',
          border: '1px solid #4d4d4d'
        }} 
        onClick={() => navigate('/')}
      >
        Continue
      </button>
      
      <button 
        style={{ 
          background: 'none', 
          border: 'none', 
          color: '#999', 
          marginTop: 16, 
          textDecoration: 'underline', 
          fontSize: 14,
          cursor: 'pointer'
        }} 
        onClick={() => navigate('/send/details')}
      >
        Do you want to send another transaction?
      </button>
    </div>
  );
};

export default SendConfirmationScreen; 