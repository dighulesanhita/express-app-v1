var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); // 3rd party
var logger = require('morgan');// 3rd party

var indexRouter = require('./routes/index'); // routes - webpages are called as routes in JS
var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employees');
var aboutRouter = require('./routes/about');
var contactsRouter = require('./routes/contacts');

var app = express(); // create express app

// view engine setup
app.set('views', path.join(__dirname, 'views')); // __dirname is keyword dir name/ view becomes the path for views
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // encodes the spaces and characters which needs encoding
app.use(cookieParser()); // helps you parse through the cookies
app.use(express.static(path.join(__dirname, 'public')));// images, style sheets etc - setup static resources 

app.use('/', indexRouter); // routes are setup up against the app
app.use('/users', usersRouter);
app.use('/employees', employeesRouter);
app.use('/about', aboutRouter);
app.use('/contacts', contactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
