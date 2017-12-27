$(document).ready(function() {
	
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 300 & $(window).width() >= 767){
			$('header').addClass('bgHeader');
		} else if ( $(window).scrollTop() < 300 & $(window).width() > 768 ){
			$('header').removeClass('bgHeader');
		}
	});


	$(window).scroll();

	

		var mixer = mixitup('.portfolio-container');
	
		$('.popup-link').magnificPopup({
					  type: 'image',
					   gallery:{
						    enabled:true
						  },
						 callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
					  // other options
					});


		$('.portfolio-container').on('mixEnd', function() {
			    
			if( $('.portfolio-container').children(':visible').length == $('.portfollio-item').length ) {
			   		$('.popup-link').magnificPopup({
					  type: 'image',
					   gallery:{
						    enabled:true
						  },
					callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
					  // other options
					});
			} else {

				$('.photo-work .popup-link').magnificPopup({
				  type: 'image',
				   gallery:{
					    enabled:true
					  },
				callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
				  // other options
				});
				$('.illustration .popup-link').magnificPopup({
				  type: 'image',
				   gallery:{
					    enabled:true
					  },
				callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
				  // other options
				});
				$('.fonts .popup-link').magnificPopup({
				  type: 'image',
				   gallery:{
					    enabled:true
					  },
						 callbacks: {
						 open: function() {
						 	$('html, body').css('overflow', 'hidden');
						 	$('header').css('opacity','0');
						 },
						  close: function() {
						    $('html, body').css('overflow', 'visible');
						    $('header').css('opacity','1')
						  }
						}
				  // other options
				});
			}
		});

		$('.contest-composition img').css('opacity', '0');

		$('.contest-composition img').each(function() {
			var th = $(this);
			th.waypoint({
			handler: function(direction) {
				th.addClass('animated zoomIn').css('opacity','1');
				this.destroy();
			},
				offset: '70%'
			});
		});
				
});
