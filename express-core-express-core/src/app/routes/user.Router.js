const express = require('express');
const route = express.Router();

const usersController = require('../controllers/user.controller');
// Đường dẫn
route.post('/users', usersController.addUser).get('/users', usersController.getAllUsers);

route
  .get('/users/:id', usersController.getUserId)
  .put('/users/:id', usersController.putUser)
  .delete('/users/:id', usersController.deleteUser);

module.exports = route;
