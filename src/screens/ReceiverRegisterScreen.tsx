import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MOCK_REGISTERED_EMAIL = "receiver@example.com"; // For demo, this email is already registered

const passwordRules = [
  { test: (v: string) => v.length >= 8, label: "At least 8 characters" },
  { test: (v: string) => /[A-Z]/.test(v), label: "One uppercase letter" },
  { test: (v: string) => /[a-z]/.test(v), label: "One lowercase letter" },
  { test: (v: string) => /[0-9]/.test(v), label: "One number" },
  { test: (v: string) => /[^A-Za-z0-9]/.test(v), label: "One special character" },
];

const ReceiverRegisterScreen: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as any)?.email || "";
  const amount = (location.state as any)?.amount || "";

  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const allRulesMet = passwordRules.every(rule => rule.test(password));

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (email === MOCK_REGISTERED_EMAIL) {
      // Simulate: email already registered, redirect to login
      navigate("/claim/login", { state: { email, amount } });
      return;
    }
    if (!allRulesMet) {
      setError("Password does not meet all requirements.");
      return;
    }
    if (!agreed) {
      setError("You must agree to the Terms & Conditions and Privacy Policy.");
      return;
    }
    // Simulate registration success
    navigate("/claim", { state: { email, amount, registered: true } });
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
        onSubmit={handleRegister}
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
          Create your Lockbox account
        </h2>
        <div style={{ color: '#999', fontSize: 14, marginBottom: 16, textAlign: 'center' }}>
          To claim <b style={{ color: '#28a745' }}>{amount}</b>, create your account below.
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
          placeholder="Create a password"
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
        <div style={{ width: '100%', marginBottom: 8 }}>
          {passwordRules.map(rule => (
            <div key={rule.label} style={{ color: rule.test(password) ? '#28a745' : '#ff4444', fontSize: 13 }}>
              {rule.label}
            </div>
          ))}
        </div>
        <label style={{ color: '#ccc', fontSize: 13, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
          I agree to the <a href="#" style={{ color: '#4a9eff', textDecoration: 'underline' }}>Terms & Conditions</a> and <a href="#" style={{ color: '#4a9eff', textDecoration: 'underline' }}>Privacy Policy</a>
        </label>
        {error && <div style={{ color: '#ff4444', marginBottom: 8 }}>{error}</div>}
        <button
          type="submit"
          disabled={!password || !allRulesMet || !agreed}
          style={{
            width: '100%',
            maxWidth: 320,
            padding: 16,
            fontSize: 18,
            borderRadius: 8,
            background: (!password || !allRulesMet || !agreed) ? '#2d2d2d' : '#3d3d3d',
            border: '1px solid #4d4d4d',
            color: '#fff',
            fontWeight: 'bold',
            cursor: (!password || !allRulesMet || !agreed) ? 'not-allowed' : 'pointer',
            marginBottom: 8
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default ReceiverRegisterScreen; 