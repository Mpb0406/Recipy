const express = require("express");
const router = express.Router();
const Recipe = require("../../Models/Recipe");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

//@route    POST api/recipes
//@desc     Post a recipe (title & description) to user account
//@access   Private
router.post(
  "/",
  [
    auth,
    [
      check("title", "Recipe title is required").not().isEmpty(),
      check("description", "Recipe description is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });

    // Destructure all elements in model
    const { title, description, ingredients, procedures } = req.body;

    // Build a recipe object with all elements available in request
    const recipeFields = {};
    recipeFields.user = req.user.id;
    if (title) recipeFields.title = title;
    if (description) recipeFields.description = description;
    if (ingredients) recipeFields.ingredients = ingredients;
    if (procedures) recipeFields.procedures = procedures;

    //Build Ingredients
    const { amount, unit, item } = req.body;

    recipeFields.ingredients = {};
    recipeFields.ingredients.amount = amount;

    // Assign recipe object to new Recipe model and save & return
    try {
      const recipe = new Recipe(recipeFields);
      await recipe.save();
      res.send(recipe);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
