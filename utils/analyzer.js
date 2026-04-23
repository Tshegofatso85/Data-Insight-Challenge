const { eng } = require("stopword");

const stopWords = new Set(eng);

function getKeywords(titles) {
  const wordsCount = {};

  titles.forEach((title) => {
    const words = title
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(" ");

    words.forEach((word) => {
      if (!stopWords.has(word) && word.length > 2) {
        wordsCount[word] = (wordsCount[word] || 0) + 1;
      }
    });
  });

  return Object.entries(wordsCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([word, count]) => ({ word, count }));
}

function getSubredditStats(posts) {
  const stats = {};
  posts.forEach((post) => {
    stats[post.subreddit] = (stats[post.subreddit] || 0) + 1;
  });

  return stats;
}

function getEngagement(posts) {
  const sortedPosts = [...posts].sort((a, b) => b.upvotes - a.upvotes);
  const topPosts = sortedPosts.slice(0, 5);

  const avgUpvotes =
    posts.reduce((total, post) => total + post.upvotes, 0) / posts.length;

  return {
    topPosts,
    averageUpvotes: Math.round(avgUpvotes),
  };
}

function getTimeTrends(posts) {
  const hours = {};

  posts.forEach((post) => {
    const hour = new Date(post.created * 1000).getHours();
    hours[hour] = (hours[hour] || 0) + 1;
  });

  return hours;
}

const generateSummary = (posts) => {
  const topPost = posts.reduce((max, post) =>
    post.upvotes > max.upvotes ? post : max
  );

  return `Most trending discussions are around "${topPost.title.substring(
    0,
    50
  )}...".
    The subreddit r/${topPost.subreddit} has the highest engagement with ${
    topPost.upvotes
  } upvotes.`;
};

function extractInsights(posts) {
  const titles = posts.map((post) => post.title);

  return {
    keywords: getKeywords(titles),
    subredditDistribution: getSubredditStats(posts),
    engagement: getEngagement(posts),
    timeTrends: getTimeTrends(posts),
    summary: generateSummary(posts),
  };
}

module.exports = {
  extractInsights,
};
