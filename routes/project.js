const express = require("express");
const projectRoutes =
  new express.Router();
const ProjectController = require("../controller/Project");

projectRoutes.post(
    "/addProject",
    ProjectController.addProject
  );
  projectRoutes.get(
    "/getProject",
    ProjectController.getProjects
  );
  projectRoutes.get(
    "/getProject/:id",
    ProjectController.getProjectById
  );
  projectRoutes.get(
    "/searchProject",
    ProjectController.searchProjects
  );
  projectRoutes.post(
    "/updateProject/:id",
    ProjectController.updateProject
  );

  module.exports = projectRoutes;
  