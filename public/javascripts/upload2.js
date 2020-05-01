if ($(window).width() < 960) {

  document.getElementsByClassName('logo')[0].style.visibility = 'hidden';
  document.getElementsByClassName('footer')[0].style.visibility = 'hidden';

  document.getElementById('navbar').style.display = 'block';
  document.getElementById('rmv').style.display = 'none';

  document.getElementById('projectsname').style["position"] = "absolute";
  //document.getElementById('projectsname').style["background-color"] = "red";

  document.getElementById('projectsname').style["top"] = "15%";
  document.getElementById('projectsname').style["left"] = "1%";
  document.getElementById('projectsname').style["height"] = "80%";
  document.getElementById('projectsname').style["width"] = "98%";

  document.getElementById('project1').style["height"] = "35%";

  document.getElementById('project1').style["width"] = "100%";

  document.getElementById('project2').style["height"] = "35%";
  document.getElementById('project2').style["margin-top"] = "5%";

  document.getElementById('project2').style["width"] = "100%";

} else {

}
