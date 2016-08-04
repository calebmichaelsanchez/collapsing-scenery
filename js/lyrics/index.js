!(function() {
  // Function for the lyrics section on mobile

  var lyricsAggregator = function() {
    var lyricContainerHeight = parseInt($('.lyric-container').height());
    var lyricsHeight = parseInt($('.lyrics-inner').height());
    var lyricsInner = $('.lyrics-inner');
    var margin_top = 0;
    var down = $('.down');
    var counter = 0;

    // click down arrow and add negative marginTop
    // to the lyrics-inner element
    $(down).click(function(e){
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
  }
  
  lyricsAggregator();

  $(window).resize(lyricsAggregator);

})();