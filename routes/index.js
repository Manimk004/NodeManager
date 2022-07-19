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
  "/getManager",
  ManagerController.getManagerById
);
managerRoutes.get(
  "/searchManagers",
  ManagerController.searchManagers
);
managerRoutes.post(
  "/updateManager",
  ManagerController.updateManager
);


module.exports = managerRoutes;