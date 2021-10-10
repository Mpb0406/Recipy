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

module.exports = router;
