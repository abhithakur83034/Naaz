const UserModel = require('../model/UserModel');
const path = require("path");
const jwt = require('jsonwebtoken');
const secret_key = 'jsonwebtoken';

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
            const { first_name, last_name, phone, email, password } = req.body;
            const newUser = { image: defaultImageRelativePath, first_name, last_name, phone, email, password};
            
            const user = await UserModel.insertMany(newUser); 
            return res.status(201).json({ user });
        } catch (error) {
            console.error("Error in user registration:", error);
            return res.status(500).json({ message: "Internal server error", error });
        }
    },

    // User Login
    doLogin: async (req, res) => {
        console.log(req.body);
        const { username, password } = req.body;
        try {
            const user = await UserModel.findOne({ email:username, password });
            if (!user) {
                return res.status(401).json({ result: "Invalid credentials", status: "fail" });
            }
              
           
            const token = jwt.sign({ user }, secret_key);
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
