/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./nav/index.js */ 1);
	
	__webpack_require__(/*! ./carousel/index.js */ 2);
	
	__webpack_require__(/*! ./lyrics/index.js */ 3);
	
	__webpack_require__(/*! ./news/index.js */ 4);
	
	__webpack_require__(/*! ./global/index.js */ 5);

/***/ },
/* 1 */
/*!*************************!*\
  !*** ./js/nav/index.js ***!
  \*************************/
/***/ function(module, exports) {

	'use strict';
	
	!function () {
	  var toggleNav = function toggleNav() {
	    var winWidth = $(window).width();
	    var navToggle = $('.nav-toggle');
	    var nav = $('nav');
	    var navLinks = $('nav a');
	
	    navToggle.click(function (e) {
	      e.preventDefault();
	      $(this).toggleClass('open');
	      $(nav).toggleClass('open');
	    });
	    navLinks.click(function () {
	      $(navToggle).toggleClass('open');
	      $(nav).toggleClass('open');
	    });
	  };
	  toggleNav();
	  $(window).resize(function () {
	    var winWidth = $(window).width();
	    var navToggle = $('.nav-toggle');
	    var nav = $('nav');
	    var navLinks = $('nav a');
	
	    if (winWidth >= 768 && $(nav).hasClass('open')) {
	      $(nav).removeClass('open');
	      $(navToggle).removeClass('open');
	    }
	  });
	}();

/***/ },
/* 2 */
/*!******************************!*\
  !*** ./js/carousel/index.js ***!
  \******************************/
/***/ function(module, exports) {

	'use strict';
	
	!function () {
	  // Bootstrap Carousel Init
	  var carouselInit = function carouselInit() {
	
	    $('.carousel').carousel({ interval: 0 });
	
	    // Carousel touch support
	    $("#carousel").on('swiperight', function () {
	      $(this).carousel('prev');
	    });
	    $("#carousel").on('swipeleft', function () {
	      $(this).carousel('next');
	    });
	  };
	  carouselInit();
	
	  var classToFirstElement = function classToFirstElement(parentElement, className) {
	    $(parentElement + ' > div' + ':first-child').addClass(className);
	    //console.log(parentElement + ' ' + className);
	  };
	  classToFirstElement('.carousel-inner', 'active');
	}();

/***/ },
/* 3 */
/*!****************************!*\
  !*** ./js/lyrics/index.js ***!
  \****************************/
/***/ function(module, exports) {

	'use strict';
	
	!function () {
	  // Function for the lyrics section on mobile
	
	  var lyricsAggregator = function lyricsAggregator() {
	    var lyricContainerHeight = parseInt($('.lyric-container').height());
	    var lyricsHeight = parseInt($('.lyrics-inner').height());
	    var lyricsInner = $('.lyrics-inner');
	    var margin_top = 0;
	    var down = $('.down');
	    var counter = 0;
	
	    // click down arrow and add negative marginTop
	    // to the lyrics-inner element
	    $(down).click(function (e) {
	      e.preventDefault();
	      // once the marginTop is equal to the height
	      // of its container set marginTop to 0
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
	  };
	
	  lyricsAggregator();
	
	  $(window).resize(lyricsAggregator);
	}();

/***/ },
/* 4 */
/*!**************************!*\
  !*** ./js/news/index.js ***!
  \**************************/
/***/ function(module, exports) {

	'use strict';
	
	!function () {
	  var twitterInit = function twitterInit() {
	    $('.twitter-feed').twittie({
	      username: 'collapsingscene',
	      dateFormat: '%m/%d/%y',
	      template: '<div class="tweet-container"><div class="date">{{date}}</div><div class="tweet">{{tweet}}... <a target="_blank" class="read-more" href="{{url}}">Read More</a></div></div>',
	      count: 3
	    });
	  };
	  twitterInit();
	}();

/***/ },
/* 5 */
/*!****************************!*\
  !*** ./js/global/index.js ***!
  \****************************/
/***/ function(module, exports) {

	'use strict';
	
	!function () {
	  var initSmoothScroll = function initSmoothScroll() {
	    $('nav a').smoothScroll();
	  };
	  initSmoothScroll();
	
	  // var video = document.getElementsByTagName('video')[0];
	  // video.addEventListener('ended', function() {
	  //   console.dir(this);
	  //   this.currentTime = 0;
	  //   this.play();
	  // });
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map