!(function() {
  var toggleNav = function() {
    var winWidth = $(window).width();
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
  $(window).resize(function(){
    var winWidth = $(window).width();
    var navToggle = $('.nav-toggle');
    var nav = $('nav');
    var navLinks = $('nav a');

    if (winWidth >= 768 && $(nav).hasClass('open')) {
      $(nav).removeClass('open');
      $(navToggle).removeClass('open');
    }
  });
})();