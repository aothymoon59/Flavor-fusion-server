const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("Flavor Fusion is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleChef = chefs.find((chef) => parseInt(chef.id) === id);
  res.send(singleChef);
});

app.listen(port, () => {
  console.log("Flavor Fusion is running on port: ", port);
});
