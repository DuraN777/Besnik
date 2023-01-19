const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('scss', ()=> {
	return gulp.src('src/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

// copy js files to dist
gulp.task('copy-js', ()=> {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'));
});

// copy html files to dist
gulp.task('copy-html', ()=> {
	return gulp.src('index.html')
		.pipe(gulp.dest('dist'));
});

// copy font files to dist
gulp.task('copy-fonts', ()=> {
	return gulp.src('src/fonts/**/*.{ttf,woff,woff2,eof,eot}')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy-assets', ()=> {
	return gulp.src('src/images/*.{png,svg,jpg,jpeg}')
		.pipe(gulp.dest('dist/images'));
});

// browser sync task
gulp.task('watch', ()=> {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	gulp.watch('src/**/*.scss', gulp.series('scss'));
	gulp.watch('*.html', gulp.series('copy-html'));
	gulp.watch('src/**/*.js', gulp.series('copy-js'));
	gulp.watch('src/**/*.{png,svg,jpg,jpeg}', gulp.series('copy-assets'));
	gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch('src/**/*.{png,svg,jpg,jpeg}').on('change', browserSync.reload);
	gulp.watch('src/**/*.js').on('change', browserSync.reload);
});

//build project
gulp.task('project-build', gulp.series('copy-assets', 'copy-fonts','scss', 'copy-js', 'copy-html'));

//to run watch task type: gulp
gulp.task('default', gulp.series('watch'));