const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  newUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// routes for /api/users
router.route("/").get(getUsers).post(newUser);

// routes for /api/users/:userId
router.route("/:userId").get(getOneUser).delete(deleteUser).put(updateUser);

// route for /api/users/:userId/friends
router.route("/:userId/friends").post(addFriend);

//route for /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(removeFriend)

module.exports = router;
