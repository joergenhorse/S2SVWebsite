/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px


    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.nav').addClass("scrolled");
        $('#hamburger').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.nav').removeClass("scrolled");
        $('#hamburger').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}