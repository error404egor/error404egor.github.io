var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.display = "";
  } else {
    document.getElementById("header").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
} 