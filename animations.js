function doArrive(element, elementHeight, elementTop) {
  elementVisible = window.innerHeight * 0.3;
  element.style.opacity = checkPosition(elementHeight, elementTop, elementVisible)[1];
}


function doArriveRight(element, elementHeight, elementTop) {
  elementVisible = window.innerHeight * 0.2;
  positionData = checkPosition(elementHeight, elementTop, elementVisible);
  element.style.right = positionData[2] + "%";
}


function doArriveLeft(element, elementHeight, elementTop) {
  elementVisible = window.innerHeight * 0.2;
  positionData = checkPosition(elementHeight, elementTop, elementVisible);
  element.style.left = positionData[2] + "%";
}


function doArriveBottom(element, elementHeight, elementTop) {
  elementVisible = window.innerHeight * 0.3;
  positionData = checkPosition(elementHeight, elementTop, elementVisible);
  element.style.bottom = positionData[2] + "%";
}


function doArriveTop(element, elementHeight, elementTop) {
  elementVisible = window.innerHeight * 0.3;
  positionData = checkPosition(elementHeight, elementTop, elementVisible);
  element.style.top = positionData[2] + "%";
}

function doChangeShadow(element) {
  element.style.boxShadow = `0px 0px 16px hsl(${element.getBoundingClientRect().top}, 100%, 50%)`;
}

function doChangeTextShadow(element) {
  element.style.textShadow = `0.4vw 0.4vw 1px hsl(${element.getBoundingClientRect().top}, 100%, 50%)`;
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
      const elementTop = element.parentNode.getBoundingClientRect().top;
      const elementHeight = element.parentNode.getBoundingClientRect().height;
      window.setTimeout(doArrive, 200, element, elementHeight, elementTop);
    }
    const animateds_right = document.querySelectorAll(".right_arrive");
    for (var i = 0; i < animateds_right.length; i++) {
      const element = animateds_right[i]
      const elementTop = element.parentNode.getBoundingClientRect().top;
      const elementHeight = element.parentNode.getBoundingClientRect().height;
      window.setTimeout(doArriveRight, 200, element, elementHeight, elementTop);
    }
    const animateds_left = document.querySelectorAll(".left_arrive");
    for (var i = 0; i < animateds_left.length; i++) {
      const element = animateds_left[i]
      const elementTop = element.parentNode.getBoundingClientRect().top;
      const elementHeight = element.parentNode.getBoundingClientRect().height;
      window.setTimeout(doArriveLeft, 200, element, elementHeight, elementTop);
    }
    const animateds_bottom = document.querySelectorAll(".bottom_arrive");
    for (var i = 0; i < animateds_bottom.length; i++) {
      const element = animateds_bottom[i]
      const elementTop = element.parentNode.getBoundingClientRect().top;
      const elementHeight = element.parentNode.getBoundingClientRect().height;
      window.setTimeout(doArriveBottom, 200, element, elementHeight, elementTop);
    }
    const animateds_top = document.querySelectorAll(".top_arrive");
    for (var i = 0; i < animateds_top.length; i++) {
      const element = animateds_top[i]
      const elementTop = element.parentNode.getBoundingClientRect().top;
      const elementHeight = element.parentNode.getBoundingClientRect().height;
      window.setTimeout(doArriveTop, 100, element, elementHeight, elementTop);
    }
    const animateds_shadow = document.querySelectorAll(".animated_shadow");
    for (var i = 0; i < animateds_shadow.length; i++) {
      const element = animateds_shadow[i]
      window.setTimeout(doChangeShadow, 100, element);
    }
    const animateds_text_shadow = document.querySelectorAll(".animated_text_shadow");
    for (var i = 0; i < animateds_text_shadow.length; i++) {
      const element = animateds_text_shadow[i]
      window.setTimeout(doChangeTextShadow, 100, element);
    }
    }

    
window.addEventListener("scroll", animated)
