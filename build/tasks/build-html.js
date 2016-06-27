
var gulp = require('gulp');
var paths = require('../paths');
var changed = require('gulp-changed');

gulp.task('build-html', function(){
    return gulp.src(paths.html)
        .pipe(changed(paths.html, {extension: '.html'}))
        .pipe(gulp.dest(paths.html));
});