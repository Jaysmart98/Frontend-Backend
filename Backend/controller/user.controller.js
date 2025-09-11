const {userModel} = require("../model/user.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require('dotenv').config()



const userSignup = async (req, res) => {    
    try {
        const {username, email, password} = req.body
        console.log(req.body);

        if (!username || !email || !password) {
            return res.status(400).json({message: " All fields are mandatory", status: false})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword);

        const newuser = await userModel.create({
            username,
            email,
            password:hashedPassword
        })

        if (newuser) {
            return res.status(200).json({message:"sign Up succesfully",  status: true})
        }
   } catch (error){
       if (error.message.includes("F11000 duplicate key error")) {
        return res.status(400).json({message:"user already exist", status:fals})
       }
       if (error.message.includes("buffering timed out")) {
        return res.status(500).json({message:"networj error", status:false})
       }
       return res.status(500).json({message: error.message, status: false})
    }
}

const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({message:"All fields are mandatory"})
        }
        const existuser = await userModel.findOne({email})
        if (!existuser) {
            return res.status(400).json({message:"Invalid email or password", status:false})
         }
            const hashedPassword = await bcrypt.compare(password, existuser.password)
        if (!hashedPassword) {
                return res.status(400).json({message:"Invalid email or password"})
            }

            const token = await jwt.sign({email:existuser.email, id:existuser._id}, process.env.JWT_SECRETKEY,{expiresIn:300})
            return res.status(200).json({message:"Login successfully", status:true, token})

        } catch (error) {
        res.status(500).json({message:error.message, status: false})
    }
}

const verifytoken = async (req,res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return res.status(400).json({message:"Invalid token", status:false})
        }
        const verifytoken = await jwt.verify(token, process.env.JWT_SECRETKEY)
        console.log(verifytoken);

        if (verifytoken) {
            return res.status(200).json({message:"token verified", status:true})
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:error.message, status:false})
    }
}



module.exports = {userSignup, userLogin, verifytoken}