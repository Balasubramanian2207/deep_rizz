const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Allow requests from the frontend (localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Sample POST endpoint
app.post('/api/messages', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message content is required' });
  }

  console.log('Message received:', message);
  res.status(200).json({ message: 'Message sent successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
