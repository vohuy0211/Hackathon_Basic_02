const userModel = require('../models/user.model');

const addUser = (req, res) => {
  const data = req.body;
  userModel.postModelUser(res, data);
};

const getAllUsers = (req, res) => {
  userModel.getModelUser(req, res);
};

const getUserId = (req, res) => {
  const id = req.params.id;
  userModel.getModelUserId(res, id);
};

const putUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  userModel.putModelUser(res, id, data);
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  userModel.deleteModelUser(res, id);
};

module.exports = {
  addUser,
  getAllUsers,
  getUserId,
  putUser,
  deleteUser,
};
