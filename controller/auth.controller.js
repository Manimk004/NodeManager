const config = require("../config/auth.config");
const manager = require("../models/Manager");
const Role = require("../models/role.model");


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  
    manager.find({EmailID: req.body.EmailID})
      .exec()
      .then(Manager=>
        {
            if(Manager.length<1)
            {
                return res.status(404).send({ message: "User Not founded." })
            }
        
             bcrypt.compare(req.body.Password,Manager[0].Password,(err,result)=>{
                

                if(!result)
                {
                    return res.status(401).send({ message: "Invalid Password!" });
                }
                if(result)
                {
                    const token = jwt.sign({
                    FirstName: Manager[0].FirstName,
                    EmailID: Manager[0].EmailID
                    },
                    'ssss',
                    {
                      expiresIn:"24h"
                    }
                    );
                    res.status(200).json({
                        FirstName: Manager[0].FirstName,
                        LastName: Manager[0].LastName,
                        EmailID: Manager[0].EmailID,
                        Role: Manager[0].Role,
                        token:token
                    })
                }
                
            })
        })
    }
      

  
  exports.signout = async (req, res) => {
    try {
      req.session = null;
      return res.status(200).send({ message: "You've been signed out!" });
    } catch (err) {
      this.next(err);
    }
  };
