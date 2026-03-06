import { useState } from 'react';

export default function KudosFeed({ recognitions }) {
  const [search, setSearch] = useState('');

  const filtered = recognitions.filter(
    (r) =>
      r.to.includes(search) ||
      r.from.includes(search) ||
      r.message.includes(search)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search recognitions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 16,
          boxSizing: 'border-box',
          borderRadius: 6,
          border: '1px solid #ccc',
          fontSize: 14,
        }}
      />

      {filtered.length === 0 ? (
        <p style={{ color: '#888', textAlign: 'center', padding: 40 }}>
          No recognitions found.
        </p>
      ) : (
        filtered.map((r) => (
          <div
            key={r.id}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: 8,
              padding: 16,
              marginBottom: 12,
              background: '#fafafa',
            }}
          >
            <div>
              <strong>{r.from}</strong> → <strong>{r.to}</strong>
              <span style={{ float: 'right', color: '#2e7d32', fontWeight: 'bold' }}>
                +{r.points} pts
              </span>
            </div>
            <p style={{ margin: '8px 0 4px', color: '#333' }}>{r.message}</p>
            <small style={{ color: '#999' }}>{r.date}</small>
          </div>
        ))
      )}
    </div>
  );
}
