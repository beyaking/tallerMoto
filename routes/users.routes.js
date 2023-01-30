const { Router } = require("express");
const {
  getUser,
  getId,
  createUser,
  updateMail,
  deleteUser,
} = require("../controllers/users.controller");
const router = Router();

//Rutas Usuario
router.get("/", getUser);
router.get("/:id", getId);
router.post("/", createUser);
router.patch("/:id", updateMail);
router.delete("/:id", deleteUser);

module.exports = {
  usersRouter: router,
};
