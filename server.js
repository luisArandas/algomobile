const express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 5000);

app.use(express.static('public'))

console.log("It's running Akson Environment on port 5000.");

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

var connections = 0;

//https://github.com/guergana/socket-tone/blob/master/index.js
//https://github.com/zoutepopcorn/audio_socket/blob/master/html/index.html

function newConnection(socket) {
  connections++;
  console.log("new connection: " + socket.id);
  console.log("There are currently " + connections + " connections");
  var socketid = socket.id;
  socket.broadcast.emit('socketid', socket.id);
  socket.broadcast.emit('socketnumber', connections);

  //ao conectar (na função newConnection, e se receberes algo chamado 'mouse' faz a funcao mouseMsg)
  //enviar só numeros <- {object, object}

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    //goes to everyone including the actual client
    //io.sockets.emit('mouse', data);
    console.log(data);
    //MUST RESTART THE SERVER
  }
  socket.on('disconnect', function() {
    connections--;
    console.log("There are currently " + connections + " connections");
  });
}



/*
const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));

*/



/*
INSIDE VIEWS
index.ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

  <title>Node File Uploads</title>
</head>
<body>
  <div class="container">
    <h1>File Upload</h1>
    <%= typeof msg != 'undefined' ? msg : '' %>
    <form action="/upload" method="POST" enctype="multipart/form-data">
      <div class="file-field input-field">
        <div class="btn grey">
          <span>File</span>
          <input name="myImage" type="file">
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text">
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
    <br>
    <img src="<%= typeof file != 'undefined' ? file : '' %>" class="responsive-img">
  </div>

  <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
</body>
</html>
*/