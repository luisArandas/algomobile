
if ($(window).width() < 960) {

  document.getElementsByClassName('logo')[0].style.visibility = 'hidden';
  document.getElementById('navbar').style.display = 'block';

  document.getElementById('footer').style.display = 'none';

  document.getElementById('h1').style.display = 'none';
  document.getElementById('rmv').style.display = 'none';

  //document.getElementById('sub-text').style["background-color"] = "red";

  document.getElementById('sub-text').style["position"] = "absolute";

  document.getElementById('sub-text').style["top"] = "20%";
  document.getElementById('sub-text').style["color"] = "white";
  document.getElementById('sub-text').style["font-family"] = "Proxima Nova !important";

  document.getElementById('sub-text').style["left"] = "1%";
  document.getElementById('sub-text').style["height"] = "80%";
  document.getElementById('sub-text').style["width"] = "98%";



  document.getElementById('input1').style["width"] = "100%";
  document.getElementById('input1').style["height"] = "30px";
  document.getElementById('input1').style["background-color"] = "rgba(0,0,150,1)";
  document.getElementById('input1').style["color"] = "white";

  document.getElementById('input2').style["width"] = "100%";
  document.getElementById('input2').style["height"] = "30px";
  document.getElementById('input2').style["background-color"] = "rgba(0,0,150,1)";
  document.getElementById('input2').style["color"] = "white";

  document.getElementById('input3').style["width"] = "100%";
  document.getElementById('input3').style["height"] = "30px";
  document.getElementById('input3').style["background-color"] = "rgba(0,0,150,1)";
  document.getElementById('input3').style["color"] = "white";

  document.getElementById('regist').style["width"] = "100%";
  document.getElementById('regist').style["background-color"] = "rgba(0,0,150,1)";

  document.getElementById('regist').style["height"] = "30px";
  document.getElementById('regist').style["color"] = "white";

} else {

}


socket = io.connect(window.location.origin);
window.addEventListener("mousedown", myScript);
console.log(socket);
console.log("page loads");


$(function() {
    $('#input3').on('keypress', function(e) {
        if (e.which == 32)
            return false;
        else if (e.which == 187)
            return false;
    });
});


function myScript() {
  var data = "clicking";
  console.log(document.getElementById('input2').value);
  //socket.emit('emissor', data);
}

var z = navigator.userAgent;
var _z = z.replace(/,/g, '-');
var __z = _z.replace(/;/g, '-');

var l = "Navigator_Languages_" + navigator.languages;
var _l = l.replace(/,/g, '-');
var __l = _l.replace(/;/g, '-');

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


var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};


var o;
var _o;
var ip_;
/* IP */
$(document).ready(function() {
  if (location.protocol != 'https:') {
    $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
      document.getElementById('e1').innerHTML = "- " + "<br>" + JSON.stringify(data, null, 2) + "<br>";
      var o = JSON.stringify(data, null, 2);
      var _o = o.replace(/,/g, '-');
      ip_ = "54, " + _o + ";";
    });
  }
});


//document.getElementById('f1').innerHTML = "- internetHistory_thisTab = " + window.history.length + "pages";
//document.getElementById('f2').innerHTML = "- thisIsAcookie =" + document.cookie;


function register(v) {

console.log("register works");

  var reg1 = "2, " + document.getElementById('input1').value + ";";
  var reg2 = "4, " + document.getElementById('input2').value + ";";
  var reg3 = "6, " + document.getElementById('input3').value + ";";
  //var reg4 = "4, " + document.getElementById('input4').value + ";";
  //var reg5 = "5, " + document.getElementById('input5').value + ";";

  var a1 = "8, cores " + navigator.hardwareConcurrency + ";";
  var a2 = "9, performance Memory_jsHeapSizeLimit_" + performance.memory.jsHeapSizeLimit + ";";
  var a3 = "10, performance Memory_totalJSHeapSize_" + performance.memory.totalJSHeapSize + ";";
  var a4 = "11, performance Memory_usedJSHeapSize_" + performance.memory.usedJSHeapSize + ";";
  var a5 = "12, performance Timing_connectEnd_" + performance.timing.connectEnd + ";";
  var a6 = "13, performance Timing_connectStart_" + performance.timing.connectStart + ";";
  var a7 = "14, performance Timing_domComplete_" + performance.timing.domComplete + ";";
  var a8 = "15, performance Timing_domContentLoadedEventEnd_" + performance.timing.domContentLoadedEventEnd + ";";
  var a9 = "16, performance Timing_domContentLoadedEventStart_" + performance.timing.domContentLoadedEventStart + ";";
  var a10 = "17, performance Timing_domInteractive_" + performance.timing.domInteractive + ";";
  var a11 = "18, performance Timing_domLoading_" + performance.timing.domLoading + ";";
  var a12 = "19, performance Timing_domainLookupEnd_" + performance.domainLookupEnd + ";";
  var a13 = "20, performance Timing_domainLookupStart_" + performance.timing.domainLookupStart + ";";
  var a14 = "21, performance Timing_fetchStart_" + performance.timing.fetchStart + ";";
  var a15 = "22, performance Timing_loadEventEnd_" + performance.timing.loadEventEnd + ";";
  var a16 = "23, performance Timing_loadEventStart_" + performance.timing.loadEventStart + ";";
  var a17 = "24, performance Timing_redirectEnd_" + performance.timing.redirectEnd + ";";
  var a18 = "25, performance Timing_redirectStart_" + performance.timing.redirectStart + ";";
  var a19 = "26, performance Timing_responseEnd_" + performance.timing.responseEnd + ";";
  var a20 = "27, performance Timing_responseStart_" + performance.timing.responseStart + ";";
  var a21 = "28, performance Timing_secureConnectionStart_" + performance.timing.secureConnectionStart + ";";
  var a22 = "29, performance Timing_unloadEventEnd_" + performance.timing.unloadEventEnd + ";";
  var a23 = "30, performance Timing_unloadEventStart_" + performance.timing.unloadEventStart + ";";

  canvas = document.getElementById("glcanvas");
  var gl = canvas.getContext("experimental-webgl");
  console.log(gl);


  var a24 = "32, GL RENDERER ";// + gl.getParameter(gl.RENDERER) + ";";
  var a25 = "33, GL RendererUM ";// + getUnmaskedInfo(gl).renderer + ";";
  var a26 = "35, GL VENDOR "; //gl.getParameter(gl.VENDOR) + ";";
  var a27 = "36, GL VendorUM ";// + getUnmaskedInfo(gl).vendor + ";";

  var a28 = "38, Device Screen Width_" + screen.width + ";" + "<br>";
  var a29 = "39, Device Screen Height_" + screen.height + ";" + "<br>";

  var a30 = "41, Device Screen availWidth_" + screen.availWidth + ";" + "<br>";
  var a31 = "42, Device Screen availHeight_" + screen.availHeight + ";" + "<br>";
  var a32 = "43, Device Screen colorDepth_" + screen.colorDepth + ";" + "<br>";
  var a33 = "44, Device Screen pixelDepth_" + screen.pixelDepth + ";" + "<br>";

  var a34 = "45, User Agent_" + navigator.userAgent + ";" + "<br>";
  var _a34 = a34.replace(/,/g, '-');


  var a35 = "46, Vendor_" + navigator.vendor + ";" + "<br>";
  var a36 = "47, ProductSub_" + navigator.productSub + ";" + "<br>";
  var a37 = "48, Platform_" + navigator.platform + ";" + "<br>";

  var a38 = "Navigator_Languages_" + navigator.languages + ";" + "<br>";
  var _a38 = a38.replace(/,/g, '-');

  var a39 = "50, Credentials_" + navigator.appName + ";" + "<br>";
  var a40 = "51, Credentials_" + navigator.appCodeName + ";" + "<br>";
  var a41 = "52, cookieEnabled_" + navigator.cookieEnabled + ";" + "<br>";

  var a42 = "56, internetHistory_thisTab =" + window.history.length + ";";

  var a43 = "56, thisIsAcookie =" + document.cookie + ";";
  var _a43 = a43.replace(/,/g, '-');
  var __43 = _a43.replace(/(\r\n|\n|\r)/gm, "");

  var x = navigator.plugins.length; // store the total no of plugin stored
  var txt = "58, Total plugin installed: " + x + ";" + "<br/>";
  txt += "59, Available plugins are;" + "<br/>";
  for (var i = 0; i < x; i++) {
    txt += "60, " + navigator.plugins[i].name + " - ";
  }

  var a = txt;
  var a44 = a + ";";

  var ok1 = document.getElementById('charging');
  var ok2 = document.getElementById('level');
  var ok3 = document.getElementById('dischargingTime');
  var a45 = "59, " + ok1.innerHTML + ";" + '<br>';
  var a46 = "60, " + ok2.innerHTML + ";" + '<br>';
  var a47 = "61, " + ok3.innerHTML + ";" + '<br>';

  var a48 = "63, " + "Network effective bandwidth estimate " + navigator.connection.downlink + " MB/s" + ";" + '<br>';
  var a49 = "64, " + "Max download speed " + navigator.connection.downlinkMax + " MB/s" + ";" + '<br>';
  var a50 = "65, " + "Effective connection type " + navigator.connection.effectiveType + " MB/s" + ";" + '<br>';
  var a51 = "66, " + "estimated effective round-trip " + navigator.connection.rtt + " rounded to the nearest multiple of 25 milliseconds" + ";" + '<br>';
  var a52 = "67, " + "network connection type " + navigator.connection.type + ";" + '<br>';
  var a53 = "69, " + navigator.language + ";";
  var a54 = "70, " + navigator.userLanguage + ";";

  var ok4 = document.getElementById('loggedIn');
  //var a54 = "58, " + a4.innerHTML + ";" + '<br>';
  var a = "72, " + a4.innerHTML + ";" + '<br>'; //<-- this

  if (reg1 != "" && reg2 != "" && reg3 != "") {
    var data = [];
    data.push("1, Name;</b>" + '<br>' + reg1 + '<br>' + '3, Date of Birth;</b>' + '<br>' + reg2 + '<br>' + '5, Mobile Phone;</b>' + '<br>' + reg3 + '<br>' + '7, CPU; <br>' + a1 + '<br>' + a2 + '<br>' + a3 + '<br>' + a4 + '<br>' + a5 + '<br>' + a6 + '<br>' + a7 + '<br>' + a8 + '<br>' + a9 + '<br>' + a10 + '<br>' + a11 + '<br>' + a12 + '<br>' + a13 + '<br>' + a14 + '<br>' + a15 + '<br>' + a16 + '<br>' + a17 + '<br>' + a18 + '<br>' + a19 + '<br>' + a20 + '<br>' + a21 + '<br>' + a22 + '<br>' + a23 + '<br>31, GPU;</b> <br>' + a24 + "<br>" + a25 + "<br>34, VENDOR;</b> <br>" + a26 + "<br>" + a27 + "<br>37, DISPLAY;<br>" + a28 + a29 + "40, ACCESS DEVICE;<br>" + a30 + a31 + a32 + a33 + "45, " + __z + "; <br>" + a35 + a36 + a37 + "49, " + __l + ";" + "<br>" + a39 + a40 + a41 + "53, IP;<br>" + ip_ + "<br>55, HISTORY;<br>" + a42 + '<br>57, PLUGINS;</br>' + '58, BATTERY;</br>' + a45 + a46 + a47 + '62, NETWORK INFO;</b></br>' + a48 + a49 + a50 + a51 + a52 + '68, DEVICE LANGUAGE;</br>' + a53 + '<br>' + a54 + '<br>' + '71, USER CONNECTED TO;<br>' + a);
    socket.emit('email', data);
    console.log(data);
    $("#registerBox").fadeOut("slow", function() {
      console.log("fadeout");
    });
  }
  /*if (reg1 == "" || reg2 == "" || reg3 == ""){
    alert("Please, fill the form before register.");
  }
  if (reg1 != ""){
    var e = document.getElementById('input1').value;
    document.getElementById('aboutYou').innerHTML += 'We look forward to see you, ' + e + ".";
  }*/

  var iDiv = document.createElement('div');
  iDiv.innerHTML = "Thanks for Registering!"
  document.getElementById('register').appendChild(iDiv);
  console.log("done");

}

socket.on('err', function(data) {
  console.log(data);
});

/*
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


  var userLang = navigator.language || navigator.userLanguage;
  document.getElementById('lang').innerHTML += userLang;
}
networkAtributes();
*/
