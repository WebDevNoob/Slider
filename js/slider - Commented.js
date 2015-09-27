/*When document is loaded, fade in the first element in the #slider > img div,
then start looping through images. Sets the global sliderNext var, which is used to find current slide for functions*/
var sliderNext = 0;
$(document).ready(function () {
    $("#slider > img").first().fadeIn(300);
    startSlider();
});
//Modular SlideShow Starters
function startSlider() {
//Main Loop runs every 3 seconds
    loop = setInterval(function () {
//Add one to slidernext to move it to the next slide  
        sliderNext = sliderNext + 1;
//if sliderNext is greater then the length of of the div minus one set sliderNext back to 0
        if (sliderNext > (($("#slider > img").size() - 1))) {
            sliderNext = 0;
        }
//Fade out previous div img
        $("#slider > img").fadeOut(300);
//Fade in new div img using concat + sliderNext
        $("#slider > img#" + sliderNext).fadeIn(300);
//Wait 3 seconds in between iterations
    }, 3000);
}

//Previous Button Function - showSlide func uses sliderNext global var minus one to go back a slide
function prev(){
    showSlide((sliderNext - 1));
};  
//Next Button Function - showSlide func uses sliderNext global var pus one to go foward a slide 
function next(){
    showSlide((sliderNext + 1));
};
//Function to show a called slide arg is placeholder var thats assigned by the prev() or next()
function showSlide(arg){
//Clears the Interval of time so it doesn't bunch up on itself
    window.clearInterval(loop);
//Checking bounds
        if (arg > (($("#slider > img").size() - 1))) {
            arg = 0;
        }else if (arg < 1) {
            arg = (($("#slider > img").size() - 1));
        }
//Fade out previous div img
        $("#slider > img").fadeOut(300);
//Fade in new div img using concat + sliderNext    
        $("#slider > img#" + arg).fadeIn(300);
//Updates sliderNext to placeholder var to restart interval
    sliderNext = arg;
//Restarts Slider    
    startSlider();
}   

//When the slider is hovered over, clears the interval, when removed, starts slider again
$("#slider > img").hover(
    function(){
        window.clearInterval(loop);
    },
    function(){
        startSlider();
    });



