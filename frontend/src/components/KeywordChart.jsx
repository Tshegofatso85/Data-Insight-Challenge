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
    <div style={{ marginBottom: "30px" }}>
      <h2>Trending Keywords 🔥</h2>

      <div style={{ marginBottom: "20px" }}>
        {keywords.map((keyword) => (
          <span
            key={keyword.word}
            style={{
              margin: "5px",
              padding: "6px 12px",
              background: "#eee",
              borderRadius: "20px",
              display: "inline-block",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {keyword.word} ({keyword.count})
          </span>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={keywords}>
          <XAxis dataKey="word" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
