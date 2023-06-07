//require dependencies
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");

//initialize app
const app = express();

//configure app settings
app.set("view engine", "ejs");
require("dotenv").config();
require("./server/config/database");

//mount middleware
app.use(express.json()); // Creates req.body
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

app.use("/api/users", require("./routes/api/users"));
app.use("/api/data", require("./routes/api/data"));
// below is custom middleware that makes the user variable available in all EJS templates
// if no one is logged in, user will be undefined
app.use(function (req, res, next) {
	res.locals.user = req.user;
	next();
});

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

// tell app to listen for requests

app.listen(process.env.PORT || 3000);
