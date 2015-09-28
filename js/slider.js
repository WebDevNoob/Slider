"use strict";
var sliderNext = 1, loop;
/*global $, jQuery*/

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
function showSlide() {
    if (loop) {
        window.clearInterval(loop);
        boundDisplay();
    }
    loop = setInterval(function () {
        boundDisplay();
    }, 3000);
}
$(document).ready(function () {
    $("#slider > img").first().fadeIn(300);
    showSlide();
});
function prev() {
    sliderNext = sliderNext - 2;
    showSlide();
}
function next() {
    showSlide();
}
$("#slider > img").hover(function () {
    window.clearInterval(loop);
},
    function () {
        loop = 0;
        showSlide();
    });
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