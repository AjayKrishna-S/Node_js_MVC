const { getUser } = require("../model/userModel")

exports.loginPage = (req,res,next) =>{
    res.render("login")
}

exports.dashboard = (req,res,next) =>{
    res.render("dashboard")
}

exports.loginProcess = (req,res,next) =>{
    //get user data
    const user = getUser(req.body.uname)

    if(user !== null && user.password === req.body.password){
        return res.redirect('/dashboard');
    }else if(user === null){
        res.render('error',{message:"user not exist"})
    }else{
        res.render('error',{message:"invalid password"})
    }
}