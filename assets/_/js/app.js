// $(function() {
//   var BV = new $.BigVideo({
//   	useFlashForFirefox: false,
//   	controls: false, 
//   	container: $('.video-cont')
//   });
// 	BV.init();
//   BV.show(
//   	$(".video-cont").attr('data-video'),
//   	{ambient:true}
//   );
// });

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
	var lyricsContainer = $('.lyrics-inner');
	var marginDown = 0;
	var down = $('.down');
	var counter = 0;

	$(down).click(function(e){
		e.preventDefault();

		if (counter >= 3) {
			counter = 0;
			marginDown = 0;
		} else {
			marginDown -= 100;
			counter += 1;
			console.log(counter);
			console.log(marginDown);
		}
		lyricsContainer.css({
			marginTop: marginDown + '%'
		});
	});
	// $(up).click(function(e){
	// 	e.preventDefault();
	// 	if (parseInt(marginUp) > 0) {
	// 		return;
	// 	} else {
	// 		marginDown += 100;
	// 		lyricsContainer.css({
	// 			marginTop: marginUp + '%'
	// 		});
	// 		console.log(marginUp);
	// 	}
	//});

}
lyricsAggregator();

// Instagram Function using instafeed.js

var feed = new Instafeed({
	get: 'user',
	userId: 'collapsingscenery',
	clientId: 'ab23588db53b4759a737ffaa59a039c6'
});
//feed.run();

var twitterInit = function(){
	$('.twitter-feed').twittie({
	    username: 'collapsingscenery',
	    dateFormat: '%B. %d, %Y',
	    template: '{{tweet}} <div class="date">- {{date}}</div>',
	    count: 3
	});
}
twitterInit();






