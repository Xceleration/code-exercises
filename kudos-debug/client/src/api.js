const API_BASE = 'http://localhost:3001/api';

export async function fetchRecognitions() {
  const res = await fetch(`${API_BASE}/recognitions`);
  return res.json();
}

export async function fetchUsers() {
  const res = await fetch(`${API_BASE}/users`);
  return res.json();
}

export async function fetchLeaderboard() {
  const res = await fetch(`${API_BASE}/leaderboard`);
  return res.json();
}

export async function sendRecognition(data) {
  const res = await fetch(`${API_BASE}/recognitions`, {
    method: 'POST',
    body: data                              
  });
  if (!res.ok) {
    throw new Error('Failed to send recognition');
  }
  return res.json();
}
