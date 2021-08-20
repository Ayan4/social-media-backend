const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unFollowUser,
  getFriends,
  getAllUsers
} = require("../controllers/users.controller");

router.get("/", getUser);
router.get("/all", getAllUsers);
router.get("/friends/:userId", getFriends);
router.post("/:id", updateUser);
router.post("/:id/follow", followUser);
router.post("/:id/unfollow", unFollowUser);
router.delete("/:id", deleteUser);

module.exports = router;
