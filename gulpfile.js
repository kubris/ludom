const gulp 	= require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

// === GULP RUN ===
// developmen: gulp
gulp.task('default', 
	gulp.series('clean:dev', 
	gulp.parallel('html:dev', 'sass:dev', 'images:dev', 
	'fonts:dev', 
	'uploads:dev', 'js:dev', 'root:dev'),
	gulp.parallel('server:dev', 'watch:dev')
));

// production: gulp docs
gulp.task(
	'docs', 
	gulp.series('clean:docs', 
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'uploads:docs', 'js:docs', 'root:docs'),
		gulp.parallel('server:docs')
));
// === end GULP RUN ===