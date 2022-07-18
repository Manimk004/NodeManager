const express = require("express");
const router =
  new express.Router();
const ManagerController = require("../controller/Manager");
// TO add new Manager
router.post(
  "/addManager",
  ManagerController.addManager
);
router.get(
  "/getManagers",
  ManagerController.getManagers
);
router.get(
  "/getManager",
  ManagerController.getManagerById
);
router.get(
  "/searchManagers",
  ManagerController.searchManagers
);
router.post(
  "/updateManager",
  ManagerController.updateManager
);
// async function authenticate({ username, password }) {
//   const user = await User.findOne({ username });
//   if (user && bcrypt.compareSync(password, user.hash)) {
//       const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
//       return {
//           ...user.toJSON(),
//           token
//       };
//   }
// }
module.exports = router;
