// ====================================================
// Variables
// ====================================================

var gulp        = require("gulp");
var connect     = require("gulp-connect-php");
var browserSync = require("browser-sync");
var reload      = browserSync.reload;

// ====================================================
// Gulp Tasks
// ====================================================


// PHP server setup
gulp.task('connect-sync', function() {
  connect.server({ base: './www/' }, function () {
    browserSync({
      proxy: '127.0.0.1:8000'
    });
  });
});

// Default Task
gulp.task('default', ['connect-sync'], function(){
  gulp.watch("./www/assets/js/app.js"      ).on('change', browserSync.reload);
  gulp.watch("./www/assets/css/app.css"    ).on('change', browserSync.reload);
  gulp.watch("./www/site/templates/*.php"  ).on('change', browserSync.reload);
  gulp.watch("./www/site/config/config.php").on('change', browserSync.reload);
  gulp.watch("./www/site/snippets/*.php"   ).on('change', browserSync.reload);
  gulp.watch("./www/content/**/*.txt"      ).on('change', browserSync.reload);
})
