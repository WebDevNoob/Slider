/*When document is loaded, fade in the first element in the #slider > img div,
then start looping through images. Sets the global sliderNext var, which is used to find current slide for functions*/
var sliderNext = 1;
var loop;
$(document).ready(function () {
    $("#slider > img").first().fadeIn(300);
    showSlide();
});
//Previous Button Function - showSlide func uses sliderNext global var minus one to go back a slide
function prev(){
    sliderNext = sliderNext - 2;
    showSlide();
};
//Next Button Function - showSlide func uses sliderNext global var pus one to go foward a slide 
function next(){
    sliderNext = sliderNext;
    showSlide();
};

function showSlide(){
//If currently in loop clear interval, check if in bounds, then display picture. 
    if(loop){
        window.clearInterval(loop);
        if (sliderNext > (($("#slider > img").size() - 1))) {
            sliderNext = 0;
        }else if (sliderNext < 0) {
            sliderNext = (($("#slider > img").size() - 1));
        }
        $("#slider > img").fadeOut(300);
        $("#slider > img#" + sliderNext).fadeIn(300);   
    sliderNext++;
    }    
//If not currently in loop, check bounds, then display picture and cycle pictures every 3 seconds
    loop = setInterval(function () {
        if (sliderNext > (($("#slider > img").size() - 1))) {
            sliderNext = 0;
        }else if (sliderNext < 1) {
            sliderNext = (($("#slider > img").size() - 1));
        }
        $("#slider > img").fadeOut(300);
        $("#slider > img#" + sliderNext).fadeIn(300);
    sliderNext++;
    }, 3000);
}

//When the slider is hovered over, clears the interval, when removed, starts slider again
$("#slider > img").hover(function(){
        window.clearInterval(loop);
    },
        function(){
        setTimeout(showSlide(),3000);
});


