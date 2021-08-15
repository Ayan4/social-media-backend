const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unFollowUser,
  getFriends
} = require("../controllers/users.controller");

router.post("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/", getUser);
router.post("/:id/follow", followUser);
router.post("/:id/unfollow", unFollowUser);
router.post("/friends/:userId", getFriends);

module.exports = router;
