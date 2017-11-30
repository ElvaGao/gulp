var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch',function(){
	gulp.watch('app/scss/**/*.scss',['sass']);
});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
	})
});

