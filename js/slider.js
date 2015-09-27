var sliderNext = 1;
var loop;
$(document).ready(function () {
    $("#slider > img").first().fadeIn(300);
    showSlide();
});
function prev(){
    sliderNext = sliderNext - 2;
    showSlide();
};
function next(){
    sliderNext = sliderNext;
    showSlide();
};
$("#slider > img").hover(function(){
        window.clearInterval(loop);
    },
        function(){
        setTimeout(showSlide(),3000);
});
function showSlide(){
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
