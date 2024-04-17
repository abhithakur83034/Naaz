require("dotenv").config();
const jwt = require('jsonwebtoken');
const secret_key = 'jsonwebtoken';

const adminemail = process.env.ADMIN_EMAIL;
const adminpassword = process.env.ADMIN_PASSWORD;
const id = "1";
const name = "Abhishek";
const phone = "8795932345";
const country = "India";
const address = "A108 Adam Street,Lucknow, India 226022";
const about =
  " a person who is in charge of the operation of a network of computers, a website, a group of computer users, etc., and is able to make changes to it: Only admins can add people to the group chat or change the name of the group.";
const ADMIN = {
  id,
  adminemail,
  adminpassword,
  name,
  phone,
  country,
  address,
  about,
};
const AdminController = {
  // Admin Login
    doLogin: async (req, res) => {
      console.log(req.body);
      console.log( ADMIN.adminemail);
        try {
            if (
              ADMIN.adminemail == req.body.username &&
              ADMIN.adminpassword == req.body.password
            ) {
             
              const token = jwt.sign({ ADMIN }, secret_key, { expiresIn: "2h" });
              res.send({
                ADMIN,
                token,
                message :"Login successfully",
                status:"success"
              });        
            } else {
              console.log("can't find admin");
              res.status(500).json({ message: "can't find admin",status:"error" });
            }
          } catch (error) {
            console.log(error);
          }
    },


    
  
};

module.exports = AdminController;
