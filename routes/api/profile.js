const express = require("express");
const router = express.Router();
const Profile = require("../../Models/Profile");
const auth = require("../../middleware/auth");

//@route    POST api/profile
//@desc     Create or Edit New User Profile
//@access   Private
router.post("/", auth, async (req, res) => {
  //Destructure each item from req.body
  const { avatar, bio, instagram, twitter, facebook, youtube } = req.body;

  //Build Profile Object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (avatar) profileFields.avatar = avatar;
  if (bio) profileFields.bio = bio;

  //Build Social Media Object
  profileFields.social = {};
  if (instagram) profileFields.social.instagram = instagram;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (youtube) profileFields.social.youtube = youtube;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    //Update Profile if one exists
    if (profile) {
      //Update Profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, useFindAndModify: true }
      );
      return res.json(profile);
    }

    //Create profile if none exist for user
    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//@route    PUT api/profile/bookmark/:id
//@desc     Bookmark a Recipe
//@access   Private
router.put("/bookmark/:id", auth, async (req, res) => {
  //Find Recipe
  const recipe = await Recipe.findOne({ _id: req.params.id });

  const profile = await Profile.findOne({ user: req.user.id });

  if (
    profile.bookmarks.filter(
      (bookmark) => bookmark._id.toString() === req.params.id
    ).length > 0
  ) {
    return res.status(400).json({ msg: "Recipe already bookmarked" });
  }

  profile.bookmarks.push({ _id: recipe._id, user: recipe.user._id });
  await profile.save();
  res.json(profile.bookmarks);
});

module.exports = router;
