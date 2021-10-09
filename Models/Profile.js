const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
  social: {
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    youtube: {
      type: String,
    },
  },
  bookmarked: [
    {
      recipe: {
        type: Schema.Types.ObjectId,
        ref: "recipes",
      },
    },
  ],
  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  date: {
    type: Date,
    defualt: Date.now,
  },
});

module.exports = Profile = mongoose.model("profile", profileSchema);
