var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var exphbs  = require('express-handlebars');

const fs = require('fs');
const router = express.Router();

var app = express();

//const server = require('http').createServer(app);

var server = app.listen(process.env.PORT || 5000);
const socket = require('socket.io'); //(server);
var io = socket(server);

io.sockets.on('connection', newConnection);


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

//var mailMessage = "<b> Name: </b><br> xxx <br> <b>Age</b><br>99";
//var mailMessage = "<p style='font-weight:bold;'> Name: </p><br> x <br> Age";

var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: 'algo.label@gmail.com',
    pass: "algo1online2KA"
  },
  tls: {
    rejectUnauthorized: false
  }
});
//https://myaccount.google.com/lesssecureapps
//https://accounts.google.com/b/0/displayunlockcaptcha
var HelperOptions = {
  from: '"Algo" <algo.label@gmail.com',
  to: 'algo.label@gmail.com',
  subject: 'I got a new user in my system',
  html: ""
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

  function sendMail(data) {

    var helper = HelperOptions.html;
    var mail = helper.concat("<br> " + data);
    HelperOptions.html = mail;

    transporter.sendMail(HelperOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
    });
    HelperOptions.html = "";
  }
}

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

/*app.get('about.html',function(req,res) {
  res.sendFile('views/about.html');
});*/


module.exports = app;
