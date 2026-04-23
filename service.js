const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const response = await axios.get("https://www.reddit.com/r/popular.json");
  res.send(response.data);
});

app.listen(3000, async () => {
  console.log(`Server started on port 3000: http://localhost:3000`);
});

module.exports = app;
