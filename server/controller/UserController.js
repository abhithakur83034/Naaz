const UserModel = require('../model/UserModel');
const path = require("path");
const jwt = require('jsonwebtoken');
const secret_key = 'jsonwebtoken';
const crypto = require("crypto-js");

const UserController = {
    // User Registration
    userRegister: async (req, res) => {
        console.log('req', req.body);
        try {
            const checkUser = await UserModel.findOne({ email: req.body.email });
            if (checkUser) {
                return res.status(400).json({ message: "User already exists", status: "warning" });
            }
            
            const defaultImagePath = path.join(__dirname, "upload", "user.jpg");
            const defaultImageRelativePath = path.basename(defaultImagePath);
            const { first_name, last_name, phone, email, password,role } = req.body;
            const hashPassword = crypto.SHA256(password).toString();
            const newUser = { image: defaultImageRelativePath, first_name, last_name, phone, email, password:hashPassword,role};
            
            const user = await UserModel.insertMany(newUser); 
            return res.status(201).json({message:"Thankyou for registration", user });
        } catch (error) {
            console.error("Error in user registration:", error);
            return res.status(500).json({ message: "Internal server error", error });
        }
    },

    // User Login 
    doLogin: async (req, res) => {
        console.log(req.body);
        const { email, password } = req.body;
        try {
            const user = await UserModel.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ code: "401", status: false, message: "Invalid User!" });
      }
              
            const hashPassword = crypto.SHA256(password).toString();

      if (hashPassword !== user.password) {
        return res
          .status(401)
          .json({ code: "401", status: false, message: "Invalid User!" });
      }

            // const token = jwt.sign({ user }, secret_key);
            const exp = Date.now() + 1000 * 60 * 60 * 24;
            const token = jwt.sign({ id: user._id, role: user.role }, secret_key, {
              expiresIn: exp,
            });
            return res.json({ user, token,result:"Login successfully", status: "success" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ result: "Can't find user", error });
        }
    },


    
    getRegisteredUser:async(req,res)=>{
        console.log('users');
        try {
            let users = await UserModel.find();
            return res.status(201).json({ users });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Can't find user", error });
        }
    }
};

module.exports = UserController;
