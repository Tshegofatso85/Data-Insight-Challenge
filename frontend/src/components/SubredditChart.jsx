import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function subredditChart({ subreddit }) {
  const formattedData = Object.keys(subreddit).map((key) => ({
    name: key,
    value: subreddit[key],
  }));

  return (
    <div>
      <h2>Subreddit Distribution 📊</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={formattedData} dataKey="value" label>
            {formattedData.map((_, index) => (
              <Cell key={index} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
