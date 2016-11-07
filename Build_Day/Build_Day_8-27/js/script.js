window.onload = function() {
    var concordImg = document.getElementById("concord-img");
    concordImg.className += " loaded";
}

function select(elem) {
  var div = document.getElementsByClassName("menu-bar-section");
  // var tabs = document.getElementsByClassName("tab");

  for (var i = 0; i < div.length; i++) {
    div[i].classList.remove("active");
    // tabs[i].classList.remove("display");
  }

  elem.classList.add("active");
  // console.log(elem);
}
