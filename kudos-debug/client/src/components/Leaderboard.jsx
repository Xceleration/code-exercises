import { useState, useEffect } from 'react';
import { fetchLeaderboard } from '../api';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetchLeaderboard().then(setLeaders);
  }, []);

  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Points Leaderboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th style={{ textAlign: 'left', padding: 10 }}>Rank</th>
            <th style={{ textAlign: 'left', padding: 10 }}>Name</th>
            <th style={{ textAlign: 'right', padding: 10 }}>Points</th>
            <th style={{ textAlign: 'right', padding: 10 }}>Recognitions</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((l, i) => (
            <tr key={l.name} style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: 10 }}>{medals[i] || i + 1}</td>
              <td style={{ padding: 10, fontWeight: i < 3 ? 'bold' : 'normal' }}>{l.name}</td>
              <td style={{ textAlign: 'right', padding: 10, color: '#2e7d32', fontWeight: 'bold' }}>
                {l.points}
              </td>
              <td style={{ textAlign: 'right', padding: 10 }}>{l.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
