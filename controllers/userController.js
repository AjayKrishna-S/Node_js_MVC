const { getUser } = require("../model/userModel")

exports.loginPage = (req,res,next) =>{
    res.render("login")
}

exports.dashboard = (req,res,next) =>{
    const user = getUser(req.query.uname);
    res.render("dashboard",{ user })
}

exports.loginProcess = (req,res,next) =>{
    //get user data
    const user = getUser(req.body.uname)

    if(user !== null && user.password === req.body.password){
        return res.redirect('/dashboard?uname='+req.body.uname);
    }else if(user === null){
        res.render('error',{message:"user not exist"})
    }else{
        res.render('error',{message:"invalid password"})
    }
}