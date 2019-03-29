var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

const fs = require('fs');

var app = express();

//const server = require('http').createServer(app);

var server = app.listen(process.env.PORT || 5000);
const socket = require('socket.io'); //(server);
var io = socket(server);

io.sockets.on('connection', newConnection);

console.log("Welcome to Algo");

const OSC = require('osc-js')


/*     OSC     */

const config = {
  udpClient: {
    port: 9129
  }
}
const osc = new OSC({
  plugin: new OSC.BridgePlugin(config)
});
osc.open(); // start a WebSocket server on port 8080

var nodemailer = require('nodemailer');

/* Mail options */

var mailMessage = "<b> Name: </b><br> xxx <br> <b>Age</b><br>99";
//var mailMessage = "<p style='font-weight:bold;'> Name: </p><br> x <br> Age";

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'algomobile2@gmail.com',
    pass: "okokfodase"
  },
  tls: {
    rejectUnauthorized: false
  }
});
var HelperOptions = {
  from: '"Algo" <algomobile2@gmail.com',
  to: 'algomobile2@gmail.com',
  subject: 'I got a new user in my system',
  html: mailMessage
};

// dividir por linhas pergunta resposta pergunta resposta - sem simbolos

function newConnection(socket) {
  socket.on('emissor', mouseMsg);

  function mouseMsg(data) {
    //socket.broadcast.emit('mouse', data);
    io.sockets.emit('mouse', data);
    console.log("URL da imagem " + data);
  }

  socket.on('email', sendMail);

  function sendMail() {
    transporter.sendMail(HelperOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
  }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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