import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function keywordChart({ keywords }) {
  return (
    <div className="card">
      <h2>Trending Keywords 🔥</h2>

      <div style={{ marginBottom: "20px" }}>
        {keywords.map((keyword) => (
          <span key={keyword.word} className="tag">
            {keyword.word} ({keyword.count})
          </span>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={keywords}>
          <XAxis dataKey="word" stroke="#e2e8f0" />
          <YAxis stroke="#e2e8f0" />
          <Tooltip />
          <Bar dataKey="count" fill="#38bdf8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
