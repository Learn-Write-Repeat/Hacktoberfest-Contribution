const Password = require('../models/saved');
const User = require('../models/user');


module.exports.index = async function(req,res){
    let num =0;
    let usersnum =0;
    let users = User.find({});
    
    let passwords = await Password.find({});
    for(password in passwords) num++;
    for(user in users) usersnum++;

    try{
        return res.render('index',{
            number:num,
            usernumber:usersnum
        });

    }
    catch(err){
        console.log(`************ ERROR !! : ${err}`);
        return;
    }
}

module.exports.newpassowrd = function(req,res){
    try{
        return res.render('new_password');

    }
    catch(err){
        console.log(`************ ERROR !! : ${err}`);
        return;
    }
}

module.exports.genraterandom = function(req,res){
    try{
        let length = req.body.length;
        let string = "abcdefghijgkmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJHLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialchar = "~`!@#$%^&*()_-+={[}]|\ :;'<,>.?/";
        if(req.body.includeUppercase) string = string.concat(upper);
        if(req.body.includenumber) string = string.concat(numbers);
        if(req.body.includeSpecial) string = string.concat(specialchar);
        let password = '';
        for(let i =0;i<length;i++){
            password = password.concat(string[Math.floor(Math.random()*string.length)]);
        }
        if(req.xhr){
            return res.status(200).json({
                data: req.body,
                password:{'password':password},
                message: "successful",
            })
        }


        return res.redirect('back');

    }
    catch(err){
        console.log(`************ ERROR !! : ${err}`);
        return;

    }
}

module.exports.create = async function(req,res){
    try{
        let password = await Password.create({
            socialhandel : req.body.socialhandel,
            password : req.body.passwordtext,
            user: req.user._id
        })

        console.log(req.body);
        return res.redirect('back');


    }catch(err){
        console.log(`************ ERROR !! : ${err}`);
        return;

    }
}



module.exports.profile = async function(req,res){
    let passwords = await Password.find({user : req.user._id});
    let userdata = await User.findById(req.user._id);
    return res.render('profile',{
        passwordlist : passwords,
        user : userdata
    });
}


module.exports.signup = function(req,res){
    return res.render('signup',{
        errortext:'',
    });
}
module.exports.signin = function(req,res){
    return res.render('signin',{
        errortext:'',
    });
}

module.exports.createuser = async function(req,res){
    if(req.body.confirmpassword!==req.body.password) return res.render('signup',{
        errortext:"*Password and confirm password didn't matched",
    });
    let user = await User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
    return res.redirect('sign-in');
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    console.log('susseful');
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    
    req.logout();
    console.log("success",'logged out');
    return res.redirect('/');
}