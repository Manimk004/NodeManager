// const { verifySignUp } = require("../middlewares");
const express = require("express");
const auth =
  new express.Router();


const controller = require("../controller/auth.controller");
  auth.post("/signin", controller.signin);

  auth.post("/signout", controller.signout);
  module.exports=auth