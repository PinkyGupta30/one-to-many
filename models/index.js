
const User = require("./User");
const Post = require("./Post");

// One User can have many Posts
User.hasMany(Post, {
  foreignKey: "userId",
});

// Each Post belongs to one User
Post.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  User,
  Post,
};