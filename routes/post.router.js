const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getAllPosts,
  getUserPosts
} = require("../controllers/post.controller");

router.post("/", createPost);
router.post("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:id/like", likePost);
router.get("/:id", getPost);
router.get("/all/:userId", getAllPosts);
router.get("/profile/:username", getUserPosts);

module.exports = router;
