jQuery(document).ready(function() {
   // Header section
   jQuery('.h-nav li a span').mouseenter(function() {
      jQuery(".h-nav li a i").css({
         'color': 'red'
      })
   })
   jQuery('.h-nav li a span').mouseleave(function() {
      jQuery(".h-nav li a i").css({
         'color': '#505050'
      })
   })
   // Navigation bar
   jQuery('.navigation .bar').click(function() {
      jQuery('.navigation ul').slideToggle(500);
   });
   jQuery(window).resize(function() {
      var screenwidth = jQuery(window).width();
      if (screenwidth > 767) {
         jQuery('.navigation .main-menu').show();
      } else {
         jQuery('.navigation .main-menu').hide();
      };

   });
   // Comprehensive Direct Marketing Solutins
   jQuery(window).scroll(function() {
      var screenwidth = jQuery(window).width();
      if (screenwidth > 767) {
         jQuery(".ms-images .img1 img , .ms-images .img1 .learn1 a , .ms-images .img1 .it-data").mouseenter(function() {
            jQuery(".ms-images .img1 .learn1 a").show().addClass('animated fadeInRight');
         });
         jQuery(".ms-images .img1 img , .ms-images .img1 .learn1 a , .ms-images .img1 .it-data").mouseleave(function() {
            jQuery(".ms-images .img1 .learn1 a").hide();
         });

         jQuery(".ms-images .img2 img , .ms-images .img2 .learn2 a , .ms-images .img2 .printing").mouseenter(function() {
            jQuery(".ms-images .img2 .learn2 a").show().addClass('animated fadeInRight');
         });
         jQuery(".ms-images .img2 img , .ms-images .img2 .learn2 a , .ms-images .img2 .printing").mouseleave(function() {
            jQuery(".ms-images .img2 .learn2 a").hide();
         });

         jQuery(".ms-images .img3 img , .ms-images .img3 .learn3 a , .ms-images .img3 .production").mouseenter(function() {
            jQuery(".ms-images .img3 .learn3 a").show().addClass('animated fadeInRight');
         });
         jQuery(".ms-images .img3 img , .ms-images .img3 .learn3 a , .ms-images .img3 .production").mouseleave(function() {
            jQuery(".ms-images .img3 .learn3 a").hide();
         });
      } else {

      };

   });



   // Owl Carousel Header-image
   jQuery('.slider-area .slider-main').owlCarousel({
      loop: true,
      autoWidth: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      animateIn: 'lightSpeedIn',
      autoplay: true,
      autoplayTimeout: "3000",
      autoplayHoverPause: true,
      animateOut: 'lightSpeedOut',
      nav: true,
      responsive: {
         0: {
            items: 1,
            autoWidth: false,
         },
         700: {
            items: 1,
            autoWidth: false,
         },
         800: {
            items: 1,
            autoWidth: false,
         },
         900: {
            items: 1,
            autoWidth: false,
         },
         1000: {
            items: 1,
            autoWidth: false,
         }
      }
   });
   //  Owl Carousel Our Partners
   jQuery('.partners .slider-active').owlCarousel({
      loop: true,
      autoWidth: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      animateIn: 'bounceInRight',
      autoplay: true,
      autoplayTimeout: "3000",
      autoplayHoverPause: true,
      animateOut: 'bounceOutLeft',
      nav: true,
      responsive: {
         0: {
            items: 1,
            autoWidth: false,
         },
         700: {
            items: 2,
            autoWidth: false,
         },
         800: {
            items: 3,
            autoWidth: false,
         },
         900: {
            items: 4,
            autoWidth: false,
         },
         1000: {
            items: 5,
            autoWidth: false,
         }
      }
   });
   // scrollTop
   jQuery(".scrolltop").click(function() {
      jQuery("html").animate({
         "scrollTop": "0px"
      }, 1000);
   });
   jQuery(window).scroll(function() {
      var top = jQuery(window).scrollTop();
      if (top > 200) {
         jQuery(".scrolltop").show(500);
      } else {
         jQuery(".scrolltop").hide(500);
      }
   });
});

jQuery(document).ready(function() {
   jQuery(window).scroll(function() {
      var screenwidth = jQuery(window).width();
      if (screenwidth > 767) {
         jQuery(window).scroll(function() {
            var upor = jQuery(window).scrollTop();
            if (upor > 200) {
               jQuery(".main-menu").addClass("fixed");
            } else {
               jQuery(".main-menu").removeClass("fixed");
            }
         })
      } else {
         jQuery(window).scroll(function() {
            var upor = jQuery(window).scrollTop();
            if (upor >= 1) {
               jQuery(".main-menu").removeClass("fixed");
            }
         });
      };

   });
   // inner page contact us
   jQuery(".content .right .contactus").mouseenter(function() {
      jQuery(".content .right .contactus i").css({
         "color": "#fff",
         "background-color": "red"
      });
   });
   jQuery(".content .right .contactus").mouseleave(function() {
      jQuery(".content .right .contactus i").css({
         "color": "#0193CF",
         "background-color": "#fff",
      });
   });
   // Load content
   jQuery(window).scroll(function() {
      var upor = jQuery(window).scrollTop();
      if (upor > 550) {
         jQuery('.action-mailing').css({
            "display": "block"
         }).addClass('animated fadeInUp');
      }
      if (upor > 1250) {
         jQuery('.partners').css({
            "display": "block"
         }).addClass('animated fadeInUp');
      }
      if (upor > 1580) {
         jQuery('.testimonial').css({
            "display": "block"
         }).addClass('animated fadeInUp');
      }
      if (upor > 2180) {
         jQuery('.post').css({
            "display": "block"
         }).addClass('animated fadeInUp');
      }
      if (upor > 2770) {
         jQuery('.contact-us').css({
            "display": "block"
         }).addClass('animated fadeInUp');
      }
      if (upor > 3000) {
         jQuery('.footer-area').css({
            "display": "block"
         }).addClass('animated fadeInUp');
      }
      if (upor > 500) {
         jQuery('iframe').css({
            "display": "block"
         }).addClass('animated fadeInUp');
      }
      if (upor > 750) {
         jQuery('.right-side .posts').css({
            "display": "block"
         }).addClass('animated fadeInDown');
      }
      if (upor > 1937) {
         jQuery('.inner-footer-area').css({
            "display": "block"
         }).addClass('animated fadeInUp');
      }
   });
});
