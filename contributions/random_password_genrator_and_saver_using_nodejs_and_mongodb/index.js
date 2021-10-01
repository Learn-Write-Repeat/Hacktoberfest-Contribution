require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expresslayout = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-stratagy');
const MongoStore = require('connect-mongo');
const db = require('./config/mongoose');
const { config } = require('process');
const port = process.env.PORT || '8000';
const app =express();
app.use(express.urlencoded());
app.use(expresslayout);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));


// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'password_genrator',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: process.env.DB,
    
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));







app.listen(port,function(err){
    if(err) console.log(`************************* err : ${err}`);
    console.log(`Server up and running on port : ${port}`);
})