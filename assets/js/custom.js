

/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {

            //ADD REMOVE PADDING CLASS ON SCROLL
            $(window).scroll(function () {
                if ($(".navbar").offset().top >50) {
                    //$(".navbar-fixed-top").addClass("navbar-pad-original");
                    //$(".logo").addClass("navbar-pad-original");
                } else {
                    //$(".navbar-fixed-top").removeClass("navbar-pad-original");
                }
            });
            //SLIDESHOW SCRIPT
            $('.carousel').carousel({
                interval: 6500 //TIME IN MILLI SECONDS
            })
            // PRETTYPHOTO FUNCTION 

            //$("a.preview").prettyPhoto({
                //social_tools: false
           // });

       


            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
        
        	var clickEvent = false;
			$('#newsCarousel').carousel({
				interval:   15000
			}).on('click', '.list-group li', function() {
					clickEvent = true;
					$('.list-group li').removeClass('active');
					$(this).addClass('active');		
			}).on('slid.bs.carousel', function(e) {
				if(!clickEvent) {
					var count = $('.list-group').children().length -1;
					var current = $('.list-group li.active');
					current.removeClass('active').next().addClass('active');
					var id = parseInt(current.data('slide-to'));
					if(count == id) {
						$('.list-group li').first().addClass('active');	
					}
				}
				clickEvent = false;
			});
			
    });
    
    $(window).load(function() {
   	  var boxheight = $('#newsCarousel .carousel-inner').innerHeight();
   	  var itemlength = $('#newsCarousel .item').length;
      var triggerheight = Math.round(boxheight/itemlength);
	  $('#newsCarousel .list-group-item').outerHeight(triggerheight);
	  //$("#newsCarousel").carousel('pause');
	});
	
	$( window ).resize(function() {
	var boxheight = $('#newsCarousel .carousel-inner').innerHeight();
   	  var itemlength = $('#newsCarousel .item').length;
      var triggerheight = Math.round(boxheight/itemlength);
	  $('#newsCarousel .list-group-item').outerHeight(triggerheight);
	  //$("#newsCarousel").carousel('pause');
	});
	

}(jQuery));



