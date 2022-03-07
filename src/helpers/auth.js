const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()) {        
        return next();
    }
        req.flash('errors_msg', 'Usuário não autenticado !, Faça seu Login.')
        res.redirect('/users/signin');
}

module.exports = helpers;