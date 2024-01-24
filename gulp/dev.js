const gulp 			= require('gulp'),
	  fileInclude	= require('gulp-file-include'),
	  sass			= require('gulp-sass')(require('sass')),
	  sassGlob			= require('gulp-sass-glob'),
	  server		= require('gulp-server-livereload'),
	  clean			= require('gulp-clean'),
	  fs 			= require('fs'),
	  sourceMaps	= require('gulp-sourcemaps'),
	  plumber		= require('gulp-plumber'),
	  notify		= require('gulp-notify'),
	  imagemin		= require('gulp-imagemin'),
	  changed		= require('gulp-changed');

const webpack		= require('webpack-stream');
const babel			= require('gulp-babel');

// === VARIABLES ===
// -- html include
const fileIncludeSettings = {
	prefix: '@@',
	basepath: '@file'
};
// -- start server
const startServerSettings = {
	livereload: true,
	open: true
};
// -- plumber
const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: 'Error <%= error.message %>',
			sound: false
		})
	}
};

// -- babel
const babelSettings = {
	"presets": [
		"@babel/preset-env"
	]
};
// end VARIABLES

// === clean build ===
gulp.task('clean:dev', function(callback){
	if(fs.existsSync('./build/')){
		return gulp.src('./build/', { read: false })
			.pipe(clean({force:true}));
	}
	callback();
});

// ////////////////////////
// === HTML include  ===
gulp.task('html:dev', function(){
	return gulp.src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
		.pipe(changed('./src/'),{hasChanged: changed.compareContents})
		.pipe(plumber(plumberNotify('HTML')))
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(gulp.dest('./build/'))
});
// end HTML include 

// === SCSS ===
gulp.task('sass:dev', function(){
	return gulp.src('./src/scss/*.scss')
		.pipe(changed('./build/css/'))
		.pipe(plumber(plumberNotify('SASS')))
		.pipe(sassGlob())
		.pipe(sourceMaps.init())
		.pipe(sass())
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest('./build/css/'))
});
// end SCSS

// === IMAGES ===
gulp.task('images:dev', function(){
	return gulp.src('./src/images/**/*')
		.pipe(changed('./build/images/'))
		//.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest('./build/images/'))
});
// end IMAGES

// === FONTS ===
gulp.task('fonts:dev', function(){
	return gulp.src('./src/fonts/**/*')
		.pipe(changed('./build/fonts/'))
		.pipe(gulp.dest('./build/fonts/'))
});
// === end FONTS ===

// === FILES ===
gulp.task('files:dev', function(){
	return gulp.src('./src/files/**/*')
		.pipe(changed('./build/files/'))
		.pipe(gulp.dest('./build/files/'))
});
// === end FILES ===

// === JS ===
gulp.task('js:dev', function(){
	return gulp
	.src('./src/js/*.js')
	.pipe(changed('./build/js'))
	.pipe(plumber(plumberNotify('JS')))
	//.pipe(babel(babelSettings))
	.pipe(webpack(require('./../webpack.config.js')))
	.pipe(gulp.dest('./build/js/'))
});
// === end JS ===

// === START Server ===
gulp.task('server:dev', function(){
	return gulp.src('./build/')
		.pipe(server(startServerSettings))
});
// end START Server

// ////////////////////////
// === WATCH ===
gulp.task('watch:dev', function(){
	gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev'));
	gulp.watch('./src/**/*.html', gulp.parallel('html:dev'));
	gulp.watch('./src/images/**/*', gulp.parallel('images:dev'));
	gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev'));
	gulp.watch('./src/files/**/*', gulp.parallel('files:dev'));
	gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev'));
});
// === end WATCH ===