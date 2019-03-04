socket = io.connect(window.location.origin);
socket.on('mouse', teste);
window.addEventListener("mousedown", myScript);

function myScript() {
  var data = "myScript()";
  console.log(data);
  //socket.emit('emissor', data);
}

/*
Show this
Network Scan
Metadata das imagens
https://pavelk2.github.io/social-feed-example/
http://webkay.robinlinus.com
https://github.com/RobinLinus
https://developers.google.com/maps/documentation/javascript/examples/map-geolocation

Fazer a conversão do charger
Mobile x was in 4 pages.
4 momentos vitais
Integrar um sistema de login

Primeiro momento registas
Segundo hardware -> mais hardware
Terceiro maquina e a pessoa -> sensores; TENTAR VER O IDIOMA
Mais social <- HASHTAG
Metadata das fotos

Ponto de vista visual -> como alimenta o espaço

Fazer login e dar stream segunda pagina depois
*/

function nextPage() {
  console.log("Click");
  if (document.getElementById("entranceDiv").style.zIndex != "0") {
    document.getElementById("entranceDiv").style.zIndex = "0";
  } else {
    document.getElementById("entranceDiv").style.zIndex = "10";
  }
  /*var elem = document.getElementById('img');
  if (elem.getAttribute('src') == "") {
    alert("empty");
  } else {
    elem.getAttribute('src');
  }*/
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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
  document.getElementById("imageupload").style.backgroundImage = "url('" + data + "')";
}

console.log("Algo Mobile" + "\n" + "Starting...");
/* Printing Cookies */
console.log(document.cookie);

/* Printing history methods*/
console.log(window.history);

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

/*
COMPASSO
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
        if(window.DeviceOrientationEvent) {

          window.addEventListener('deviceorientation', function(event) {
                var alpha;
                //Check for iOS property
                if(event.webkitCompassHeading) {
                  alpha = event.webkitCompassHeading;
                  //Rotation is reversed for iOS
                  compass.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
                }
                //non iOS
                else {
                  alpha = event.alpha;
                  webkitAlpha = alpha;
                  if(!window.chrome) {
                    //Assume Android stock (this is crude, but good enough for our example) and apply offset
                    webkitAlpha = alpha-270;
                  }
                }

                compass.style.Transform = 'rotate(' + alpha + 'deg)';
                compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                //Rotation is reversed for FF
                compass.style.MozTransform = 'rotate(-' + alpha + 'deg)';
              }, false);
        }
      }
    </script>
  </head>
  <body onload="init()">
    <div id="compassContainer">
      <img src="compass.png" id="compass"/>
    </div>
  </body>
</html>

COMPASSO
*/