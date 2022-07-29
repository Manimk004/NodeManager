const mongoose = require("mongoose");
const Schema =
  mongoose.Schema;

const ProjectSchmea =
  new Schema({
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    startdate: {
      type: String,
      required: true,
    },
  
      endate: {
        type: String,
        
      },
      isCompleted:{
        type:Boolean
      },
      manager : {
              type:Object,
       
      },
      member:{
        type: Array,
        
      },
   
      createdDate: { type: Date, default: Date.now },
  });

module.exports =
  mongoose.model(
    "Project",
    ProjectSchmea,
    // authenticate,
  );
