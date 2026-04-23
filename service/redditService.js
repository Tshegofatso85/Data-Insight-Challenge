const axios = require("axios");

const getRedditData = async () => {
  try {
    const response = await axios.get("https://www.reddit.com/r/popular.json");
    return response.data;
  } catch (error) {
    console.log(`Error fetching reddit data: ${error.message}`);
    return [];
  }
};

module.exports = { getRedditData };
