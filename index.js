function doArrive(element, elementHeight, elementTop) {
    var windowHeight = window.innerHeight;
    elementVisible = windowHeight * 0.45;
    if (elementTop + elementHeight > 0 && elementTop + elementHeight < elementVisible) {
        console.log(1)
        element.style.opacity = Math.pow((elementTop + elementHeight) / elementVisible, 2);
      } else if ((elementTop + elementHeight >= elementVisible) && (elementTop <= windowHeight - elementVisible)) {
        console.log(2)
        element.style.opacity = 1;
      } else if ((elementTop > windowHeight - elementVisible) && (elementTop < windowHeight)) {
        console.log(3)
        element.style.opacity = Math.pow((windowHeight - elementTop) / elementVisible, 2);
      } else {
        console.log(4)
        element.style.opacity = 0;
      }
}


function animated() {
    var animateds = document.querySelectorAll(".animated");
    for (var i = 0; i < animateds.length; i++) {
      var element = animateds[i]
      var elementTop = element.getBoundingClientRect().top;
      var elementHeight = element.getBoundingClientRect().height;
      window.setTimeout(doArrive, 200, element, elementHeight, elementTop);
    }
    }
  
window.addEventListener("scroll", animated)