const express = require("express");
const app = express();
const PORT = 3026;
const cors = require("cors");
app.use(cors());

app.get("/time", (req, res) => {
  const now = new Date();
  res.json({ time: now.toISOString() });
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
