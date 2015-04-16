if ($('html').hasClass('no-touch')) {
	$(function() {
	  var BV = new $.BigVideo({
	  	useFlashForFirefox: false,
	  	controls: false, 
	  	container: $('.video-cont')
	  });
		BV.init();
	  BV.show(
	  	$(".video-cont").attr('data-video'),
	  	{ambient:true}
	  );
	});
} else {
	console.log('Cannot view video on touch device!');
}

// Navigation Toggle
var toggleNav = function() {
	var navToggle = $('.nav-toggle');
	var nav = $('nav');
	var navLinks = $('nav a');

	navToggle.click(function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$(nav).toggleClass('open');
	});
	navLinks.click(function(){
		$(navToggle).toggleClass('open');
		$(nav).toggleClass('open');
	})
}
toggleNav();

// Bootstrap Carousel Init
var carouselInit = function(){
	
	$('.carousel').carousel({interval: 0});

	// Carousel touch support
	$("#carousel").swiperight(function() {  
	  $(this).carousel('prev');  
	});  
	$("#carousel").swipeleft(function() {  
	  $(this).carousel('next');  
	});
};
carouselInit();

var classToFirstElement = function(parentElement, className) {
	$(parentElement + ' > div' + ':first-child').addClass(className);
	console.log(parentElement + ' ' + className);
}
classToFirstElement('.carousel-inner', 'active');

// Function for the lyrics section on mobile

var lyricsAggregator = function() {
	var lyricContainerHeight = parseInt($('.lyric-container').height());
	var lyricsHeight = parseInt($('.lyrics-inner').height());
	var lyricsInner = $('.lyrics-inner');
	var margin_top = 0;
	var down = $('.down');
	var counter = 0;

	$(down).click(function(e){
		e.preventDefault();
		if (margin_top * -1 >= lyricsHeight - lyricContainerHeight) {
			margin_top = 0;

			lyricsInner.css({
				marginTop: margin_top + 'px'
			});

		 } else {
			margin_top -= lyricContainerHeight;
			
			lyricsInner.css({
				marginTop: margin_top + 'px'
			});

		}
	});
}
lyricsAggregator();
$(window).resize(lyricsAggregator);

// Instagram Function using instafeed.js

var userFeed = new Instafeed({
	get: 'user',
	userId: 1689788120,
	clientId: 'ab23588db53b4759a737ffaa59a039c6',
	accessToken: '1689788120.5f61481.1aad7798187f4f57b23c1b4c0a0aa757',
	limit: 20,
	resolution: 'standard_resolution',
	template: '<li><img src="{{image}}" ><a target="_blank" href="{{link}}" class="info"><svg xmlns="http://www.w3.org/2000/svg" width="36.854" height="36.854" viewBox="0 0 36.854 36.854"><g fill="none" stroke="#ffffff" stroke-miterlimit="10"><path d="M2.767.5h33.587v33.585M36.354.5l-36 36"/></g></svg><span class="caption">{{caption}}</span></a></li>',
	after: function() {
		function checkWidth() {
			var itemWidth = 300;
			var containerChildLength = $('#instafeed li').length;
			var containerMargin = 0;

			var windowsize = $(window).width();
			if (windowsize < 640) {
				var itemWidth = 300;
				var containerWidth = (itemWidth * (containerChildLength + 1));
				$('#instafeed').width(containerWidth);
			} else {
				var itemWidth = 406;
				var containerWidth = (itemWidth * (containerChildLength + 1));
				$('#instafeed').width(containerWidth);
			}
			function nextIgImage() {
				if (windowsize < 1470) {
					if (containerMargin * -1 >= itemWidth * (containerChildLength - 1) ) {
					console.log("Stop this bitch");
					containerMargin = 0;

					// set marginLeft for instafeed ul
					$('#instafeed').css({
						marginLeft: containerMargin + 'px'
					});

				} else {
					containerMargin -= itemWidth;
					
					// set marginLeft for instafeed ul
					$('#instafeed').css({
						marginLeft: containerMargin + 'px'
					});

					} // end else
				} else {
						if (containerMargin * -1 >= itemWidth * (containerChildLength - 3) ) {
						console.log("Stop this bitch");
						containerMargin = 0;

						// set marginLeft for instafeed ul
						$('#instafeed').css({
							marginLeft: containerMargin + 'px'
						});

					} else {
						containerMargin -= itemWidth;
						
						// set marginLeft for instafeed ul
						$('#instafeed').css({
							marginLeft: containerMargin + 'px'
						});

						} // end else
				}
			}
			function prevIgImage() {
				console.log(containerMargin);
				if (containerMargin >= 0) {
					console.log("Cannot go further left");
				} 
				else {
					containerMargin += itemWidth;
					
					// set marginLeft for instafeed ul
					$('#instafeed').css({
						marginLeft: containerMargin + 'px'
					});
				} // end else
			}

			$('#instafeed').swipeleft(function() {
					nextIgImage();
			}); // end swipeleft
			$('.ig-next').click(function(e){
					e.preventDefault();
					nextIgImage();
			});// end ig-next
			$('#instafeed').swiperight(function() {
					prevIgImage();
			}); // end swipeleft
		}
		checkWidth();
		$(window).resize(checkWidth);
	}
});
userFeed.run();

var twitterInit = function(){
	$('.twitter-feed').twittie({
	    username: 'collapsingscene',
	    dateFormat: '%m / %d / %y',
	    template: '<div class="date">{{date}}</div><div class="tweet">{{tweet}}... <a href="{{link}}">Read More</a></div>',
	    count: 3
	});
}
twitterInit();






