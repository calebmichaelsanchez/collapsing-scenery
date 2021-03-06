// ====================================================
// Variables
// ====================================================

// Gulp
var gulp 				= require("gulp");

// Error reporting
var beep 				= require('beepbeep');
var gutil 			= require('gulp-util');
var plumber 		= require('gulp-plumber');

// Javascript Minification
// Error Reporting
var uglify 			= require("gulp-uglify");

// Sass
var sass 				= require("gulp-sass");
var sourcemaps 	= require('gulp-sourcemaps');
var autoprefix	= require("gulp-autoprefixer");

// PHP
var php 				= require("gulp-connect-php");
// Browser Sync
var browserSync = require("browser-sync");
var reload 			= browserSync.reload;

// Error Reporting function
var onError = function (err) {
	beep([0, 0, 0]);
	gutil.log(gutil.colors.green(err));
};


// Browser Sync Config
// var config = {
// 	files: ["./sites/snippets/*.php", "./sites/templates/*.php", "./**/*.txt"],
// 	proxy: "http://pointofgrace.dev/"
// };



// ====================================================
// Gulp Tasks
// ====================================================


// PHP server setup
gulp.task('php', function() {
    php.server({ base: './', port: 8010, keepalive: true});
});

// Browser Sync
gulp.task('browser-sync',['php'], function() {
    browserSync({
    	proxy: "127.0.0.1:8010",
    	port: 8080,
    	open: true,
    	notify: false
    });
});

// Javascript
gulp.task('compress:js', function() {
	 return gulp.src("assets/_/js/app.js")
	 	.pipe(plumber({ errorHandler: onError }))
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest('assets/js/'))
 });


// Compile SASS
gulp.task("sass", function () {

	return gulp.src('assets/_/sass/**/*.scss')
		.pipe(sass({
			errLogToConsole: true
		}))
		//.pipe(plumber({errorHandler: onError}))
		.pipe(autoprefix({browsers: ['last 2 versions']}))
		.pipe(gulp.dest("assets/css/"))
		.pipe(reload({stream: true}));
});

// Default Task
gulp.task('default', ['sass', 'browser-sync', 'compress:js'], function(){
	gulp.watch("./site/templates/*.php").on('change', browserSync.reload);
	gulp.watch("./site/config/config.php").on('change', browserSync.reload);
	gulp.watch("./site/snippets/*.php").on('change', browserSync.reload);
	gulp.watch("./content/**/*.txt").on('change', browserSync.reload);
	gulp.watch( "assets/_/sass/**/*.scss", ['sass']);
	gulp.watch("assets/_/js/app.js", ['compress:js', browserSync.reload]);
})
