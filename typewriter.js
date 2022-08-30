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
  //setTimeout
  i++;
  if (i < text.length) {
    document.querySelector(".typewritten").innerHTML += text.charAt(i);
    setTimeout(typewrite, 60);
  }

  console.log("vi skriver");
}
