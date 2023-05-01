const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Flavor Fusion is running");
});

app.listen(port, () => {
  console.log("Flavor Fusion is running on port: ", port);
});
