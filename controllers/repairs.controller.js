const { where } = require("sequelize");
const Repair = require("../models/repair.models");

//Obtener todos las reparaciones -------------------------
exports.getList = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: "pending",
    },
  });

  res.status(200).json({
    status: "success",
    message: "All repairs found",
    repairs,
  });
};

//Obtener reparación por ID -------------------------

exports.getId = async (req, res) => {
  const { id } = req.params;

  const repairsid = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });

  if (repairsid === null) {
    return res.status(404).json({
      status: "error",
      message: "Repair not found",
      repairsid,
    });
  }

  res.json({
    status: "success",
    message: "The repair was found satisfactorily",
    repairsid,
  });
};

//Crear reparación -------------------------

exports.createDate = async (req, res) => {
  const { date, userId } = req.body;

  const newDate = await Repair.create({
    date,
    userId,
  });
  res.json({
    status: "success",
    message: "The repair created successfully",
    newDate,
  });
};

//Actualizar reparación por ID -------------------------

exports.updateStatus = async (req, res) => {
  const { id } = req.params;

  const repairsid = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });

  if (!repairsid) {
    return res.status(404).json({
      status: "error",
      message: "Repair not found",
    });
  }

  repairsid.update({ status: "completed" });

  res.json({
    status: "success",
    message: "The repair updated successfully",
  });
};

//Eliminar reparación por ID -------------------------

exports.cancelRepairs = async (req, res) => {
  const { id } = req.params;

  const repairsid = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });

  if (!repairsid) {
    return res.status(404).json({
      status: "error",
      message: "Repair not found",
    });
  }

  repairsid.update({ status: "cancelled" });

  res.json({
    status: "success",
    message: "Repair successfully removed",
  });
};
