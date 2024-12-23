"use strict";

let slideIndex = 1;
showSlides(slideIndex);

function autoSlide() {
  plusSlides(1);
}

setInterval(autoSlide, 3000);

function plusSlides(n) {
  showSlides((slideIndex = slideIndex + n));
}

function currentSlide() {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  Array.from(slides).forEach((slide) => {
    slide.style.display = "none";
  });

  Array.from(dots).forEach((dot) => {
    dot.classList.remove("active");
  });

  // SHOW CURRENT SLIDES AND SET CORRESPONDING DOTS
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

/*
// SET INTERVAL, SET TIMER

function hi() {
  console.log("Hi");
}

setTimeout(hi, 3000);
// Note that the above time is in milliseconds
// This also only runs ONCE

function hello() {
  console.log("Hello");
}
setInterval(hello, 1000);
// Same time measurement as setTimeout
*/
