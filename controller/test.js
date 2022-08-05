const Manager = require("../models/Manager");
const project = require("../models/Project");


exports.projectByManagerId = (req, res)=>
{
try{
  project.find({managersId: req.params.id})
  .exec()
    // const id = req.params.id;
    // console.log(id);
    // await project.find(id)
      .then((result) => {
        console.log(result, "result");
        if (!result){
        return res.send({
          error: "Can't get any Project for this managerId",
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

// exports.projectByManagerId = function(req, res) {
//   var id = req.params.id; //<--- was disabled, it will give an error when testing this code.

//   id = "1234"; //Just for testing

//    db.collection('users', function(err, collection) {
//        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, project) {

//            db.collection('items', function(err, collection) {
//                var itemsArray = []

//                var itemIds = project.useritems

//                for (var i = 0; i < itemIds.length; i++) {
//                    itemIds[i]

//                    collection.findOne({'_id':new BSON.ObjectID(itemIds[i])}, function(err, item) {

//                    itemsArray.push(item);

//                    if(itemIds.length === itemsArray.length){

//                        res.send(itemsArray);

//                    }

//                    });
//                };

//            });
//        });
//    });
// };

