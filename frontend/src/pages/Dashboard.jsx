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

      const response = await axios.get("http://localhost:3000/insight");

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
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Trending Insights Dashboard</h1>

      <button
        onClick={fetchInsights}
        style={{
          padding: "8px 12px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "1px solid #ccc",
          background: "#f5f5f5",
        }}
      >
        Refresh
      </button>

      <Summary summary={data.summary} />

      <KeywordChart keywords={data.keywords} />

      <SubredditChart subreddit={data.subredditDistribution} />

      <div style={{ marginTop: "30px" }}>
        <h2>Top Posts 🚀</h2>
        <ul>
          {data.engagement.topPosts.map((post, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
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
