(function( ebhc, $, undefined ) { 
	'use strict';
	
	var deck;
	// This will be executed at ready event
	$(document).ready(function() {
		bind(); 
	});
	// private Method 
	function bind() {
		// Bind jQuery click and page events
		ebhc.util.init();
	};
	ebhc.util = {
		init: function(){
			$('#big-three').on('click','.box', function(){
				deck = $(this).attr('data-destination');
				$('html,body').animate({scrollTop: $('#'+deck).offset().top});
			});
			$('#hero').on('click','.icon', function(){
				$('html,body').animate({scrollTop: $('#big-three').offset().top});
			});
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scroll').fadeOut();
				} else {
					$('.scroll').fadeIn();
				}
			});
			
		},
		isEmpty: function(item){
			return !$.trim(item.html());
		},
		shuffle: function(array){
			currentIndex = array.length, temporaryValue, randomIndex;
			while(0 !== currentIndex){
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		}
	};
}( window.ebhc = window.ebhc || {}, jQuery ));