import { useState, useEffect } from "react";
import axios from "axios";

import Summary from "../components/Summary";
import SubredditChart from "../components/SubredditChart";
import KeywordChart from "../components/KeywordChart";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInsights = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        "https://data-insight-challenge.onrender.com/insight"
      );

      setData(response.data);
    } catch (error) {
      setError(`Failed to fetch insights: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="dashboard-header">
      <h1>Trending Insights Dashboard</h1>

      <button onClick={fetchInsights}>Refresh</button>

      <Summary summary={data.summary} />

      <KeywordChart keywords={data.keywords} />

      <SubredditChart subreddit={data.subredditDistribution} />

      <div className="card">
        <h2>Top Posts 🚀</h2>
        <ul>
          {data.engagement.topPosts.map((post, index) => (
            <li key={index} style={{ marginBottom: "12px" }}>
              <strong>{post.title}</strong>
              <br />
              👍 {post.upvotes} upvotes in r/{post.subreddit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
