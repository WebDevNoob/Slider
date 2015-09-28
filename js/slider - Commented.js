/*Use Strict, Global Vars, $ jQuery JsLint fix*/
"use strict";
var sliderNext = 1, loop;
/*global $, jQuery*/

//Checks if sliderNext is within operating area, mod if not, display after, adding 1 to sliderNext;
function boundDisplay() {
    if (sliderNext > (($("#slider > img").size() - 1))) {
        sliderNext = 0;
    } else if (sliderNext < 0) {
        sliderNext = (($("#slider > img").size() - 1));
    }
    $("#slider > img").fadeOut(300);
    $("#slider > img#" + sliderNext).fadeIn(300);
    sliderNext = sliderNext + 1;
}

//Checks if currently looping, if so clears loop and displays new slide, if not, loop every 3sec
function showSlide() {
    if (loop) {
        window.clearInterval(loop);
        boundDisplay();
    }
    loop = setInterval(function () {
        boundDisplay();
    }, 3000);
}
//When the document is loaded, display first image, then start loop
$(document).ready(function () {
    $("#slider > img").first().fadeIn(300);
    showSlide();
});

//Forward and back picture button functions
function prev() {
    sliderNext = sliderNext - 2;
    showSlide();
}
function next() {
//Since the last part of boundDisplay adds 1 to sliderNext, this just needs to be called
    showSlide();
}
//On Hover clear the loop to freeze picture, on exit, restart loop and start slideshow again
$("#slider > img").hover(function () {
    window.clearInterval(loop);
},
    function () {
        loop = 0;
        showSlide();
    });
//Mouse related functions, left click forward, right click backwards, middle click nothing. The context menu is disabled in the HTML
$("#slider > img").mousedown(function (event) {
    switch (event.which) {
    case 1:
        boundDisplay();
        break;
    case 2:
        break;
    case 3:
        sliderNext = sliderNext - 2;
        boundDisplay();
        break;
    default:
        break;
    }
});