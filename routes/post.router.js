const router = require("express").Router();
const {
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getAllPosts
} = require("../controllers/post.controller");

router.post("/", createPost);
router.post("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:id/like", likePost);
router.get("/:id", getPost);
router.get("/all/timeline", getAllPosts);

module.exports = router;
