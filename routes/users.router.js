const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unFollowUser
} = require("../controllers/users.controller");

router.post("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.post("/:id/follow", followUser);
router.post("/:id/unfollow", unFollowUser);

module.exports = router;
