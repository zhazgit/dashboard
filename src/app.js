const express = require('express');
const app = express();
const path = require('path');
const exphds = require('express-handlebars');
const port = 5000;
const admin = require('./routes/admin');
const user = require('./routes/default');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');



//Database
require('./database/configDB');
require('./config/passport');

//Middlewars
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());





// Global variaveis
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;

    next();
})


//Rotas
app.use("/admin", admin);
app.use('/user', user);
app.use(require('./routes/users'));
app.use(require('./routes/default'))

app.get('/', (req,res) => {
    res.redirect('users/signin');
});


//Static
app.use(express.static('src/public'));

//Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.handlebars', exphds({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.handlebars'
}));
app.set('view engine', '.handlebars');



app.listen( process.env.PORT || port , () => {
    console.log(`Server running on http://localhost:${port}`);
})


