const express = require("express");
const cors = require("cors");
//const helmet = require("helmet");
const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none'; default-src 'self';");
  res.setHeader("X-Frame-Options", "DENY");
  next();
});
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
