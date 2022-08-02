
const config = require("../config/auth.config");
const manager = require("../models/Manager");
const Role = require("../models/role.model");


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
    console.log(req, res);
    manager.findOne({
        EmailID: req.body.EmailID,
        Password: req.body.Password,
        
      
    })
      .populate("roles", "-__v")
      .exec((err, Manager) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!Manager) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
           
            Manager.password
            
          );
    
          if (!passwordIsValid) {
            return res.status(401).send({ message: "Invalid Password!" });
          }
    

    
        var token = jwt.sign({ id: Manager.id }, config.secret, {
          expiresIn: 86400, // 24 hours
        });
  
        var authorities = [];
  
        for (let i = 0; i < Manager.roles.length; i++) {
          authorities.push("ROLE_" + Manager.roles[i].FirstName.toUpperCase());
        }
  
        req.session.token = token;
  
        res.status(200).send({
          id: Manager._id,
          FirstName: Manager.FirstName,
          EmailID: Manager.EmailID,
          roles: authorities,
        });
      });
  };
  
  exports.signout = async (req, res) => {
    try {
      req.session = null;
      return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
      this.next(err);
    }
  };
  