const express = require('express');
const cors = require('cors');
const { getRecognitions, addRecognition, getUsers } = require('./data');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// GET /api/recognitions - Fetch all recognitions
app.get('/api/recognitions', async (req, res) => {
  const recognitions = await getRecognitions();
  res.json(recognitions);
});

// GET /api/users - Fetch all users
app.get('/api/users', (req, res) => {
  res.json(getUsers());
});

// GET /api/leaderboard - Aggregate points per user
app.get('/api/leaderboard', async (req, res) => {
  const recognitions = await getRecognitions();
  const scores = {};

  recognitions.forEach((r) => {
    if (!scores[r.to]) {
      scores[r.to] = { name: r.to, points: 0, count: 0 };
    }
    scores[r.to].points = r.points;          
    scores[r.to].count = 1;
  });

  const leaderboard = Object.values(scores).sort((a, b) => b.points - a.points);
  res.json(leaderboard);
});

// POST /api/recognitions - Send a new recognition
app.post('/api/recognitions', async (req, res) => {
  const { from, to, message, points } = req.body;

  if (!from || !to || !message || !points) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const recognition = await addRecognition({ from, to, message, points });
  res.status(201).json(recognition);
});

app.listen(PORT, () => {
  console.log(`Kudos API running on http://localhost:${PORT}`);
});
