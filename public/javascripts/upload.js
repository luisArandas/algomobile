socket = io.connect(window.location.origin);
socket.on('mouse', teste);
window.addEventListener("mousedown", myScript);

function myScript() {
  var data = "clicking";
  console.log(data);
  console.log(document.getElementById('input2').value);
  //socket.emit('emissor', data);
}


window.onload = function() {
  function updateBatteryStatus(battery) {
    document.querySelector('#charging').textContent = battery.charging ? 'Your device is charging' : 'Your device is not charging';
    document.querySelector('#level').textContent = battery.level + "% out of 100%";
    document.querySelector('#dischargingTime').textContent = "(DischargingTime / 60) = " + battery.dischargingTime / 60;
  }

  navigator.getBattery().then(function(battery) {
    // Update the battery status initially when the promise resolves ...
    updateBatteryStatus(battery);

    // .. and for any subsequent updates.
    battery.onchargingchange = function() {
      updateBatteryStatus(battery);
    };

    battery.onlevelchange = function() {
      updateBatteryStatus(battery);
    };

    battery.ondischargingtimechange = function() {
      updateBatteryStatus(battery);
    };
  });
};



/* TAKING FOTOS https://github.com/nwjs/nw.js/wiki/Control-camera-and-microphone-with-getusermedia-api */
/*if (navigator.webkitGetUserMedia) {
  navigator.webkitGetUserMedia({
    video: true
  }, onSuccess, onFail);
} else {
  //alert('webRTC not available');
}*/

function onSuccess(stream) {
  document.getElementById('camFeed').srcObject = stream;
}

function onFail() {
  //alert('could not connect stream');
}

function takePhoto() {
  var c = document.getElementById('photo');
  var v = document.getElementById('camFeed');
  c.getContext('2d').drawImage(v, 0, 0, 320, 240);
}

console.log("you came from " + document.referrer);



var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};

document.getElementById('a1').innerHTML = "- cores " + navigator.hardwareConcurrency;
document.getElementById('a2').innerHTML = "- performance Memory_jsHeapSizeLimit_" + performance.memory.jsHeapSizeLimit;
document.getElementById('a3').innerHTML = "- performance Memory_totalJSHeapSize_" + performance.memory.totalJSHeapSize;
document.getElementById('a4').innerHTML = "- performance Memory_usedJSHeapSize_" + performance.memory.usedJSHeapSize;
document.getElementById('a5').innerHTML = "- performance Timing_connectEnd_" + performance.timing.connectEnd;
document.getElementById('a6').innerHTML = "- performance Timing_connectStart_" + performance.timing.connectStart;
document.getElementById('a7').innerHTML = "- performance Timing_domComplete_" + performance.timing.domComplete;
document.getElementById('a8').innerHTML = "- performance Timing_domContentLoadedEventEnd_" + performance.timing.domContentLoadedEventEnd;
document.getElementById('a9').innerHTML = "- performance Timing_domContentLoadedEventStart_" + performance.timing.domContentLoadedEventStart;
document.getElementById('a10').innerHTML = "- performance Timing_domInteractive_" + performance.timing.domInteractive;
document.getElementById('a11').innerHTML = "- performance Timing_domLoading_" + performance.timing.domLoading;
document.getElementById('a12').innerHTML = "- performance Timing_domainLookupEnd_" + performance.domainLookupEnd;
document.getElementById('a13').innerHTML = "- performance Timing_domainLookupStart_" + performance.timing.domainLookupStart;
document.getElementById('a14').innerHTML = "- performance Timing_fetchStart_" + performance.timing.fetchStart;
document.getElementById('a15').innerHTML = "- performance Timing_loadEventEnd_" + performance.timing.loadEventEnd;
document.getElementById('a16').innerHTML = "- performance Timing_loadEventStart_" + performance.timing.loadEventStart;
document.getElementById('a17').innerHTML = "- performance Timing_redirectEnd_" + performance.timing.redirectEnd;
document.getElementById('a18').innerHTML = "- performance Timing_redirectStart_" + performance.timing.redirectStart;
document.getElementById('a19').innerHTML = "- performance Timing_responseEnd_" + performance.timing.responseEnd;
document.getElementById('a20').innerHTML = "- performance Timing_responseStart_" + performance.timing.responseStart;
document.getElementById('a21').innerHTML = "- performance Timing_secureConnectionStart_" + performance.timing.secureConnectionStart;
document.getElementById('a22').innerHTML = "- performance Timing_unloadEventEnd_" + performance.timing.unloadEventEnd;
document.getElementById('a23').innerHTML = "- performance Timing_unloadEventStart_" + performance.timing.unloadEventStart;


document.getElementById('b1').innerHTML = "- Device Screen Width_" + screen.width;
document.getElementById('b2').innerHTML = "- Device Screen Height_" + screen.height;
document.getElementById('b3').innerHTML = "- Device Screen availWidth_" + screen.availWidth;
document.getElementById('b4').innerHTML = "- Device Screen availHeight_" + screen.availHeight;
document.getElementById('b5').innerHTML = "- Device Screen colorDepth_" + screen.colorDepth;
document.getElementById('b6').innerHTML = "- Device Screen pixelDepth_" + screen.pixelDepth;

document.getElementById('c1').innerHTML = "- User Agent_" + navigator.userAgent;
document.getElementById('c2').innerHTML = "- Vendor_" + navigator.vendor;
document.getElementById('c3').innerHTML = "- ProductSub_" + navigator.productSub;
document.getElementById('c4').innerHTML = "- Platform_" + navigator.platform;
document.getElementById('c5').innerHTML = "- Navigator_Languages_" + navigator.languages;
document.getElementById('c6').innerHTML = "- Credentials_" + navigator.appName;
document.getElementById('c7').innerHTML = "- Credentials_" + navigator.appCodeName;
document.getElementById('c8').innerHTML = "- cookieEnabled_" + navigator.cookieEnabled;

var ip_;
/* IP */
$(document).ready(function() {
  $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
    document.getElementById('e1').innerHTML = "- " + "<br>" + JSON.stringify(data, null, 2) + "<br>";
    ip_ = JSON.stringify(data, null, 2);
  });
});


document.getElementById('f1').innerHTML = "- internetHistory_thisTab =" + window.history.length + "pages";
document.getElementById('f2').innerHTML = "- thisIsAcookie =" + document.cookie;

/*
<canvas id="glcanvas" width="0" height="0"></canvas>
<script>

  document.write("<br>");
  for (var value in performance) {
    document.write(value + "<br>");
  }

  document.write("<br><br><br>");

  var canvas;
  canvas = document.getElementById("glcanvas");
  var gl = canvas.getContext("experimental-webgl");

  document.write(gl.getParameter(gl.RENDERER) + "<br>");
  document.write(gl.getParameter(gl.VENDOR) + "<br>");
  document.write(getUnmaskedInfo(gl).vendor + "<br>");
  document.write(getUnmaskedInfo(gl).renderer + "<br>");


  function getUnmaskedInfo(gl) {
    var unMaskedInfo = {
      renderer: '',
      vendor: ''
    };

    var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (dbgRenderInfo != null) {
      unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
      unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
    }

    return unMaskedInfo;
  }
</script>

vibrate();

function vibrate() {
  if (detectmob() === true) {
    navigator.vibrate(1000000);
  };
}

function detectmob() {
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}*/

var client = new ClientJS(); // Create A New Client Object

//var softwareVersion = client.getSoftwareVersion(); // Get ClientJS Software Version

console.log(client);

console.log(navigator.contacts);


/*window.onbeforeunload = () => {
osc.close();
}
*/
/* Network API */
//tentar enviar mensagens

/*
Show this
Make the backend to store infor of people
Network Scan
https://pavelk2.github.io/social-feed-example/
http://webkay.robinlinus.com
https://github.com/RobinLinus
https://developers.google.com/maps/documentation/javascript/examples/map-geolocation

Fazer a conversão do charger

Queres ir ao concerto entras aqui e das algumas informações tuas

FAZER A BASE DE DADOS DO LOGIN
Adicionar compasso fim desta pagina

fazer o telemovel vibrar
CHECK CLIENT PRINT

Primeiro momento registas
Segundo hardware -> mais hardware
Terceiro maquina e a pessoa -> sensores; TENTAR VER O IDIOMA
Mais social <- HASHTAG

Ponto de vista visual -> como alimenta o espaço

Fazer login e dar stream segunda pagina depois
*/

function register(v) {
  var reg1 = "2, " + document.getElementById('input1').value + ";";
  var reg2 = "4, " + document.getElementById('input2').value + ";";
  var reg3 = "6, " + document.getElementById('input3').value + ";";
  //var reg4 = "4, " + document.getElementById('input4').value + ";";
  //var reg5 = "5, " + document.getElementById('input5').value + ";";

  var a1 = document.getElementById('a1').innerHTML = "8, cores " + navigator.hardwareConcurrency + ";";
  var a2 = document.getElementById('a2').innerHTML = "9, performance Memory_jsHeapSizeLimit_" + performance.memory.jsHeapSizeLimit + ";";
  var a3 = document.getElementById('a3').innerHTML = "10, performance Memory_totalJSHeapSize_" + performance.memory.totalJSHeapSize + ";";
  var a4 = document.getElementById('a4').innerHTML = "11, performance Memory_usedJSHeapSize_" + performance.memory.usedJSHeapSize + ";";
  var a5 = document.getElementById('a5').innerHTML = "12, performance Timing_connectEnd_" + performance.timing.connectEnd + ";";
  var a6 = document.getElementById('a6').innerHTML = "13, performance Timing_connectStart_" + performance.timing.connectStart + ";";
  var a7 = document.getElementById('a7').innerHTML = "14, performance Timing_domComplete_" + performance.timing.domComplete + ";";
  var a8 = document.getElementById('a8').innerHTML = "15, performance Timing_domContentLoadedEventEnd_" + performance.timing.domContentLoadedEventEnd + ";";
  var a9 = document.getElementById('a9').innerHTML = "16, performance Timing_domContentLoadedEventStart_" + performance.timing.domContentLoadedEventStart + ";";
  var a10 = document.getElementById('a10').innerHTML = "17, performance Timing_domInteractive_" + performance.timing.domInteractive + ";";
  var a11 = document.getElementById('a11').innerHTML = "18, performance Timing_domLoading_" + performance.timing.domLoading + ";";
  var a12 = document.getElementById('a12').innerHTML = "19, performance Timing_domainLookupEnd_" + performance.domainLookupEnd + ";";
  var a13 = document.getElementById('a13').innerHTML = "20, performance Timing_domainLookupStart_" + performance.timing.domainLookupStart + ";";
  var a14 = document.getElementById('a14').innerHTML = "21, performance Timing_fetchStart_" + performance.timing.fetchStart + ";";
  var a15 = document.getElementById('a15').innerHTML = "22, performance Timing_loadEventEnd_" + performance.timing.loadEventEnd + ";";
  var a16 = document.getElementById('a16').innerHTML = "23, performance Timing_loadEventStart_" + performance.timing.loadEventStart + ";";
  var a17 = document.getElementById('a17').innerHTML = "24, performance Timing_redirectEnd_" + performance.timing.redirectEnd + ";";
  var a18 = document.getElementById('a18').innerHTML = "25, performance Timing_redirectStart_" + performance.timing.redirectStart + ";";
  var a19 = document.getElementById('a19').innerHTML = "26, performance Timing_responseEnd_" + performance.timing.responseEnd + ";";
  var a20 = document.getElementById('a20').innerHTML = "27, performance Timing_responseStart_" + performance.timing.responseStart + ";";
  var a21 = document.getElementById('a21').innerHTML = "28, performance Timing_secureConnectionStart_" + performance.timing.secureConnectionStart + ";";
  var a22 = document.getElementById('a22').innerHTML = "29, performance Timing_unloadEventEnd_" + performance.timing.unloadEventEnd + ";";
  var a23 = document.getElementById('a23').innerHTML = "30, performance Timing_unloadEventStart_" + performance.timing.unloadEventStart + ";";

  canvas = document.getElementById("glcanvas");
  var gl = canvas.getContext("experimental-webgl");

  var a24 = "32, GL RENDERER " + gl.getParameter(gl.RENDERER) + ";";
  var a25 = "33, GL RendererUM " + getUnmaskedInfo(gl).renderer + ";";
  var a26 = "35, GL VENDOR " + gl.getParameter(gl.VENDOR) + ";";
  var a27 = "36, GL VendorUM " + getUnmaskedInfo(gl).vendor + ";";

  var a28 = document.getElementById('b1').innerHTML = "38, Device Screen Width_" + screen.width + ";" + "<br>";
  var a29 = document.getElementById('b2').innerHTML = "39, Device Screen Height_" + screen.height + ";" + "<br>";

  var a30 = document.getElementById('b3').innerHTML = "41, Device Screen availWidth_" + screen.availWidth + ";" + "<br>";
  var a31 = document.getElementById('b4').innerHTML = "42, Device Screen availHeight_" + screen.availHeight + ";" + "<br>";
  var a32 = document.getElementById('b5').innerHTML = "43, Device Screen colorDepth_" + screen.colorDepth + ";" + "<br>";
  var a33 = document.getElementById('b6').innerHTML = "44, Device Screen pixelDepth_" + screen.pixelDepth + ";" + "<br>";

  var a34 = document.getElementById('c1').innerHTML = "FALTA FORMATAR ESTE 45, User Agent_" + navigator.userAgent + ";" + "<br>";
  var a35 = document.getElementById('c2').innerHTML = "46, Vendor_" + navigator.vendor + ";" + "<br>";
  var a36 = document.getElementById('c3').innerHTML = "47, ProductSub_" + navigator.productSub + ";" + "<br>";
  var a37 = document.getElementById('c4').innerHTML = "48, Platform_" + navigator.platform + ";" + "<br>";
  var a38 = document.getElementById('c5').innerHTML = "FALTA FORMATAR ESTE 49, Navigator_Languages_" + navigator.languages + ";" + "<br>";
  var a39 = document.getElementById('c6').innerHTML = "50, Credentials_" + navigator.appName + ";" + "<br>";
  var a40 = document.getElementById('c7').innerHTML = "51, Credentials_" + navigator.appCodeName + ";" + "<br>";
  var a41 = document.getElementById('c8').innerHTML = "52, cookieEnabled_" + navigator.cookieEnabled + ";" + "<br>";

  var a42 = document.getElementById('f1').innerHTML = "55, internetHistory_thisTab =" + window.history.length + ";";
  var a43 = document.getElementById('f2').innerHTML = "FORMATAR ESTE 56, thisIsAcookie =" + document.cookie + ";";

  var x = navigator.plugins.length; // store the total no of plugin stored
  var txt = "58, Total plugin installed: " + x + "<br/>";
  txt += "59, Available plugins are " + "<br/>";
  for (var i = 0; i < x; i++) {
    txt += "60 " + navigator.plugins[i].name + " - ";
  }
  var a44 = txt;

  var ok1 = document.getElementById('charging');
  var ok2 = document.getElementById('level');
  var ok3 = document.getElementById('dischargingTime');
  var a45 = "61, " + ok1.innerHTML + '<br>';
  var a46 = "62, " + ok2.innerHTML + '<br>';
  var a47 = "63, " + ok3.innerHTML + '<br>';

  var a48 = "65, " + "Network effective bandwidth estimate " + navigator.connection.downlink + " MB/s" + ";" + '<br>';
  var a49 = "66, " + "Max download speed " + navigator.connection.downlinkMax + " MB/s" + ";" + '<br>';
  var a50 = "67, " + "Effective connection type " + navigator.connection.effectiveType + " MB/s" + ";" + '<br>';
  var a51 = "68, " + "estimated effective round-trip " + navigator.connection.rtt + " rounded to the nearest multiple of 25 milliseconds" + ";" + '<br>';
  var a52 = "69, " + "network connection type " + navigator.connection.type + ";" + '<br>';
  var a53 = "71, " + navigator.language + ";";
  var a54 = "72, " + navigator.userLanguage + ";";



  var ok4 = document.getElementById('loggedIn');
  //var a54 = "58, " + a4.innerHTML + ";" + '<br>';
  var a = "75, " + a4.innerHTML + ";" + '<br>'; //<-- this

  if (reg1 != "" && reg2 != "" && reg3 != "") {
    var data = [];
    data.push("1, Name;</b>" + '<br>' + reg1 + '<br>' + '3, Date of Birth;</b>' + '<br>' + reg2 + '<br>' + '5, Mobile Phone;</b>' + '<br>' + reg3 + '<br>' + '7, CPU; <br>' + a1 + '<br>' + a2 + '<br>' + a3 + '<br>' + a4 + '<br>' + a5 + '<br>' + a6 + '<br>' + a7 + '<br>' + a8 + '<br>' + a9 + '<br>' + a10 + '<br>' + a11 + '<br>' + a12 + '<br>' + a13 + '<br>' + a14 + '<br>' + a15 + '<br>' + a16 + '<br>' + a17 + '<br>' + a18 + '<br>' + a19 + '<br>' + a20 + '<br>' + a21 + '<br>' + a22 + '<br>' + a23 + '<br>31, GPU;</b> <br>' + a24 + "<br>" + a25 + "<br>34, VENDOR;</b> <br>" + a26 + "<br>" + a27 + "<br>37, DISPLAY;<br>" + a28 + a29 + "40, ACCESS DEVICE;<br>" + a30 + a31 + a32 + a33 + a34 + a35 + a36 + a37 + a38 + a39 + a40 + a41 + "53, IP;<br>" + ip_ + "<br>54, HISTORY;<br>" + a42 + '<br>' + a43 + '<br>57 PLUGINS</b></br>' + a44 + 'BATTERY</b></br>' + a45 + a46 + a47 + '64, NETWORK INFO</b></br>' + a48 + a49 + a50 + a51 + a52 + '70, DEVICE LANGUAGE</b></br>' + a53 + '<br>' + a54 + '<br>' + '73, USER CONNECTED TO<br>' + a);
    socket.emit('email', data);
    $("#registerBox").fadeOut("slow", function() {
      //ended fadeOut
      console.log("yy");
      document.getElementById("aboutAlgo").style.display = "block";
      $("#aboutAlgo").fadeIn("slow", function() {
        console.log("y");
      });
    });
  }

}

function nextPage(v) {
  if (v == "one") {
    document.getElementById("cenaUm").style.display = "block";
    document.getElementById("cenaDois").style.display = "none";
    document.getElementById("cenaTres").style.display = "none";
    document.getElementById("cenaQuatro").style.display = "none";
    document.getElementById("cenaCinco").style.display = "none";
  }
  if (v == "two") {
    document.getElementById("cenaUm").style.display = "none";
    document.getElementById("cenaDois").style.display = "block";
    document.getElementById("cenaTres").style.display = "none";
    document.getElementById("cenaQuatro").style.display = "none";
    document.getElementById("cenaCinco").style.display = "none";
  }
  if (v == "three") {
    document.getElementById("cenaUm").style.display = "none";
    document.getElementById("cenaDois").style.display = "none";
    document.getElementById("cenaTres").style.display = "block";
    document.getElementById("cenaQuatro").style.display = "none";
    document.getElementById("cenaCinco").style.display = "none";
  }
  if (v == "four") {
    document.getElementById("cenaUm").style.display = "none";
    document.getElementById("cenaDois").style.display = "none";
    document.getElementById("cenaTres").style.display = "none";
    document.getElementById("cenaQuatro").style.display = "block";
    document.getElementById("cenaCinco").style.display = "none";
  }
  if (v == "five") {
    document.getElementById("cenaUm").style.display = "none";
    document.getElementById("cenaDois").style.display = "none";
    document.getElementById("cenaTres").style.display = "none";
    document.getElementById("cenaQuatro").style.display = "none";
    document.getElementById("cenaCinco").style.display = "block";
  }

  /*var elem = document.getElementById('img');
  if (elem.getAttribute('src') == "") {
    alert("empty");
  } else {
    elem.getAttribute('src');
  }*/
}

/*var modal = document.getElementById('id01');

 When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/

var osc = new OSC();
osc.open(); // connect by default to ws://localhost:8080

document.getElementById('send').addEventListener('click', () => {
  var message = new OSC.Message('/test/random', Math.random());
  osc.send(message);
});
// Open Sound Control System
// https://doc.esdoc.org/github.com/adzialocha/osc-js/

function teste(data) {
  console.log(data);
  document.getElementById("imageupload").style.backgroundSize = "100% 100%";
  document.getElementById("imageupload").style.backgroundImage = "url('" + data + "')";
}

console.log("Algo Mobile" + "\n" + "Starting...");


//  https://github.com/colinbdclark/osc.js/
//  OPEN SOUND CONTROL

window.addEventListener("deviceorientation", function(event) {
  /* For motion information https://w3c.github.io/deviceorientation/#devicemotion */
  document.getElementById('orientationalpha').innerHTML = "OrientAlpha: " + event.alpha;
  document.getElementById('orientationbeta').innerHTML = "OrientBeta: " + event.beta;
  document.getElementById('orientationgamma').innerHTML = "OrientGamma: " + event.gamma;
  document.getElementById('orientationabs').innerHTML = "OrientAbs: " + event.absolute;
}, true);

window.addEventListener("devicemotion", function(event) {
  document.getElementById('x').innerHTML = "event.acc.x: " + event.acceleration.x;
  document.getElementById('y').innerHTML = "event.acc.y: " + event.acceleration.y;
  document.getElementById('z').innerHTML = "event.acc.z: " + event.acceleration.z;

  document.getElementById('zz').innerHTML = "rotationRateXYZ" + event.rotationRate.x + event.rotationRate.y + event.rotationRate.z;

}, true);




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
      saveToDB(res.data.id, res.data.link);
    });

    this.on("reset", function() {});
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




// LEAKS

var leakSocialMediaAccounts = function(callback) {
  var platforms = [{
    domain: "https://squareup.com",
    redirect: "/login?return_to=%2Ffavicon.ico",
    name: "Square"
  }, {
    domain: "https://twitter.com",
    redirect: "/login?redirect_after_login=%2f..%2ffavicon.ico",
    name: "Twitter"
  }, {
    domain: "https://www.facebook.com",
    redirect: "/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico%3F_rdr%3Dp",
    name: "Facebook"
  }, {
    domain: "https://accounts.google.com",
    redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.google.com%2Ffavicon.ico&uilel=3&hl=en&service=mail",
    name: "Gmail"
  }, {
    domain: "https://accounts.google.com",
    redirect: "/ServiceLogin?passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Ffavicon.ico&uilel=3&hl=en&service=youtube",
    name: "Youtube"
  }, {
    domain: "https://plus.google.com",
    redirect: "/up/accounts/upgrade/?continue=https://plus.google.com/favicon.ico",
    name: "Google Plus"
  }, {
    domain: "https://login.skype.com",
    redirect: "/login?message=signin_continue&redirect_uri=https%3A%2F%2Fsecure.skype.com%2Ffavicon.ico",
    name: "Skype"
  }, {
    domain: "https://www.spotify.com",
    redirect: "/en/login/?forward_url=https%3A%2F%2Fwww.spotify.com%2Ffavicon.ico",
    name: "Spotify"
  }, {
    domain: "https://www.reddit.com",
    redirect: "/login?dest=https%3A%2F%2Fwww.reddit.com%2Ffavicon.ico",
    name: "Reddit"
  }, {
    domain: "https://www.tumblr.com",
    redirect: "/login?redirect_to=%2Ffavicon.ico",
    name: "Tumblr"
  }, {
    domain: "https://www.expedia.de",
    redirect: "/user/login?ckoflag=0&selc=0&uurl=qscr%3Dreds%26rurl%3D%252Ffavicon.ico",
    name: "Expedia"
  }, {
    domain: "https://www.dropbox.com",
    redirect: "/login?cont=https%3A%2F%2Fwww.dropbox.com%2Fstatic%2Fimages%2Fabout%2Fdropbox_logo_glyph_2015.svg",
    name: "Dropbox"
  }, {
    domain: "https://www.amazon.com",
    redirect: "/ap/signin/178-4417027-1316064?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=10000000&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Ffavicon.ico",
    name: "Amazon.com"
  }, {
    domain: "https://www.pinterest.com",
    redirect: "/login/?next=https%3A%2F%2Fwww.pinterest.com%2Ffavicon.ico",
    name: "Pinterest"
  }, {
    domain: "https://de.foursquare.com",
    redirect: "/login?continue=%2Ffavicon.ico",
    name: "Foursquare"
  }, {
    domain: "https://eu.battle.net",
    redirect: "/login/de/index?ref=http://eu.battle.net/favicon.ico",
    name: "Battle.net"
  }, {
    domain: "https://store.steampowered.com",
    redirect: "/login/?redir=favicon.ico",
    name: "Steam"
  }, {
    domain: "https://www.academia.edu",
    redirect: "/login?cp=/favicon.ico&cs=www",
    name: "Academia.edu"
  }, {
    domain: "https://accounts.google.com",
    redirect: "/ServiceLogin?service=blogger&hl=de&passive=1209600&continue=https://www.blogger.com/favicon.ico",
    name: "Blogger"
  }, {
    domain: "https://github.com",
    redirect: "/login?return_to=https%3A%2F%2Fgithub.com%2Ffavicon.ico%3Fid%3D1",
    name: "Github"
  }, {
    domain: "https://medium.com",
    redirect: "/m/signin?redirect=https%3A%2F%2Fmedium.com%2Ffavicon.ico&loginType=default",
    name: "Medium"
  }, {
    domain: "https://news.ycombinator.com",
    redirect: "/login?goto=y18.gif%23",
    name: "Hackernews"
  }, {
    domain: "https://carbonmade.com",
    redirect: "/signin?returnTo=favicon.ico",
    name: "Carbonmade"
  }, {
    domain: "https://courses.edx.org",
    redirect: "/login?next=/favicon.ico",
    name: "EdX"
  }, {
    domain: "https://slack.com",
    redirect: "/checkcookie?redir=https%3A%2F%2Fslack.com%2Ffavicon.ico%23",
    name: "Slack"
  }, {
    domain: "https://www.khanacademy.org",
    redirect: "/login?continue=https%3A//www.khanacademy.org/favicon.ico",
    name: "Khan Academy"
  }, {
    domain: "https://www.paypal.com",
    redirect: "/signin?returnUri=https://t.paypal.com/ts?v=1.0.0",
    name: "Paypal"
  }, {
    domain: "https://500px.com",
    redirect: "/login?r=%2Ffavicon.ico",
    name: "500px"
  }, {
    domain: "https://www.airbnb.com",
    redirect: "/login?redirect_params[action]=favicon.ico&redirect_params[controller]=home",
    name: "Airbnb"
  }, {
    domain: "https://disqus.com",
    redirect: "/profile/login/?next=https%3A%2F%2Fdisqus.com%2Ffavicon.ico",
    name: "Disqus"
  }, {
    domain: "https://secure.meetup.com",
    redirect: "/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Fimg%2Fajax_loader_trans.gif",
    name: "Meetup"
  }, {
    domain: "https://bitbucket.org",
    redirect: "/account/signin/?next=/favicon.ico",
    name: "BitBucket"
  }, {
    domain: "https://secure.indeed.com",
    redirect: "/account/login?continue=%2ffavicon.ico",
    name: "Indeed"
  }, {
    domain: "https://vk.com",
    redirect: "/login?u=2&to=ZmF2aWNvbi5pY28-",
    name: "VK"
  }];

  platforms.forEach(function(network) {
    var img = document.createElement('img');
    img.src = network.domain + network.redirect;
    img.onload = function() {
      callback(network, true);
    };
    img.onerror = function() {
      callback(network, false);
    };
  });
};

init();

(function() {
  var element = document.getElementById('gyroscope');
  var compass = document.getElementById('compass');
  compass.hidden = true;

  function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    element.innerHTML = 'Orientation: ' + absolute

    if (!alpha) {
      compass.hidden = true;
      element.innerHTML += '<br>Your device has no compass ';
    } else {
      compass.hidden = false;
      element.innerHTML += '<br>alpha: ' + alpha
    }
    element.innerHTML += '<br>beta: ' + beta
    element.innerHTML += '<br>gamma: ' + gamma + '<br>'
    // Do stuff with the new orientation data
    if (Math.abs(beta) + Math.abs(gamma) < 1.8) {
      element.innerHTML += 'Your Device is probably laying on a Table';
    } else {
      element.innerHTML += 'Your Device is probably in your Hands';
    }
  }
  window.addEventListener('deviceorientation', handleOrientation);
}());


function init() {
  var compass = document.getElementById('compass');
  if (window.DeviceOrientationEvent) {

    window.addEventListener('deviceorientation', function(event) {
      var alpha;
      //Check for iOS property
      if (event.webkitCompassHeading) {
        alpha = event.webkitCompassHeading;
        //Rotation is reversed for iOS
        compass.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
      }
      //non iOS
      else {
        alpha = event.alpha;
        webkitAlpha = alpha;
        if (!window.chrome) {
          //Assume Android stock (this is crude, but good enough for our example) and apply offset
          webkitAlpha = alpha - 270;
        }
      }

      compass.style.Transform = 'rotate(' + alpha + 'deg)';
      compass.style.WebkitTransform = 'rotate(' + webkitAlpha + 'deg)';
      //Rotation is reversed for FF
      compass.style.MozTransform = 'rotate(-' + alpha + 'deg)';
    }, false);
  }
}



/* Geolocation API */

if (!(window.navigator && window.navigator.geolocation)) {
  document.getElementById('g-unsupported').classList.remove('hidden');
  ['button-get-position', 'button-watch-position', 'button-stop-watching'].forEach(function(elementId) {
    document.getElementById(elementId).setAttribute('disabled', 'disabled');
  });
} else {
  var log = document.getElementById('log');
  var watchId = null;
  var positionOptions = {
    enableHighAccuracy: true,
    timeout: 10 * 1000, // 10 seconds
    maximumAge: 30 * 1000 // 30 seconds
  };

  function success(position) {
    document.getElementById('latitude').innerHTML = position.coords.latitude;
    document.getElementById('longitude').innerHTML = position.coords.longitude;
    document.getElementById('position-accuracy').innerHTML = position.coords.accuracy;

    document.getElementById('altitude').innerHTML = position.coords.altitude ? position.coords.altitude :
      'unavailable';
    document.getElementById('altitude-accuracy').innerHTML = position.coords.altitudeAccuracy ?
      position.coords.altitudeAccuracy :
      'unavailable';
    document.getElementById('heading').innerHTML = position.coords.heading ? position.coords.heading :
      'unavailable';
    document.getElementById('speed').innerHTML = position.coords.speed ? position.coords.speed :
      'unavailable';

    document.getElementById('timestamp').innerHTML = (new Date(position.timestamp)).toString();

    log.innerHTML = 'Position succesfully retrieved<br />' + log.innerHTML;
  }

  function error(positionError) {
    log.innerHTML = 'Error: ' + positionError.message + '<br />' + log.innerHTML;
  }

  document.getElementById('button-get-position').addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(success, error, positionOptions);
  });

  document.getElementById('button-watch-position').addEventListener('click', function() {
    watchId = navigator.geolocation.watchPosition(success, error, positionOptions);
  });

  document.getElementById('button-stop-watching').addEventListener('click', function() {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      log.innerHTML = 'Stopped watching position<br />' + log.innerHTML;
    }
  });

  //document.getElementById('clear-log').addEventListener('click', function() {
  //log.innerHTML = '';
  //});
}

/* Proximity API */

if (!('ondeviceproximity' in window)) {
  document.getElementById('dp-unsupported').classList.remove('hidden');
} else {
  var proximityValue = document.getElementById('dp-value');
  var proximityMax = document.getElementById('dp-max');
  var proximityMin = document.getElementById('dp-min');

  window.addEventListener('deviceproximity', function(event) {
    proximityValue.innerHTML = event.value;
    proximityMax.innerHTML = event.max;
    proximityMin.innerHTML = event.min;
  });
}

if (!('onuserproximity' in window)) {
  document.getElementById('up-unsupported').classList.remove('hidden');
} else {
  var inProximity = document.getElementById('up-value');

  window.addEventListener('userproximity', function(event) {
    inProximity.innerHTML = event.near;
  });
}

/* Vibration API */

window.navigator = window.navigator || {};
if (navigator.vibrate === undefined) {
  document.getElementById('v-unsupported').classList.remove('hidden');
  ['button-play-v-once', 'button-play-v-thrice', 'button-stop-v'].forEach(function(elementId) {
    document.getElementById(elementId).setAttribute('disabled', 'disabled');
  });
} else {
  document.getElementById('button-play-v-once').addEventListener('click', function() {
    navigator.vibrate(1000);
  });
  document.getElementById('button-play-v-thrice').addEventListener('click', function() {
    navigator.vibrate([1000, 500, 1000, 500, 2000]);
  });
  document.getElementById('button-stop-v').addEventListener('click', function() {
    navigator.vibrate(0);
  });
}

/* Network API */

//var networkDownlink = ;
var net1 = "Network effective bandwidth estimate " + navigator.connection.downlink + " MB/s";
var net2 = "Max download speed " + navigator.connection.downlinkMax + " MB/s";
var net3 = "Effective connection type " + navigator.connection.effectiveType + " MB/s";
var net4 = "estimated effective round-trip " + navigator.connection.rtt + " rounded to the nearest multiple of 25 milliseconds";
var net5 = "network connection type " + navigator.connection.type;

function networkAtributes() {
  document.getElementById('net1').innerHTML += net1;
  document.getElementById('net2').innerHTML += net2;
  document.getElementById('net3').innerHTML += net3;
  document.getElementById('net4').innerHTML += net4;
  document.getElementById('net5').innerHTML += net5;

  /* Language */

  var userLang = navigator.language || navigator.userLanguage;
  document.getElementById('lang').innerHTML += userLang;
}
networkAtributes();

/* Device Light API
if('ondevicelight' in window) {
    window.addEventListener("devicelight", function(event) {
        //light level is returned in lux units
        console.log(event.value + " lux");
    });
}

if('onlightlevel' in window){
    window.addEventListener("lightlevel", function(event) {
        //light value can be dim, normal or bright
        console.log(event.value);
    });
}
*/

//------------------------- Contacts API

function readContacts() {
  var api = (navigator.contacts || navigator.mozContacts);

  if (api && !!api.select) { // new Chrome API
    api.select({
        properties: ['name', 'email'],
        multiple: true
      })
      .then(function(contacts) {
        consoleLog('Found ' + contacts.length + ' contacts.');
        if (contacts.length) {
          consoleLog('First contact: ' + contacts[0].name + ' (' + contacts[0].email + ')');
        }
      })
      .catch(function(err) {
        consoleLog('Fetching contacts failed: ' + err.name);
      });

  } else if (api && !!api.find) { // old Firefox OS API
    var criteria = {
      sortBy: 'familyName',
      sortOrder: 'ascending'
    };

    api.find(criteria)
      .then(function(contacts) {
        consoleLog('Found ' + contacts.length + ' contacts.');
        if (contacts.length) {
          consoleLog('First contact: ' + contacts[0].givenName[0] + ' ' + contacts[0].familyName[0]);
        }
      })
      .catch(function(err) {
        consoleLog('Fetching contacts failed: ' + err.name);
      });

  } else {
    consoleLog('Contacts API not supported.');
  }
}

function consoleLog(data) {
  var logElement = document.getElementById('log');
  logElement.innerHTML += data + '\n';
}
