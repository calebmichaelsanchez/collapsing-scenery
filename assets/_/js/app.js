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
	var lyricsHeight = lyricsContainer.height();
	var positivePositionCalc = 0;
	var negativePositionCalc = 0;
	var down = $('.down');
	var up 	= $('.up');

	$(down).click(function(e){
		e.preventDefault();
		if (positivePositionCalc >= lyricsHeight * .75) {
			return;
		}
		positivePositionCalc += (lyricsHeight / 4);
		lyricsContainer.css({
			top: -positivePositionCalc + 'px'
		});
		console.log(positivePositionCalc);
	});
	$(up).click(function(e){
		e.preventDefault();
		if (negativePositionCalc >= lyricsHeight * .75) {
			console.log(negativePositionCalc);
			return;
		}
		negativePositionCalc += (lyricsHeight / 4);
		lyricsContainer.css({
			top: negativePositionCalc + 'px'
		});
		console.log(negativePpositionCalc);
	});

}
lyricsAggregator();