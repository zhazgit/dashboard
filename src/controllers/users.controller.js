const usersCtrl = {};
const request = require('request');
const User = require('../models/User');
const passport = require('passport');


let ip, cidade, regiao;


usersCtrl.renderSignUpForm = (req,res) => {   
    res.render('users/signup');
}


usersCtrl.signup = async (req,res) => {
    let img = req.file.filename;
    let email = req.body.email;
    let cnpj_cpf = req.body.CNPJ_CPF;
    let senha = req.body.senha;
    let senha2 = req.body.senha2;
    let admin = req.body.admin;
    
    const errors = [];
    if(admin == "on") {
        admin = true;
    }else{
        admin = false;
    }

    if(senha != senha2) {
        errors.push({text: 'As Senhas não estão batendo.'});
    }
    if(senha.length < 6) {
        errors.push({text: 'A senha tem que ter no minimo 6 digitos.'});
    }
    if(errors.length > 0) {
        res.render('users/signup', {
            errors,
            email,
            cnpj_cpf
        });
    }else{
     const emailUser = await User.findOne({email: email});
     if(emailUser) {
        req.flash('error_msg', 'O email já esta sendo utilizado.');
        res.redirect('/users/signup'); 
     }else {
         const newUser = new User({img,email,cnpj_cpf,senha,admin});
         newUser.senha = await newUser.encryptPassword(senha);
         await newUser.save();
         req.flash('success_msg', 'Usuário criado com sucesso.');
         res.redirect('/users/signin')
     }
   }
}

usersCtrl.renderSignInForm = (req,res) => {
    const url = "http://ip-api.com/json";
    request (url, async (err, res, body) =>{
        if(err) {
        console.log('error: ', err )
        }else{        
        var ipInfo = await JSON.parse(body);
        ip = await ipInfo.query;  
        cidade =  await ipInfo.city;
        regiao =  await ipInfo.region;        
    }    
}); 
res.render('users/signin', {ip, cidade, regiao});;   
}

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/dados',
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Usuário deslogado do Sistema.');
    res.redirect('/users/signin');
}


module.exports = usersCtrl;