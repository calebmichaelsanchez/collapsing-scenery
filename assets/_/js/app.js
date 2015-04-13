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

// Bootstrap Carousel Init
var carouselInit = function(){
	
	$('.carousel').carousel({interval: 0});

	// Carousel touch support
	// $("#carousel").swiperight(function() {  
	//   $(this).carousel('prev');  
	// });  
	// $("#carousel").swipeleft(function() {  
	//   $(this).carousel('next');  
	// });
};
carouselInit();

var classToFirstElement = function(parentElement, className) {
	$(parentElement + ' > div' + ':first-child').addClass(className);
	console.log(parentElement + ' ' + className);
}
classToFirstElement('.carousel-inner', 'active');

// Function for the lyrics section on mobile

var lyricsAggregator = function() {
	var lyricContainerHeight = $('.lyric-container').height();
	var lyricsHeight = $('.lyrics-inner').height();
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

// Instagram Function using instafeed.js

var feed = new Instafeed({
	get: 'user',
	userId: 1689788120,
	clientId: 'ab23588db53b4759a737ffaa59a039c6',
	accessToken: '1689788120.5f61481.1aad7798187f4f57b23c1b4c0a0aa757',
	limit: 20,
	resolution: 'low_resolution',
	template: '<li><img src="{{image}}" ></li>',
	after: function swipeForMoreImages() {
		var itemWidth = 215;
		var containerChildLength = $('#instafeed li').length;
		var containerMargin = 0;
		var containerWidth = ((itemWidth * (containerChildLength + 1) ) / 2)
		$('#instafeed').width(containerWidth);

		$('#instafeed').swipeleft(function() {

				if (containerMargin * -1 >= (itemWidth * (containerChildLength - 2)) / 2 ) {
				console.log("Stop this bitch");
				containerMargin = 0;

				// set marginLeft for instafeed ul
				$('#instafeed').css({
					marginLeft: containerMargin + 'px'
				});

			} else {
				containerMargin -= 215;
				
				// set marginLeft for instafeed ul
				$('#instafeed').css({
					marginLeft: containerMargin + 'px'
				});

			} // end else

		}); // end swipeleft
	} // end after
});
feed.run();

var twitterInit = function(){
	$('.twitter-feed').twittie({
	    username: 'collapsingscene',
	    dateFormat: '%B. %d, %Y',
	    template: '{{tweet}} <div class="date">- {{date}}</div>',
	    count: 3
	});
}
twitterInit();

// var swipeForMoreImages = function() {
	
// 	var containerWidth = $('#instafeed').width();
// 	var containerMargin = 0

// 	$('#instafeed').swipeleft(function() {
// 		//containerWidth *= 2;
// 		// set width for instafeed ul
// 		// $('#instafeed').css({
// 		// 	width: containerWidth + 'px'
// 		// });

// 		feed.next();
		
// 		containerMargin -= 67;
// 		// set marginLeft for instafeed ul
// 		$('#instafeed').css({
// 			marginLeft: containerMargin + '%'
// 		});
		
// 		console.log(containerMargin);
// 	});
// 	console.log(containerWidth);
	
// 	// set width for instafeed ul
// 	//$('#instafeed').width(containerWidth + 'px');
// }
//swipeForMoreImages();






