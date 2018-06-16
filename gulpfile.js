var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
 return gulp.src('src/dev-css/style.sass')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(autoprefixer({
    browsers: ["last 2 version", "IE 10", "IE 11"]
    }))
   .pipe(gulp.dest('./src/'));
});

gulp.task('watch',function() {
    gulp.watch('src/dev-css/**/*.sass',['sass']);
});
