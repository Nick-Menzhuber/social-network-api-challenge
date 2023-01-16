const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  newUser,
  deleteUser,
  //updateUser,
  //addFriend,
  //removeFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(newUser);

router.route("/:userId").get(getOneUser).delete(deleteUser);

module.exports = router;
