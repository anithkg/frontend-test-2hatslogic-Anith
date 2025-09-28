//sticky header
    (function($){"use strict";$(window).scroll(function(){var window_top=$(window).scrollTop()+1;if(window_top>50){$('.main_menu').addClass('menu_fixed animated fadeInDown');}else{$('.main_menu').removeClass('menu_fixed animated fadeInDown');}});if(document.getElementById('default-select')){$('select').niceSelect();}}(jQuery));

    //menu toggle
    $("#toggle").click(function() {
      $(this).toggleClass("on");
      $("#menu").slideToggle();
    });

//scroll to top
    $(window).scroll(function() {
              if ($(this).scrollTop() >= 50) {
                  $('#return-to-top').fadeIn(200);  
              } else {
                  $('#return-to-top').fadeOut(200);  
              }
          });
          $('#return-to-top').click(function() {  
              $('body,html').animate({
                  scrollTop : 0                  
              }, 500);
          });


