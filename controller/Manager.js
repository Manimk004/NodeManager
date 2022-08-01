const Manager = require("../models/Manager");
const { updateMany } = require("../models/Project");
exports.addManager = async (req, res) => {
  try {
    const newManager = new Manager(req.body);
    const savedManager = await newManager.save();
    if (!savedManager)
      return res.send({
        error: "Unable to add new Manager ",
      });
    return res.status(201).send(savedManager);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: error.message,
    });
  }
};

exports.getManagers = async (req, res) => {
  try {
    const allManager = await Manager.find({});
    if (allManager.length === 0)
      return res.send({
        error: "No Manager Found add Some to see Manager",
      });
    return res.status(200).send(allManager);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: error.message,
    });
  }
};
exports.getManagerById = async (req, res) => {
  try {
    const id = req.params.id;

    await Manager.findById(id)
      .then((result) => {
        console.log(result, "result");
        if (!result){
        return res.send({
          error: "Can't get Manager for this Id",
        });}
        return res.status(200).send(result);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: error.message,
    });
  }
};
exports.updateManager = async (req, res) => {
  try {
 
    const update = req.body;
    const id =req.params.id;
    console.log(id);
    console.log(update);
    if (id) {
      const updatedManager =
        await Manager.findByIdAndUpdate(
          {
            _id: id,
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
// exports.updateManager = function(req, res) {
//   // Update a note identified by the noteId in the request
//   console.log(req.params.id);
//   Manager.findById(req.params.id, function(err, note) {
//       if(err) {
//           res.status(500).send({message: "Could not find a note with id " + req.params.id});
//       }
//       Manager.title = req.body.title;
//       Manager.content = req.body.content;
//       Manager.save(function(err, data){
//           if(err) {
//               res.status(500).send({message: "Could not update note with id " + req.params.id});
//           } else {
//               res.send(data);
//           }
//       });
//   });
// };
exports.searchManagers = async (req, res) => {
  try {
    const searchvalue = req.query.search;
    let santSearchValue = await searchvalue
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
      .replace(/\s+/g, " ")
      .trim();
    const searchedManager = await Manager.find({
      $or: [
        {
          name: {
            $regex: new RegExp(santSearchValue, "gi"),
          },
        },
        {
          description: {
            $regex: new RegExp(santSearchValue, "gi"),
          },
        },
      ],
    });

    if (searchedManager.length === 0)
      return res.send({
        error: "Can't get Manager for this search query",
      });
    return res.status(200).send(searchedManager);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};




