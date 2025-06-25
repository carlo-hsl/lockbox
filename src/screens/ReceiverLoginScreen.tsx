import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MOCK_EMAIL = "receiver@example.com";
const MOCK_PASSWORD = "DemoPass1!";

const ReceiverLoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as any)?.email || "";
  const amount = (location.state as any)?.amount || "";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // For mock/demo, allow any email/password
    navigate("/receive/message", { state: { email, amount, loggedIn: true } });
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
      <form
        onSubmit={handleLogin}
        style={{
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
        }}
      >
        <h2 style={{ color: '#fff', marginBottom: 8, textAlign: 'center' }}>
          Log in to claim your crypto
        </h2>
        <div style={{ color: '#999', fontSize: 14, marginBottom: 16, textAlign: 'center' }}>
          To claim <b style={{ color: '#28a745' }}>{amount}</b>, log in below.
        </div>
        <input
          type="email"
          value={email}
          disabled
          style={{
            width: '100%',
            maxWidth: 320,
            padding: 12,
            margin: '8px 0',
            fontSize: 16,
            borderRadius: 8,
            background: '#232323',
            border: '1px solid #3d3d3d',
            color: '#fff',
            marginBottom: 8
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            maxWidth: 320,
            padding: 12,
            margin: '8px 0',
            fontSize: 16,
            borderRadius: 8,
            background: '#232323',
            border: '1px solid #3d3d3d',
            color: '#fff',
            marginBottom: 8
          }}
        />
        {error && <div style={{ color: '#ff4444', marginBottom: 8 }}>{error}</div>}
        <button
          type="submit"
          disabled={!password}
          style={{
            width: '100%',
            maxWidth: 320,
            padding: 16,
            fontSize: 18,
            borderRadius: 8,
            background: !password ? '#2d2d2d' : '#3d3d3d',
            border: '1px solid #4d4d4d',
            color: '#fff',
            fontWeight: 'bold',
            cursor: !password ? 'not-allowed' : 'pointer',
            marginBottom: 8
          }}
        >
          Log In
        </button>
        <div style={{ color: '#999', fontSize: 13, marginTop: 8 }}>
          Forgot password?
        </div>
      </form>
    </div>
  );
};

export default ReceiverLoginScreen; 