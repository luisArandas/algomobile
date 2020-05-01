if ($(window).width() < 960) {

  document.getElementsByClassName('logo')[0].style.visibility = 'hidden';
  document.getElementById('navbar').style.display = 'block';

  //document.getElementById('footer').style.display = 'none';

  document.getElementById('rmv').style.display = 'none';
  document.getElementById('footer').style.display = 'none';

  //document.getElementById('sub-text').style["background-color"] = "red";

  document.getElementById('sub-text').style["position"] = "absolute";

  document.getElementById('sub-text').style["top"] = "15%";
  document.getElementById('sub-text').style["color"] = "white";
  document.getElementById('sub-text').style["font-family"] = "Proxima Nova !important";

  document.getElementById('sub-text').style["left"] = "1%";
  document.getElementById('sub-text').style["height"] = "80%";
  document.getElementById('sub-text').style["width"] = "98%";
  document.getElementById('sub-text2').style["font-size"] = "14px";



} else {

}
