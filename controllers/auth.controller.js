const User = require('../models/auth.model')
const expressJwt = require('express-jwt')
const _ = require('loadash')
const{}

exports.registerController = (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
};
