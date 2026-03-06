import { useState, useEffect } from 'react';
import KudosFeed from './components/KudosFeed';
import SendKudos from './components/SendKudos';
import Leaderboard from './components/Leaderboard';
import { fetchRecognitions } from './api';

export default function App() {
  const [recognitions, setRecognitions] = useState([]);
  const [activeTab, setActiveTab] = useState('feed');

  useEffect(() => {
    loadRecognitions();
  }, []);

  async function loadRecognitions() {
    const data = await fetchRecognitions();
    setRecognitions(data);
  }

  function handleNewRecognition() {
    console.log('Recognition sent!');
  }

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20, fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: 4 }}>🏆 Kudos Board</h1>
      <p style={{ color: '#666', marginTop: 0, marginBottom: 20 }}>Recognize your teammates</p>

      <nav style={{ display: 'flex', gap: 8, marginBottom: 24, borderBottom: '1px solid #ddd', paddingBottom: 12 }}>
        {['feed', 'send', 'leaderboard'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              background: activeTab === tab ? '#1976d2' : '#f0f0f0',
              color: activeTab === tab ? '#fff' : '#333',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
            }}
          >
            {tab === 'feed' ? '📋 Feed' : tab === 'send' ? '🎉 Send Kudos' : '🥇 Leaderboard'}
          </button>
        ))}
      </nav>

      {activeTab === 'feed' && <KudosFeed recognitions={recognitions} />}
      {activeTab === 'send' && <SendKudos onSuccess={handleNewRecognition} />}
      {activeTab === 'leaderboard' && <Leaderboard />}
    </div>
  );
}
