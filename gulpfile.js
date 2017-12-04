var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minCss = require('gulp-minify-css');

gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch',['browserSync','sass'],function(){
	gulp.watch('app/scss/**/*.scss',['sass']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
	})
});
gulp.task('useref',function(){
	return gulp.src('app/*.html')
	.pipe(gulpIf('*.css',minCss()))
	.pipe(gulpIf('*.js',uglify()))
	.pipe(useref())
	.pipe(gulp.dest('app/dist'))
	
});