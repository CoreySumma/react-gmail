var express = require("express");
var session = require("express-session");
var passport = require("passport");
const path = require("path");
const logger = require("morgan");
var app = express();

require("dotenv").config();
require("./config/passport");

var usersRouter = require('./routes/users');

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3001;

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});


app.use('/users', require('./routes/users'));
