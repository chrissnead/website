(function($) {
"use strict";
 
$(document).ready(function() {
 
$('#blog .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
dots: false,
nav: true,
navText: ['<i class="fa fa-arrow-left fa-2x"></i>','<i class="fa fa-arrow-right fa-2x"></i>'], //Note, if you are not using Font Awesome in your theme, you can change this to Previous & Next
responsive:{
        0:{
            items:1,
            //nav:true
        },
        767:{
            items:2,
            //nav:false
        },
    }
});
})
})(jQuery);
