var express = require("express");
var session = require("express-session");
var passport = require("passport");
const path = require("path");
const logger = require("morgan");
var app = express();
var router = express.Router();

require("dotenv").config();
require("./config/passport");

var usersRouter = require('./routes/users');

app.use(express.urlencoded({ extended: false }));
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
app.use('/users', usersRouter);

app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
console.log("Serving static files from " + path.join(__dirname, "build"));

const port = process.env.PORT || 3001;

app.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    scope: ['profile', 'email'],
    // Optional
    prompt: 'select_account'
  }
));

app.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    // Change to what's best for YOUR app
    failureRedirect: '/'
  }
));

app.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/');
  });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.use('/users', require('./routes/users'));
