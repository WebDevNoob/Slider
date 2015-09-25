var sliderNext = 0;
$(document).ready(function () {
    $("#slider > img").first().fadeIn(300);
    startSlider();
});

function startSlider() {
    loop = setInterval(function () {
        sliderNext = sliderNext + 1;
        if (sliderNext > (($("#slider > img").size() - 1))) {
            sliderNext = 0;
        }
        $("#slider > img").fadeOut(300);
        $("#slider > img#" + sliderNext).fadeIn(300);
    }, 3000);
}

function prev(){
    showSlide((sliderNext - 1));
    console.log(sliderNext);
};   
function next(){
    showSlide((sliderNext + 1));
    console.log(sliderNext);
};

function showSlide(arg){
    window.clearInterval(loop);
        if (arg > (($("#slider > img").size() - 1))) {
            arg = 0;
        }else if (arg < 1) {
            arg = (($("#slider > img").size() - 1));
        }
        $("#slider > img").fadeOut(300);
        $("#slider > img#" + arg).fadeIn(300);
    sliderNext = arg;
    startSlider();
}   

$("#slider > img").hover(
    function(){
        window.clearInterval(loop);
    },
    function(){
        startSlider();
    });

