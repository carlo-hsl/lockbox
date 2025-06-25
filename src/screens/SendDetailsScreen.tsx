import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SendDetailsScreen: React.FC = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [requirePassword, setRequirePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !receiverId || (requirePassword && !password) || !confirmed) return;
    navigate("/send/approve", { state: { amount, requirePassword, password, receiverId } });
  };

  const inputStyle = {
    width: '100%',
    maxWidth: 320,
    padding: 12,
    margin: 8,
    fontSize: 16,
    borderRadius: 8,
    background: '#2d2d2d',
    border: '1px solid #3d3d3d',
    color: '#ffffff'
  };

  const labelStyle = {
    margin: 8,
    color: '#cccccc',
    display: 'flex',
    alignItems: 'center',
    gap: 8
  };

  return (
    <form 
      onSubmit={handleContinue} 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 24,
        background: 'linear-gradient(to bottom, #1a1a1a, #2d2d2d)'
      }}
    >
      <h2 style={{ color: '#ffffff', marginBottom: 24 }}>Send USDT (Tron)</h2>
      
      <input 
        type="number" 
        placeholder="Amount" 
        value={amount} 
        onChange={e => setAmount(e.target.value)} 
        style={inputStyle}
        required 
      />
      
      <label style={labelStyle}>
        <input 
          type="checkbox" 
          checked={requirePassword} 
          onChange={e => setRequirePassword(e.target.checked)}
        />
        Require password to claim
      </label>
      
      {requirePassword && (
        <input 
          type="password" 
          placeholder="Password for receiver" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          style={inputStyle}
          required 
        />
      )}
      
      <input 
        type="text" 
        placeholder="Receiver Email or Phone" 
        value={receiverId} 
        onChange={e => setReceiverId(e.target.value)} 
        style={inputStyle}
        required 
      />
      
      <label style={labelStyle}>
        <input 
          type="checkbox" 
          checked={confirmed} 
          onChange={e => setConfirmed(e.target.checked)} 
          required 
        />
        I confirm the details are correct
      </label>
      
      <button 
        type="submit" 
        style={{ 
          width: '100%', 
          maxWidth: 320, 
          padding: 16, 
          fontSize: 18, 
          marginTop: 16,
          borderRadius: 8,
          background: confirmed ? '#3d3d3d' : '#2d2d2d',
          border: `1px solid ${confirmed ? '#4d4d4d' : '#3d3d3d'}`,
          opacity: (!amount || !receiverId || (requirePassword && !password) || !confirmed) ? 0.5 : 1
        }} 
        disabled={!amount || !receiverId || (requirePassword && !password) || !confirmed}
      >
        Continue
      </button>
    </form>
  );
};

export default SendDetailsScreen; 