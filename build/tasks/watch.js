var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');


function reportChange(event){
    console.log('File' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function(){
    gulp.watch(paths.scss, ['build-scss', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
});