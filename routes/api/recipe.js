const express = require('express');
const router = express.Router();
const Recipe = require('../../Models/Recipe');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

//@route    POST api/recipes
//@desc     Post a recipe to user account
//@access   Private
router.post('/', [auth, [
    check('title', 'Recipe title is required').not().isEmpty(),
    check('description', 'Recipe description is required').not().isEmpty(),
    check('amount', 'Please enter an amount').not().isEmpty(),
    check('unit', 'Measurement unit is required').not().isEmpty(),
    check('item', 'Name of ingredient required').not().isEmpty(),
    check('step', 'Please enter at least one procedure').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
    res.send('Post a recipe');
});

module.exports = router;