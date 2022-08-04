// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(500);
        $(this).toggleClass('active');
    });

    // Animate on Scroll - activate
    AOS.init({
        duration: 1000,
    });

});