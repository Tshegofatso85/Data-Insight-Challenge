# 🔥 Trending Insights Dashboard

## 📌 Overview

This is a full-stack application that answers the question:

> **“What is trending right now, and what can we learn from it?”**

The app fetches real-time data from Reddit, processes it, and presents meaningful insights through a simple and interactive dashboard.

---

## 🧠 Key Features

- Fetches trending posts from Reddit
- Extracts and analyzes keywords from titles
- Displays subreddit/category distribution
- Highlights high-engagement posts
- Presents insights using charts and tags
- Includes loading and error handling

---

## ⚙️ Tech Stack

### Backend

- Node.js
- Express
- Axios

### Frontend

- React
- Recharts
- Axios

---

## 🔌 API Used

- Reddit Public API  
  https://www.reddit.com/r/popular.json

### Endpoint:

/data → Returns raw Reddit data
/insights → Returns processed insights (keywords, charts, summary)

---

## 🧠 Insights Discovered

- Trending topics are not always the most engaging
- Entertainment-related content (e.g. gaming) often receives higher interaction
- News and informational posts appear frequently but tend to have lower engagement per post
- There is a clear difference between **visibility (frequency)** and **engagement (upvotes)**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tshegofatso85/Data-Insight-Challenge.git
cd Data-Insight-Challenge/
```

Setup Backend:

```bash
cd backend
npm install
npm start   # or: src/node server.js
```

Backend runs on:
http://localhost:5000

Setup Frontend:

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
http://localhost:3000
