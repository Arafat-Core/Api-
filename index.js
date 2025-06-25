const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// ✅ quizzes.js থেকে কুইজ ডেটা ইমপোর্ট
const quizzes = require("./quizzes");

app.get("/", (req, res) => {
  res.send("✅ Quiz API is running! Visit /quiz to get a random question.");
});

app.get("/quiz", (req, res) => {
  const random = quizzes[Math.floor(Math.random() * quizzes.length)];
  res.json(random);
});

app.listen(port, () => {
  console.log(`✅ Quiz API running at http://localhost:${port}`);
});
