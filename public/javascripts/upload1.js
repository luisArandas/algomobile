if ($(window).width() < 960) {
  console.log("fda");
  console.log($(window).width());
  document.getElementById('algo-letters1').style['margin'] = "0";
  document.getElementById('algo-letters1').style['position'] = "absolute";
  document.getElementById('algo-letters1').style['left'] = "0px";

  document.getElementById('algo-letters1').style['top'] = "50%";
  document.getElementById('algo-letters1').style['-ms-transform'] = "translateY(-50%)";
  document.getElementById('algo-letters1').style['transform'] = "translateY(-50%)";


} else {
  document.getElementById('algo-letters1').style['margin'] = "0";
  document.getElementById('algo-letters1').style['position'] = "absolute";

  document.getElementById('algo-letters1').style['top'] = "50%";
  document.getElementById('algo-letters1').style['left'] = "0px";

  document.getElementById('algo-letters1').style['-ms-transform'] = "translateY(-50%)";
  document.getElementById('algo-letters1').style['transform'] = "translateY(-50%)";
}
