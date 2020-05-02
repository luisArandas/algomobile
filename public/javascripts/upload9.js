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
