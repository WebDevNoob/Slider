//When document is loaded, fade in the first element in the #slider > img div,
//then start looping through images. 
$(document).ready(function () {
//    'use strict';
    $("#slider > img").first().fadeIn(300);
    startSlider();
});
//Modular SlideShow Starters
function startSlider() {
//    'use strict';
    var sliderNext, loop;
//pre-set sliderNext to 0
    sliderNext = 0;
//loop is not nessasary to set yet, setInterval is the main looping function
    loop = setInterval(function () {
 //add one to slidernext to move it to the next slide   
        sliderNext = sliderNext + 1;
//if sliderNext is greater then the length of of the div minus one set sliderNext back to 0
        if (sliderNext > (($("#slider > img").size() - 1))) {
            sliderNext = 0;
        }
//Fade out previous div img
        $("#slider > img").fadeOut(300);
//Fade in new div img using concat + sliderNext
        $("#slider > img#" + sliderNext).fadeIn(300);
//Wait 3 seconds in between each iteration
    }, 3000);
}


