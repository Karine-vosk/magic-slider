let currentSlide = 0;
let sliderDuration = 1000;
let changeSlide = true;
let sliderArray = ['ajdahak.jpg','amberd.jpg','aragats.jpg','gegharot.jpg','halidzor.jpg','khustup.jpg','lori.jpg'];
$(document).ready(function(){
    //slider images
    sliderMove(sliderArray.length);

});


function sliderMove(imgCount){
    for(let i=0; i<imgCount; i++){
        $('.control-buttons-cont').append('<span data-name="'+i+'" class="control-button"></span>');
    }
    $('.control-button:first-child').addClass('push');
    $('.control-button').on('click', sliderSlicking);
}

function sliderSlicking() {

    $('.control-button').removeClass('push');
    $(this).addClass('push');

    if (!changeSlide){
        return false;
    }

    let currentButton = $(this).data('name');

    if(currentButton === currentSlide){
        return false;
    }

    $('.left.top-top > img').attr('src', '../images/slider_img/'+ sliderArray[currentButton]);
    $('.right.top-bottom > img').attr('src', '../images/slider_img/'+ sliderArray[currentButton]);

    if(currentButton > currentSlide){
        //left side
        $('.left.top-equal').addClass('top-bottom').removeClass('top-equal');
        $('.left.top-top').addClass('top-equal').removeClass('top-top');
        //right side
        $('.right.top-equal').addClass('top-top').removeClass('top-equal');
        $('.right.top-bottom').addClass('top-equal').removeClass('top-bottom');

        setTimeout(function () {
            //left side
            $('.left.top-bottom').removeClass('left').addClass('right');
            //right side
            $('.right.top-top').removeClass('right').addClass('left');
            changeSlide = true;

        }, sliderDuration);
    }
    else if(currentButton < currentSlide){

        $('.right.top-bottom').addClass('top-equal temporary').removeClass('right top-bottom');
        $('.right.top-equal').addClass('top-bottom').removeClass('top-equal');
        $('.left.top-top').addClass('right top-equal').removeClass('left top-top');
        $('.left.top-equal').removeClass('top-equal').addClass('top-top');

        setTimeout(function () {
            $('.temporary').removeClass('temporary').addClass('left');
            changeSlide = true;
        },sliderDuration)
    }

    changeSlide = false;
    currentSlide = $(this).data('name');
}
