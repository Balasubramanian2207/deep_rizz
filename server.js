import express from "express";
import cors from "cors";
import Sentiment from "sentiment";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const sentiment = new Sentiment();

const getReply = (message) => {
  // Analyze sentiment
  const result = sentiment.analyze(message);
  const score = result.score; // Positive: happy, Negative: sad, 0: neutral

  if (score > 1) {
    return "😄 You seem happy! That's awesome!";
  } else if (score < 0) {
    return "😢 Oh no! Do you want to talk about it?";
  } else {
    return "Interesting! Tell me more about that.";
  }
};

app.post("/api/messages", (req, res) => {
  const { message } = req.body;
  console.log("Message received:", message);

  const reply = getReply(message);
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
