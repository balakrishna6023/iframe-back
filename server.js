const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      frameAncestors: ["'none'"],
    },
  })
);
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
