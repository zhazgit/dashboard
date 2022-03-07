const {Router} = require('express');
const { defaults } = require('request');
const router = Router();
const multer = require('multer');
const {isAuthenticated} = require('../helpers/auth');

const {renderSignUpForm, renderSignInForm, signup, signin, logout} = require('../controllers/users.controller')

const storage = multer.diskStorage({

    destination: (request,file, callback) => {
       callback(null, './src/public/img/uploads'); 
    },

    filename: (request, file, callback) => {
        callback(null, Date.now() + file.originalname);
    },

});

const upload = multer({
    storage:storage   
});


router.get('/users/signup', isAuthenticated, renderSignUpForm);

router.post('/users/add', upload.single('imagem'),signup);

router.get('/users/signin', renderSignInForm);

router.post('/users/signin', signin);

router.get('/users/logout', logout);


module.exports = router;