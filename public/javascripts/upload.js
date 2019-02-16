socket = io.connect(window.location.origin);
socket.on('mouse', teste);
window.addEventListener("mousedown", myScript);

function myScript() {
  var data = "okokfdslala";
  console.log(data);
  //socket.emit('emissor', data);
}

function teste(data) {
  console.log(data);
  //document.getElementById("imageupload").style.backgroundImage = data;
  document.getElementById("imageupload").style.backgroundImage = "url('" + data + "')";

}

console.log("Algo Mobile" + "\n" + "Starting...");
/* Printing Cookies */
console.log(document.cookie);

/* Printing history methods*/
console.log(window.history);

//  https://github.com/bridgeit/bridgeit.js/wiki/Contact-List-Tutorial
//  https://developer.chrome.com/extensions/history
//  https://w3c.github.io/deviceorientation/
//  https://github.com/colinbdclark/osc.js/
//  OPEN SOUND CONTROL

window.addEventListener("deviceorientation", function(event) {
  document.getElementById('orientationalpha').innerHTML = "Orientation Alpha: " + event.alpha;
  document.getElementById('orientationbeta').innerHTML = "Orientation Beta: " + event.beta;
  document.getElementById('orientationgamma').innerHTML = "Orientation Gamma: " + event.gamma;
  document.getElementById('orientationabs').innerHTML = "Orientation Abs: " + event.absolute;
}, true);

window.addEventListener("devicemotion", function(event) {
  document.getElementById('x').innerHTML = "event.acceleration.x: " + event.acceleration.x;
  document.getElementById('y').innerHTML = "event.acceleration.y: " + event.acceleration;
  document.getElementById('z').innerHTML = "VER: " + event.rotationRate.x;

  // Process event.acceleration, event.accelerationIncludingGravity,
  // event.rotationRate and event.interval
}, true);

/*window.addEventListener("compassneedscalibration", function(event) {
    alert('Your compass needs calibrating! Wave your device in a figure-eight motion');
    event.preventDefault();
}, true);

function submit() {
  console.log("entered text");
}*/


function show_link(link) {
  document.getElementById('hide').style.display = 'block';
  var image_list = document.getElementById("image_list");
  var aTag = document.createElement('a');
  aTag.setAttribute('href', link);
  aTag.innerHTML = link;
  image_list.appendChild(aTag);
  var lineBreak = document.createElement('br');
  image_list.appendChild(lineBreak);
}

function hide_link() {
  document.getElementById('hide').style.display = 'none';
}

function saveToDB(id, link) {

  var http = new XMLHttpRequest();
  var url = "/image";
  var params = {
    "id": id,
    "link": link
  }

  http.open("POST", url, true);
  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/json");
  http.send(JSON.stringify(params));
}

Dropzone.options.myId = {
  init: function() {
    this.on("success", function(file, res) {

      var linkImagem = res.data.link;
      socket.emit('emissor', linkImagem);
      console.log(linkImagem);

      show_link(res.data.link)
      saveToDB(res.data.id, res.data.link);
    });

    this.on("reset", function() {
      hide_link();
    });
  },
  paramName: "image",
  url: "https://api.imgur.com/3/upload",
  addRemoveLinks: true,
  headers: {
    "Authorization": "Client-ID 3d0295885297563",
    "Cache-Control": null,
    "X-Requested-With": null
  }
};