'use strict';

var path = require('path');
var gulp = require('gulp');
var gutil = require('gutil');
var sass = require('gulp-sass');
var webpack = require('webpack');
var livereload = require('gulp-livereload');

var SASS_DIR = './src/scss';
var JS_DIR = './src/js';
var DESTINATION_DIR = './dist/';

var SASS_PATH = path.join(SASS_DIR, './**/**/*.scss');
var JS_PATH = path.join(JS_DIR, './**/**/*.js');
var CSS_DESTINATION = path.join(DESTINATION_DIR, './css/');

gulp.task('sass', function () {
  gulp.src(SASS_PATH)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(CSS_DESTINATION));
});

gulp.task("webpack", function(callback) {

  var webpackConfig = require('./webpack.config');
  // run webpack
  webpack(webpackConfig, function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
          // output options
      }));
      callback();
  });
});


gulp.task('watch', ['sass'], function () {

  livereload.listen();

  gulp.watch(SASS_PATH, ['sass']);

  gulp.watch(JS_PATH, ['webpack']);

  gulp.watch( path.join(CSS_DESTINATION, './*.css'), function(file){
    livereload.reload(file);
  });

});

