// const { verifySignUp } = require("../middlewares");
const express = require("express");
const auth =
  new express.Router();


const controller = require("../controller/auth.controller");
//const controller = require("../controller/login");
  auth.post("/signin", controller.signin);

  auth.post("/signout", controller.signout);
  module.exports=auth