"use strict";
//initialization
let slides = [
  "images/plant1.jpg",
  "images/plant2.jpg",
  "images/plant3.jpg",
  "images/plant4.jpg",
];
let flag = true;
let time;
let i = 0;
let dots = document.getElementsByClassName("dot");
//initializing-function
function startSlideShow(i) {
  document.getElementById("slide").src = slides[i];
  clearInterval(time);
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[i].classList.toggle("active");
  if (flag) {
    time = setInterval(slideShow, 3000);
  }
}
//start-function
document.getElementById("start").addEventListener("click", () => {
  flag = true;
  if (flag){
    startSlideShow(i);
    document.getElementById("start").classList.add("hidden")
    document.getElementById("stop").classList.remove("hidden")
  }
});
//stop-function
document.getElementById("stop").addEventListener("click", () => {
  flag = false;
  if (!flag) {
    clearInterval(time);
    document.getElementById("start").classList.remove("hidden")
    document.getElementById("stop").classList.add("hidden")
  }
});
//overflow check
function slideShow() {
  if (i < slides.length - 1) {
    i++;
    startSlideShow(i);
  } else {
    i = 0;
    startSlideShow(i);
  }
}
//next btn
document.getElementById("next").addEventListener("click", () => {
  flag = false;
  document.getElementById("start").classList.remove("hidden");
  document.getElementById("stop").classList.add("hidden");
  if (i < slides.length - 1) {
      i++;
      startSlideShow(i);
    } else {
      i = 0;
      startSlideShow(i);
    }
  });
  //prev btn
  document.getElementById("prev").addEventListener("click", () => {
    flag = false;
    document.getElementById("start").classList.remove("hidden");
    document.getElementById("stop").classList.add("hidden");
    if (i <= slides.length - 1 && i > 0) {
    i--;
    startSlideShow(i);
  } else {
    i = slides.length - 1;
    startSlideShow(i);
  }
});

window.onload = startSlideShow(i);