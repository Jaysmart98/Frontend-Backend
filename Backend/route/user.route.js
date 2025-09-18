const express = require("express");
const userrouter = express.Router();
const {userSignup, userLogin, verifytoken, verifyemail, UpdateProfile} = require("../controller/user.controller");
const Authtoken = require("../middleware/sessionservice")




userrouter.post("/signup", userSignup)
userrouter.post("/login", userLogin)
userrouter.get("/verify", verifytoken)
userrouter.get("/verify/email/:email", verifyemail)
userrouter.patch("/upload/profile", Authtoken,UpdateProfile)



module.exports = userrouter