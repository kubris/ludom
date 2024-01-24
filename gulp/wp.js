const gulp = require("gulp"),
	// HTML
	fileInclude = require("gulp-file-include"),
	htmlbeautify = require('gulp-html-beautify'),
	//SASS
	sass = require("gulp-sass")(require("sass")),
	autoprefixer = require('gulp-autoprefixer'),
	sassGlob = require("gulp-sass-glob"),
	//ETC
	server = require("gulp-server-livereload"),
	clean = require("gulp-clean"),
	fs = require("fs"),
	groupMedia = require("gulp-group-css-media-queries"),
	plumber = require("gulp-plumber"),
	notify = require("gulp-notify"),
	// Images
	imagemin = require("gulp-imagemin");

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
	"presets": ["@babel/preset-env"]
};

// -- 
const htmlBeautifySettings = {
    "indent_size": 2,
    "indent_char": " ",
};
// === end VARIABLES ===

// === clean docs ===
gulp.task("clean:wp", function (callback) {
	if (fs.existsSync("./wp/")) {
		return gulp.src("./wp/", { read: false }).pipe(clean({ force: true }));
	}
	callback();
});
// === end clean docs ===

// ////////////////////////
// === HTML include  ===
gulp.task("html:wp", function () {
	return gulp
		.src(["./src/html/**/*.html", "!./src/html/blocks/*.html"])
		.pipe(plumber(plumberNotify("HTML")))
		.pipe(fileInclude(fileIncludeSettings))
		.pipe(htmlbeautify(htmlBeautifySettings))
		.pipe(gulp.dest("./wp/"));
});
// === end HTML include ===

// === SCSS ===
gulp.task("sass:wp", function () {
	return gulp.src("./src/scss/*.scss")
		.pipe(plumber(plumberNotify("SASS:WP")))
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(groupMedia())
		.pipe(autoprefixer(['last 10 versions', '> 1%',], { cascade: false }))
		.pipe(gulp.dest("./wp/css/"));
});
// == end SCSS ===

// === JS ===
gulp.task("js:wp", function () {
	return gulp
		.src("./src/js/*.js")
		.pipe(plumber(plumberNotify("JS")))
		.pipe(babel(babelSettings))
		.pipe(webpack(require("./../webpack.config.js")))
		.pipe(gulp.dest("./wp/js/"));
});
// === end JS ===

// === IMAGES ===
gulp.task("images:wp", function () {
	return gulp
		.src("./src/images/**/*")
		.pipe(imagemin({ verbose: true }))
		.pipe(gulp.dest("./wp/images/"));
});
// === end IMAGES ===

// === FONTS ===
gulp.task("fonts:wp", function () {
	return gulp
		.src("./src/fonts/**/*")
		.pipe(gulp.dest("./wp/fonts/"));
});
// === end FONTS ===

// === FILES ===
gulp.task("files:wp", function () {
	return gulp
		.src("./src/files/**/*")
		.pipe(gulp.dest("./wp/files/"));
});
// === end FILES ===

// === START Server ===
gulp.task("server:wp", function () {
	return gulp.src("./wp/").pipe(server(startServerSettings));
});
// === end START Server ===

