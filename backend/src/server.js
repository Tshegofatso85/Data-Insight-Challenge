const express = require("express");
const cors = require("cors");
const { getRedditData, getRedditInsight } = require("./service/redditService");

const app = express();
app.use(cors());

app.get("/data", async (req, res) => {
  const response = await getRedditData();
  res.send(response);
});

app.get("/insight", async (req, res) => {
  const response = await getRedditInsight();
  res.send(response);
});

app.listen(5000, async () => {
  console.log(`Server started on port 5000: http://localhost:5000`);
});

module.exports = app;
