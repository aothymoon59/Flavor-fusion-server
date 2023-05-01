const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");

app.get("/", (req, res) => {
  res.send("Flavor Fusion is running");
});

// all chefs api
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

// single chef api by id
app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const singleChef = chefs.find((chef) => parseInt(chef.id) === id);
  res.send(singleChef);
});

// all recipes api
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

// chef recipes api
app.get("/chef-recipe/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const chefRecipes = recipes.filter(
    (recipe) => parseInt(recipe.chef_id) === id
  );
  res.send(chefRecipes);
});

app.listen(port, () => {
  console.log("Flavor Fusion is running on port: ", port);
});
