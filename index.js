function doArrive(element, elementHeight, elementTop) {
  var windowHeight = window.innerHeight;
  elementVisible = windowHeight * 0.3;
  element.style.opacity = checkPosition(elementHeight, elementTop, elementVisible)[1]
}


function doArriveRight(element, elementHeight, elementTop) {
  var windowHeight = window.innerHeight;
  elementVisible = windowHeight * 0.2;
  positionData = checkPosition(elementHeight, elementTop, elementVisible)
  element.style.right = positionData[2] + "%"
}


function doArriveLeft(element, elementHeight, elementTop) {
  var windowHeight = window.innerHeight;
  elementVisible = windowHeight * 0.2;
  positionData = checkPosition(elementHeight, elementTop, elementVisible)
  element.style.left = positionData[2] + "%"
}


function checkPosition(elementHeight, elementTop, elementVisible) {
  var windowHeight = window.innerHeight;
  if (elementTop + elementHeight > 0 && elementTop + elementHeight < elementVisible) {
    opacity = Math.pow((elementTop + elementHeight) / elementVisible, 2);
    shift = 100 - opacity * 100;
    return [1, opacity, shift]
  } else if ((elementTop + elementHeight >= elementVisible) && (elementTop <= windowHeight - elementVisible)) {
    opacity = 1;
    shift = 0;
    return [2, opacity, shift]
  } else if ((elementTop > windowHeight - elementVisible) && (elementTop < windowHeight)) {
    opacity = Math.pow((windowHeight - elementTop) / elementVisible, 2);
    shift = 100 - opacity * 100
    return [3, opacity, shift]
  } else {
    opacity = 0;
    shift = 100;
    return [0, opacity, shift]
  }
}


function animated() {
    const animateds_opacity = document.querySelectorAll(".animated_opacity");
    for (var i = 0; i < animateds_opacity.length; i++) {
      const element = animateds_opacity[i]
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      window.setTimeout(doArrive, 200, element, elementHeight, elementTop);
    }
    const animateds_right = document.querySelectorAll(".right_arrive");
    for (var i = 0; i < animateds_right.length; i++) {
      const element = animateds_right[i]
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      window.setTimeout(doArriveRight, 200, element, elementHeight, elementTop);
    }
    const animateds_left = document.querySelectorAll(".left_arrive");
    for (var i = 0; i < animateds_left.length; i++) {
      const element = animateds_left[i]
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      window.setTimeout(doArriveLeft, 200, element, elementHeight, elementTop);
    }
    }
  
window.addEventListener("scroll", animated)