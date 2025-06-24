import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SendSuccessScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const transactionData = location.state;

  // Auto-navigate to summary after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/send/confirmation', { state: transactionData });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate, transactionData]);

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
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: '#2d2d2d',
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
      
      <h2 style={{ 
        color: '#ffffff', 
        marginBottom: 16,
        animation: 'fadeIn 0.5s ease-out 0.3s both'
      }}>
        Transaction Sent!
      </h2>
      
      <p style={{ 
        color: '#999', 
        textAlign: 'center',
        animation: 'fadeIn 0.5s ease-out 0.5s both'
      }}>
        {transactionData?.amount} USDT has been locked in the smart contract
      </p>

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

export default SendSuccessScreen; 