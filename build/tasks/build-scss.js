var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-scss', function(){
    return gulp.src("src/**/*.scss", {base: "."})
        .pipe(sass())
        .pipe(gulp.dest("."));
});