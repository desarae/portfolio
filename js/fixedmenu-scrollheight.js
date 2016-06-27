jQuery(window).scroll(function(){
    var scroll_top = jQuery(this).scrollTop(); // get scroll position top
    var height_element_parent =  jQuery(".content-main").height(); //get high parent element
    var height_element = jQuery(".menuleft").height(); //get high of elemeneto
    var position_fixed_max = height_element_parent - height_element; // get the maximum position of the elemen
    var position_fixed = scroll_top < 100 ? 140 - scroll_top : position_fixed_max > scroll_top ? 40 : position_fixed_max - scroll_top ;
    jQuery(".menuleft").css("top",position_fixed);
});
