const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy( {
    usernameField: 'email',
    passwordField: 'senha'
    
}, async (email, senha, done) => {
    // Match Emails user
    const user = await User.findOne({email})
    if(!user) {
        return done(null, false, {message: 'Usuário não existe.'})
    }else{
        // Math Passwords User
    const match = await user.matchPassword(senha);
    if(match) {
        return done(null, user);
    }else{
        return done(null, false, {message: 'Senha Incorreta.'})
    }    
    
    }    

}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err,user);
    });
});
