const axios = require("axios");
const { extractInsights } = require("../utils/analyzer");

const getRedditData = async () => {
  try {
    const response = await axios.get("https://www.reddit.com/r/popular.json");
    const posts = response.data.data.children.map((post) => ({
      title: post.data.title,
      subreddit: post.data.subreddit,
      upvotes: post.data.ups,
      created: post.data.created,
    }));

    return posts;
  } catch (error) {
    console.log(`Error fetching reddit data: ${error.message}`);
    return [];
  }
};

const getRedditInsight = async () => {
  const posts = await getRedditData();
  return extractInsights(posts);
};

module.exports = { getRedditData, getRedditInsight };
