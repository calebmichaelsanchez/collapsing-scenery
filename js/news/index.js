!(function() {
  var twitterInit = function(){
    $('.twitter-feed').twittie({
        username: 'collapsingscene',
        dateFormat: '%m/%d/%y',
        template: '<div class="tweet-container"><div class="date">{{date}}</div><div class="tweet">{{tweet}}... <a target="_blank" class="read-more" href="{{url}}">Read More</a></div></div>',
        count: 3
    });
  }
  twitterInit();
})();