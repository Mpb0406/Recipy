const express = require("express");
const router = express.Router();
const Recipe = require("../../Models/Recipe");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const { findById, findOneAndUpdate } = require("../../Models/Recipe");

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
    const { title, description, ingredients, procedures, yield, preptime, cooktime, pairswith, tags } = req.body;

    // Build a recipe object with all elements available in request
    const recipeFields = {};
    recipeFields.user = req.user.id;
    if (title) recipeFields.title = title;
    if (description) recipeFields.description = description;
    if (ingredients) recipeFields.ingredients = ingredients;
    if (procedures) recipeFields.procedures = procedures;
    if (yield) recipeFields.yield = yield;
    if (preptime) recipeFields.preptime = preptime;
    if (cooktime) recipeFields.cooktime = cooktime;
    if (pairswith) recipeFields.pairswith = pairswith;
    if (tags) recipeFields.tags = tags;

    //Grab Ingredients from Req
    const recipeIngredients = req.body.ingredients;

    //Map Over Each Ingredient Obj in Req and Push to Ingredients Array
    recipeFields.ingredients = [];
    recipeIngredients.map(ingredient => recipeFields.ingredients.push(ingredient));

    //Grab Procedures from Req
    const recipeProcedures = req.body.procedures;

    //Map Over Each Ingredient Obj in Req and Push to Ingredients Array
    recipeFields.procedures = [];
    recipeProcedures.map(procedure => recipeFields.procedures.push(procedure));

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


//@route    GET api/recipes/myrecipes
//@desc     Get all recipes for a user
//@access   Private
router.get('/myrecipes', auth, async (req, res) => {

  try {
    const userPosts = await Recipe.find({ 'user': req.user.id });
    res.send(userPosts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


//@route    PUT api/recipes/:id
//@desc     Update a recipe
//@access   Private
router.put('/:id', auth, async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  const { title, description, ingredients, procedures, yield, preptime, cooktime, pairswith, tags } = req.body;

  // Build a recipe object with all elements available in request
  const recipeFields = {};
  recipeFields.user = req.user.id;
  if (title) recipeFields.title = title;
  if (description) recipeFields.description = description;
  if (ingredients) recipeFields.ingredients = ingredients;
  if (procedures) recipeFields.procedures = procedures;
  if (yield) recipeFields.yield = yield;
  if (preptime) recipeFields.preptime = preptime;
  if (cooktime) recipeFields.cooktime = cooktime;
  if (pairswith) recipeFields.pairswith = pairswith;
  if (tags) recipeFields.tags = tags;

  //Grab Ingredients from Req
  const recipeIngredients = req.body.ingredients;

  //Map Over Each Ingredient Obj in Req and Push to Ingredients Array
  recipeFields.ingredients = [];
  recipeIngredients.map(ingredient => recipeFields.ingredients.push(ingredient));

  //Grab Procedures from Req
  const recipeProcedures = req.body.procedures;

  //Map Over Each Ingredient Obj in Req and Push to Ingredients Array
  recipeFields.procedures = [];
  recipeProcedures.map(procedure => recipeFields.procedures.push(procedure));


  try {
    if (recipe) {
      updatedRecipe = await Recipe.findOneAndUpdate({ user: req.user.id }, { $set: recipeFields }, { new: true, useFindAndModify: false })
    }
    res.send(updatedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
  if (recipe) {
    updatedRecipe = await Recipe.findOneAndUpdate({ user: req.user.id }, { $set: recipeFields }, { new: true, useFindAndModify: false })
  }
  res.send(updatedRecipe);
});


//@route    DELETE api/recipes/:id
//@desc     Delete a recipe
//@access   Private
router.delete('/:id', auth, async (req, res) => {
  res.send('Delete Recipe');
})


module.exports = router;
