const express = require("express");
const managerRoutes =
  new express.Router();
const ManagerController = require("../controller/Manager");
// TO add new Manager
managerRoutes.post(
  "/addManager",
  ManagerController.addManager
);
managerRoutes.get(
  "/getManagers",
  ManagerController.getManagers
);
managerRoutes.get(
  "/getManager/:id",
  ManagerController.getManagerById
);
managerRoutes.get(
  "/searchManagers",
  ManagerController.searchManagers
);
managerRoutes.post(
  "/updateManager/:id",
  ManagerController.updateManager
);

managerRoutes.post(
  "/authenticate",
  ManagerController.authenticate
);

module.exports = managerRoutes;
