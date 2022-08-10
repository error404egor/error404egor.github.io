var prevScrollpos = window.pageYOffset;


window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  header_on_top = window.pageYOffset <= window.innerHeight
  if ((prevScrollpos > currentScrollPos) || header_on_top) {
    header.style.display = "";
  } else {
    header.style.display = "none";
  }
  prevScrollpos = currentScrollPos;
} 