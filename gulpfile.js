var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    size       = require('gulp-size'),
    sass       = require('gulp-ruby-sass'),
    prefix     = require('gulp-autoprefixer'),
    minifyCSS  = require('gulp-minify-css'),
    coffee     = require('gulp-coffee'),
    coffeelint = require('gulp-coffeelint'),
    uglify     = require('gulp-uglify');
    // htmlmin    = require("gulp-htmlmin"),
    // imagemin   = require('gulp-imagemin'),

var paths = {
    scripts: ['dev/coffee/base.coffee', 'dev/coffee/model.coffee', 'dev/coffee/collection.coffee', 'dev/coffee/view.coffee', 'dev/coffee/router.coffee'],
    sass: ['dev/sass/main.sass']
};

gulp.task('sass', function(cb) {
  return sass(paths.sass, {
    sourcemap: true, compass: true,
    cacheLocation: "build/source/.sass-cache"
    }).on("error", function(err) { console.log(err) })
  .pipe(prefix())
  .pipe(minifyCSS())
  .pipe(concat('production.min.css'))
  .pipe(gulp.dest('build/css'))
  cb()
});

gulp.task('watch', function () {
  // gulp.watch(paths.scripts, ['scripts', 'compile-js-lib', 'compile-js']);
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
