"use strict"
$(document).ready(function () {

	$(".gallery").slick({	
		dots: true,
		infinite: true,
		
		speed: 200,
		
		slidesToShow: 4,
		
		slidesToScroll: 4,
		
		prevArrow: $('#prev'),
		
		nextArrow: $('#next'),
		
		responsive: [
			{
				
			    breakpoint: 768,
			
			    settings: {
				
		            slidesToShow: 2,
					
                            slidesToScroll: 2,
					
                            infinite: true,
					
                            dots: true
				
                         }
			
                    }

                 ]
	
	});

});