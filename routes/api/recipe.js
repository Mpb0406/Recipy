const express = require('express');
const router = express.Router();
const Recipe = require('../../Models/Recipe');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

//@route    POST api/recipes
//@desc     Post a recipe to user account
//@access   Private
router.post('/', (req, res) => {
    res.send('Post a recipe')
});

module.exports = router;