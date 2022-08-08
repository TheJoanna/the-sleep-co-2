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

// Popup Light Gallery
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
  });

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
  });