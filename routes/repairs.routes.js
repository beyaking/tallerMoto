const { Router } = require("express");
const {
  getList,
  createDate,
  updateStatus,
  cancelRepairs,
} = require("../controllers/repairs.controller");
const { getId } = require("../controllers/repairs.controller");
const router = Router();

//Rutas reparaciones

router.get("/", getList);
router.get("/:id", getId);
router.post("/", createDate);
router.patch("/:id", updateStatus);
router.delete("/:id", cancelRepairs);

module.exports = {
  repairsRouter: router,
};
