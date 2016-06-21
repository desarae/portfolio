var scrollSpeed = 500,
    ease = 'easeOutCubic'

$('ul.alpha-nav a').click(function() {
       
    var id = $(this).attr('href');  
    $('.content-holder').css('overflow', 'visible'); 
    var offset = $(id).offset().top - 40;
    $('.content-holder').css('overflow', 'hidden');  
    $('.content-holder').animate({ scrollTop: offset},scrollSpeed,ease);
    return false;
        });
