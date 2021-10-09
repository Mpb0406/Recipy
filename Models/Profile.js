const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
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
});

module.exports = Profile = mongoose.model("profile", profileSchema);
