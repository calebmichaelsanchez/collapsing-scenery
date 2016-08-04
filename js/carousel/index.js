!(function() {
  // Bootstrap Carousel Init
  var carouselInit = function(){

    $('.carousel').carousel({interval: 0});

    // Carousel touch support
    $("#carousel").on('swiperight', function() {
      $(this).carousel('prev');
    });
    $("#carousel").on('swipeleft', function() {
      $(this).carousel('next');
    });
  };
  carouselInit();

  var classToFirstElement = function(parentElement, className) {
    $(parentElement + ' > div' + ':first-child').addClass(className);
    //console.log(parentElement + ' ' + className);
  }
  classToFirstElement('.carousel-inner', 'active');
})();