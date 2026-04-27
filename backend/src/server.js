const express = require("express");
const cors = require("cors");
const { getRedditData, getRedditInsight } = require("./service/redditService");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/data", async (req, res) => {
  const response = await getRedditData();
  res.send(response);
});

app.get("/insight", async (req, res) => {
  const response = await getRedditInsight();
  res.send(response);
});

app.listen(PORT, async () => {
  console.log(`Server started on port ${PORT}: http://localhost:${PORT}`);
});

module.exports = app;
