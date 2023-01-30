const { where } = require("sequelize");
const User = require("../models/user.models");

//Obtener todos los usuarios -------------------------
exports.getUser = async (req, res) => {
  const users = await User.findAll({
    where: {
      status: "available",
    },
  });

  res.status(200).json({
    status: "success",
    message: "All users found",
    users,
  });
};

//Obtener todos usuario por ID -------------------------

exports.getId = async (req, res) => {
  const { id } = req.params;

  const userid = await User.findOne({
    where: {
      id,
      status: "available",
    },
  });

  if (userid === null) {
    return res.status(404).json({
      status: "error",
      message: "No users found",
      userid,
    });
  }

  res.status(200).json({
    status: "success",
    message: "The user was successfully found",
    userid,
  });
};

//Crear usuario -------------------------

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
  });
  res.status(200).json({
    status: "success",
    message: "The user was created successfully",
    newUser,
  });
};

//Actualizar usuario por ID -------------------------

exports.updateMail = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const userid = await User.findOne({
    where: {
      id,
      status: "available",
    },
  });

  if (userid === null) {
    return res.status(404).json({
      status: "error",
      message: "No users found",
      userid,
    });
  }

  const updateUser = await userid.update({ name, email });

  res.status(200).json({
    status: "success",
    message: "The user was successfully updated",
    updateUser,
  });
};

//Elimiar usuario por ID -------------------------

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const userid = await User.findOne({
    where: {
      id,
      status: "available",
    },
  });

  if (!userid) {
    return res.status(404).json({
      status: "error",
      message: "No users found",
    });
  }

  userid.update({ status: "disable" });

  res.status(200).json({
    status: "success",
    message: "The user was successfully deleting",
  });
};
