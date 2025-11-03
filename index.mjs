import express from "express";

const app = express();
const PORT = 80;

// Middleware to parse JSON
app.use(express.urlencoded({ extended: true }));

// Example POST endpoint
app.post("/webhook", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ status: "ok", received: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});