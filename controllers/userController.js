const { User, Post } = require("../models");

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

// Create a post for a user
const createPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const { title, content } = req.body;

    const post = await Post.create({
      title,
      content,
      userId,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Error creating post",
      error: error.message,
    });
  }
};

// Get a user with all their posts
const getUserWithPosts = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      include: Post,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving user",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  createPost,
  getUserWithPosts,
};