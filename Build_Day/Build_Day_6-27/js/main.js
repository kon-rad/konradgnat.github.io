function change_image() {
  var element1 = document.getElementById('img-change001');
  var element2 = document.getElementById('img-change002');
  var element3 = document.getElementById('img-change003');
  var element4 = document.getElementById('img-change004');
  var element5 = document.getElementById('img-change005');
  if (hasClass(element1)) {
    element2.className = "visible";
    element1.className = "";
  } else if (hasClass(element2)) {
    element3.className = "visible";
    element2.className = "";
  } else if (hasClass(element3)) {
    element4.className = "visible";
    element3.className = "";
  } else if (hasClass(element4)) {
    element5.className = "visible";
    element4.className = "";
  } else if (hasClass(element5)) {
    element1.className = "visible";
    element5.className = "";
  }
}
function hasClass(element) {
  return (' ' + element.className + ' ').indexOf('visible') > -1;
}

setInterval(change_image, 6000);
