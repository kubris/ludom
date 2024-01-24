const gulp = require("gulp"),
	// HTML
	fileInclude = require("gulp-file-include"),
	htmlclean = require("gulp-htmlclean"),
	webpHTML = require('gulp-webp-html'),
	//SASS
	sass = require("gulp-sass")(require("sass")),
	autoprefixer = require('gulp-autoprefixer'),
	csso = require('gulp-csso'),
	sassGlob = require("gulp-sass-glob"),
	webpCss = require('gulp-webp-css'),
	//ETC
	server = require("gulp-server-livereload"),
	clean = require("gulp-clean"),
	fs = require("fs"),
	groupMedia = require("gulp-group-css-media-queries"),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify"),
	// Images
	imagemin = require("gulp-imagemin"),
	webp = require("gulp-webp");

const webpack = require("webpack-stream");
const babel = require("gulp-babel");

// === VARIABLES ===
// -- html include
const fileIncludeSettings = {
	prefix: "@@",
	basepath: "@file",
};
// -- start server
const startServerSettings = {
	livereload: true,
	open: true,
};
// -- plumber
const plumberNotify = (title) => {
	return {
		errorHandler: notify.onError({
			title: title,
			message: "Error <%= error.message %>",
			sound: false,
		}),
	};
};

// -- babel
const babelSettings = {
	presets: ["@babel/preset-env"],
};
// end VARIABLES

// === clean docs ===
gulp.task("clean:docs", function (callback) {
	if (fs.existsSync("./docs/")) {
		return gulp.src("./docs/", { read: false }).pipe(clean({ force: true }));
	}
	callback();
});

// ////////////////////////
// === HTML include  ===
gulp.task("html:docs", function () {
	return gulp
		.src(["./src/html/**/*.html", "!./src/html/blocks/*.html"])
		.pipe(plumber(plumberNotify("HTML")))
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(webpHTML())
		.pipe(htmlclean())
		.pipe(gulp.dest("./docs/"));
});
// end HTML include

// === SCSS ===
gulp.task("sass:docs", function () {
	return gulp
		.src("./src/scss/*.scss")
		.pipe(plumber(plumberNotify("SASS")))
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(webpCss())
		.pipe(groupMedia())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))		
		.pipe(csso())
		.pipe(gulp.dest("./docs/css/"));
});
// end SCSS

// === IMAGES ===
gulp.task("images:docs", function () {
	return gulp
		.src("./src/images/**/*")
		.pipe(webp())
		.pipe(gulp.dest("./docs/images/"))
		.pipe(gulp.src("./src/images/**/*"))
		.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest("./docs/images/"));
});
// end IMAGES

// === FONTS ===
gulp.task("fonts:docs", function () {
	return gulp
		.src("./src/fonts/**/*")
		.pipe(gulp.dest("./docs/fonts/"));
});
// === end FONTS ===

// === FILES ===
gulp.task("files:docs", function () {
	return gulp
		.src("./src/files/**/*")
		.pipe(gulp.dest("./docs/files/"));
});
// === end FILES ===

// === JS ===
gulp.task("js:docs", function () {
	return gulp
		.src("./src/js/*.js")
		.pipe(plumber(plumberNotify("JS")))
		.pipe(babel(babelSettings))
		.pipe(webpack(require("./../webpack.config.js")))
		.pipe(gulp.dest("./docs/js/"));
});
// === end JS ===

// === START Server ===
gulp.task("server:docs", function () {
	return gulp.src("./docs/").pipe(server(startServerSettings));
});
// end START Server

