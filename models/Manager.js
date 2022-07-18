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
    "Manager",
    ManagerSchmea,
    // authenticate,
  );
