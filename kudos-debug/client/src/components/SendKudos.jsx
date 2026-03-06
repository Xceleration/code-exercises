import { useState, useEffect } from 'react';
import { fetchUsers, sendRecognition } from '../api';

export default function SendKudos({ onSuccess }) {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ from: '', to: '', message: '', points: 25 });
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await sendRecognition(form);
      setStatus('Kudos sent! 🎉');
      setForm({ from: '', to: '', message: '', points: 25 });
      onSuccess();
    } catch (err) {
      setStatus('Error sending kudos. Please try again.');
    }
  }

  const inputStyle = {
    width: '100%',
    padding: 8,
    borderRadius: 4,
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: 14,
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 4 }}>From:</label>
        <select
          value={form.from}
          onChange={(e) => setForm({ ...form, from: e.target.value })}
          required
          style={inputStyle}
        >
          <option value="">Select yourself...</option>
          {users.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 4 }}>To:</label>
        <select
          value={form.to}
          onChange={(e) => setForm({ ...form, to: e.target.value })}
          required
          style={inputStyle}
        >
          <option value="">Select a teammate...</option>
          {users.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 4 }}>Message:</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          placeholder="What did they do that was awesome?"
          style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 4 }}>
          Points: {form.points}
        </label>
        <input
          type="range"
          min="10"
          max="100"
          step="5"
          value={form.points}
          onChange={(e) => setForm({ ...form, points: parseInt(e.target.value) })}
          style={{ width: '100%' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#888' }}>
          <span>10</span>
          <span>100</span>
        </div>
      </div>

      <button
        type="submit"
        style={{
          background: '#1976d2',
          color: 'white',
          border: 'none',
          padding: '10px 24px',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: 14,
          fontWeight: 'bold',
        }}
      >
        Send Kudos 🎉
      </button>

      {status && (
        <p style={{ marginTop: 12, color: status.includes('Error') ? '#d32f2f' : '#2e7d32' }}>
          {status}
        </p>
      )}
    </form>
  );
}
