function change_image() {
  var url = document.getElementById('img-change').src;
  if (url == 'file:///Users/konradgnat/Documents/Code_Web/Build_Day/Build_Day_4-27/img/ciff-change002.png') {
    document.getElementById('img-change').src = 'img/ciff-change001.png';
  } else {
    document.getElementById('img-change').src = 'img/ciff-change002.png';
  }
}
function test() {
  alert("hello");
}
setInterval(change_image, 1000);
