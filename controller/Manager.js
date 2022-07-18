const Manager = require("../models/Manager");
exports.addManager = async (
  req,
  res
) => {
  try {
    const newManager =
      new Manager(req.body);
    const savedManager =
      await newManager.save();
    if (!savedManager)
      return res.send({
        error:
          "Unable to add new Manager ",
      });
    return res
      .status(201)
      .send(savedManager);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({
        error: error.message,
      });
  }
};
exports.getManagers = async (
  req,
  res
) => {
  try {
    const allManager =
      await Manager.find({});
    if (
      allManager.length === 0
    )
      return res.send({
        error:
          "No Manager Found add Some to see Manager",
      });
    return res
      .status(200)
      .send(allManager);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({
        error: error.message,
      });
  }
};
exports.getManagerById =
  async (req, res) => {
    try {
      const id = req.query.id;
      const Manager =
        await Manager.findById(
          id
        );

      if (!Manager)
        return res.send({
          error:
            "Can't get Manager for this Id",
        });
      return res
        .status(200)
        .send(Manager);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({
          error:
            error.message,
        });
    }
  };


exports.searchManagers =
  async (req, res) => {
    try {
      const searchvalue =
        req.query.search;
      let santSearchValue =
        await searchvalue
          .replace(
            /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
            ""
          )
          .replace(
            /\s+/g,
            " "
          )
          .trim();
      const searchedManager =
        await Manager.find({
          $or: [
            {
              name: {
                $regex:
                  new RegExp(
                    santSearchValue,
                    "gi"
                  ),
              },
            },
            {
              description: {
                $regex:
                  new RegExp(
                    santSearchValue,
                    "gi"
                  ),
              },
            },
          ],
        });

      if (
        searchedManager.length ===
        0
      )
        return res.send({
          error:
            "Can't get Manager for this search query",
        });
      return res
        .status(200)
        .send(
          searchedManager
        );
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send(error);
    }
  };
exports.updateManager =
  async (req, res) => {
    try {
      const update = req.body;
      if (update._id) {
        const updatedManager =
          await Manager.findByIdAndUpdate(
            {
              _id: update._id,
            },
            { $set: update },
            { new: true }
          );
        return res.send(
          updatedManager
        );
      } else {
        return res
          .status(500)
          .send({
            error:
              "Not Object Id received",
          });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send(error);
    }
   };

//exports.authenticate =
//   async (req, res) => {
//     try {
//    function authenticate(req, res, next) {
//     userService.authenticate(req.body)
//         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
//         .catch(err => next(err));
// }

// }catch (error) {
//   console.log(error);
//   return res
//     .status(500)
//     .send(error);
// }
//   };