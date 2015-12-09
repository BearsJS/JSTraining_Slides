(function() {
  'use strict';
  var gulp        = require('gulp'),
      browserSync = require('browser-sync'),
      clean       = require('gulp-clean'),
      serve       = require('gulp-serve');

  gulp.task('serve', function() {
    browserSync.init({
      server : {
        baseDir : './app',
        routes  : {
          '/vendor' : 'vendor'
        }
      }
    });
  });

  gulp.task('watch', function() {
    gulp.watch('app/**/*', browserSync.reload);
  });

  gulp.task('clean', function() {
    return gulp.src('dist', {read : false})
      .pipe(clean({force : true}));
  });

  gulp.task('copy-app', function() {
    return gulp.src('app/**/*')
      .pipe(gulp.dest('dist/'));
  });

  gulp.task('copy-vendor', function() {
    return gulp.src('vendor/**/*')
      .pipe(gulp.dest('dist/vendor'));
  });

  gulp.task('server', ['clean', 'copy-app', 'copy-vendor'], serve('dist'));

  gulp.task('default', ['serve', 'watch'], function() {
    console.log('Gulp power... ');
  });
})();
