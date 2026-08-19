const express = require("express");

const {
  createUser,
  createPost,
  getUserWithPosts,
} = require("../controllers/userController");

const router = express.Router();

// Create a user
router.post("/users", createUser);

// Create a post for a specific user
router.post("/users/:userId/posts", createPost);

// Get a user with all their posts
router.get("/users/:userId", getUserWithPosts);

module.exports = router;