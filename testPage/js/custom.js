(function($){

	function initMap() {
		var map = new google.maps.Map(document.getElementById('js_map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 10
        });
    }

	$(document).ready(function(){
		$('.js-topSlider').slick({
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			adaptiveHeight: true
		});

		$('.js-mainCarousel').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			responsive: [{
				breakpoint: 768,
				settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			    }
			}
			]
		});

		$('.js_mapForm').validate();
		
		$('.js_zipForm').validate({
			messages: {
				userName: "Please enter your name",
				userEmail: "Please enter a valid email address",
				userMessage: "Please enter your message"
			}
		});

		 $("input.js_zipcode").mask("99999");

		initMap();
	});//end ready
})(jQuery);























