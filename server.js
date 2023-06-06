const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const logger = require("morgan");
// new code below
const session = require("express-session");

require('./config/database');
// new code below
require('./config/passport');



app.use(cookieParser());

// new code below
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
	})
);

// app.use(session({... code above
app.use(passport.initialize());
app.use(passport.session());

const session = require('express-session');
// new code below
const passport = require('passport');