const express = require("express");
const projectById =
  new express.Router();
const testController = require("../controller/getProject.controller");


 
projectById.get(
    "/projectsByManagerId/:id",
    testController.projectsByManagerId
  );
 

  module.exports = projectById;
  