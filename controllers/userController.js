const { getUser } = require("../model/userModel")

exports.loginPage = (req,res,next) =>{
    res.render("login")
}

exports.dashboard = (req,res,next) =>{
    res.render("dashboard")
}

exports.loginProcess = (req,res,next) =>{
    //get user data
    getUser(req.body.uname)
    console.log(req.body.uname);
}