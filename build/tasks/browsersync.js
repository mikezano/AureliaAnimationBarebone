var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('reload-scss', ['build-scss'], function(){
    browserSync.reload();
});