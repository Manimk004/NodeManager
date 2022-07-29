const Project = require("../models/Project");
exports.addProject = async (
  req,
  res
) => {
  try {
    console.log(req.body);
    const {} =req.body;
    const newProject =
      new Project({
        title: req.body.title,
        discription:req.body.discription

      });
    const savedProject =
      await newProject.save().then((result)=>{
        if(result){
//do something
        }else{

        }
      });
    if (!savedProject)
      return res.send({
        error:
          "Unable to add new Project ",
      });
    return res
      .status(201)
      .send(savedProject);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({
        error: error.message,
      });
  }
};
exports.getProjects = async (
  req,
  res
) => {
  try {
    const allProject =
      await Project.find({});
    if (
      allProject.length === 0
    )
      return res.send({
        error:
          "No Project Found add Some to see Project",
      });
    return res
      .status(200)
      .send(allProject);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({
        error: error.message,
      });
  }
};
exports.getProjectById = async (req, res) => {
  try {
    const id = req.params.id;

    await Project.findById(id)
      .then((result) => {
        console.log(result, "result");
        if (!result){
        return res.send({
          error: "Can't get Project for this Id",
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


exports.searchProjects =
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
      const searchedProject =
        await Project.find({
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
        searchedProject.length ===
        0
      )
        return res.send({
          error:
            "Can't get Project for this search query",
        });
      return res
        .status(200)
        .send(
          searchedProject
        );
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send(error);
    }
  };
exports.updateProject =
  async (req, res) => {
    try {
      const update = req.body;
      const id = req.params.id;
      if (id) {
        const updatedProject =
          await Project.findByIdAndUpdate(
            {
              _id: id,
            },
            { $set: update },
            { new: true }
          );
        return res.send(
          updatedProject
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
