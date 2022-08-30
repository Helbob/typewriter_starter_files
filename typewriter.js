"use strict";

let text = document.querySelector(".typewritten").textContent;
let i = -1;
let notext = document.querySelector("#typewriter");
notext.innerHTML = " ";

function init() {
  document.addEventListener("DOMContentLoaded", typewrite);
}
init();

function typewrite() {
  i++;
  if (i < text.length) {
    document.querySelector(".typewritten").innerHTML += text.charAt(i);
    setTimeout(typewrite, 1000);
  } else {
    i = -1;
    document.querySelector(".typewritten").innerHTML = "";
    setTimeout(typewrite, 2000);
    typewrite();
  }
}
