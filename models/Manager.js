const mongoose = require("mongoose");
const Schema =
  mongoose.Schema;

const ManagerSchmea =
  new Schema({
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    EmailID: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Phone: {
        type: String,
        required: true,
      },
      Designation: {
        type: String,
        required: true,
      },
      Organization: {
        type: String,
        required: true,
      },
      Role:{
        type: String,
        required: true,
        default: 2,
      },
      createdDate: { type: Date, default: Date.now },
  });

  


// Export the modelname
module.exports =
  mongoose.model(
    "Manager",
    ManagerSchmea,
    // authenticate,
  );
