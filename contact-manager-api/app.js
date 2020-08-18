var createError = require('http-errors');
var express = require('express');
var path = require('path'); // global pkg 
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // custom pkg 
var usersRouter = require('./routes/users');  // custom pkg
var contactsRouter = require('./routes/api/contacts');  // custom pkg

var app = express();

// view engine setup -- template engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // api end point http://localhost:3000
app.use('/users', usersRouter); // api end point http://localhost:3000/users
app.use('/api/contacts', contactsRouter); // api end point http://localhost:3000/api/contacts

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
