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

//@route    PUT api/profile/remove-bookmark/:id
//@desc     Remove a Bookmarked Recipe
//@access   Private
router.put("/remove-bookmark/:id", auth, async (req, res) => {
  const profile = await Profile.findOne({ user: req.user.id });

  //   Check if Recipe Has Been Bookmarked
  if (
    profile.bookmarks.filter(
      (bookmark) => bookmark.id.toString() === req.params.id
    ).length === 0
  ) {
    return res.status(400).json({ msg: "Recipe has not yet been bookmarked" });
  }

  //Get Remove Index
  const removeIndex = profile.bookmarks
    .map((bookmark) => bookmark.id.toString())
    .indexOf(req.params.id);

  profile.bookmarks.splice(removeIndex, 1);

  await profile.save();
  res.json(profile.bookmarks);
});

//@route    PUT api/profile/follow/:id
//@desc     Follow a User
//@access   Private
router.put("/follow/:id", auth, async (req, res) => {
  //Get User to Follow
  const user = await User.findById({ _id: req.params.id }).select([
    "id",
    "name",
  ]);

  //Get My Profile
  const me = await Profile.findOne({ user: req.user.id });

  //Check if User is Already Followed
  if (me.following.filter((follow) => follow.id === req.params.id).length > 0) {
    return res.status(400).json({ msg: "You are already following this user" });
  }

  //Push User Onto Profile.Following

  res.json();
});

//@route    PUT api/profile/unfollow/:id
//@desc     Unfollow a User
//@access   Private
router.put("/unfollow/:id", auth, async (req, res) => {});

module.exports = router;
