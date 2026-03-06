// Mock data layer - simulates async database calls

const recognitions = [
  { id: 1, from: 'Alice Chen', to: 'Bob Martinez', message: 'Great work on the Q4 launch!', points: 50, date: '2026-02-20' },
  { id: 2, from: 'Carlos Rivera', to: 'Diana Kim', message: 'Thanks for helping debug the auth issue', points: 25, date: '2026-02-21' },
  { id: 3, from: 'Bob Martinez', to: 'Alice Chen', message: 'Excellent presentation to the client', points: 75, date: '2026-02-22' },
  { id: 4, from: 'Diana Kim', to: 'Carlos Rivera', message: 'Always willing to pair program', points: 30, date: '2026-02-23' },
  { id: 5, from: 'Alice Chen', to: 'Carlos Rivera', message: 'Quick turnaround on the API fix', points: 40, date: '2026-02-24' },
];

let nextId = 6;

// Simulates an async database call
async function getRecognitions() {
  return [...recognitions].sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function addRecognition({ from, to, message, points }) {
  const recognition = {
    id: nextId++,
    from,
    to,
    message,
    points: Number(points),
    date: new Date().toISOString().split('T')[0],
  };
  recognitions.push(recognition);
  return recognition;
}

function getUsers() {
  return ['Alice Chen', 'Bob Martinez', 'Carlos Rivera', 'Diana Kim', 'Eva Foster'];
}

module.exports = { getRecognitions, addRecognition, getUsers };
