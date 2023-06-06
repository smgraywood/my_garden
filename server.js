//require dependencies
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

//initialize app
const app = express();

//configure app settings
app.set("view engine", "ejs");
require("dotenv").config();
require("./config/database");
require("./config/passport");


//mount middleware
app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());
// below is custom middleware that makes the user variable available in all EJS templates
// if no one is logged in, user will be undefined
app.use(function (req, res, next) {
	res.locals.user = req.user;
	next();
});
app.use(cookieParser());

// tell app to listen for requests

app.listen(process.env.PORT || 3000);
