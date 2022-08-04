const mongoose = require("mongoose");
const Schema =
  mongoose.Schema;
  const bcrypt = require("bcrypt");

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

  ManagerSchmea.pre('save', async function(next)
  {
   try{
      const salt= await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.Password, salt)
      this.Password=hashedPassword
      next()
   }
   catch(error)
   {
    next(error)
   }
  })


// Export the modelname
module.exports =
  mongoose.model(
    "Manager",
    ManagerSchmea,
    // authenticate,
  );
