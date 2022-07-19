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
        required: true,
      },
      managers: {
        type: String,
        required: true,
      },
   
      createdDate: { type: Date, default: Date.now },
  });
//   async function authenticate({ username, password }) {
//     const user = await User.findOne({ username });
//     if (user && bcrypt.compareSync(password, user.hash)) {
//         const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
//         return {
//             ...user.toJSON(),
//             token
//         };
//     }
// }

// Export the modelname
module.exports =
  mongoose.model(
    "Project",
    ProjectSchmea,
    // authenticate,
  );
