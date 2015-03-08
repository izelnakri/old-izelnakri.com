var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    size       = require('gulp-size'),
    riot       = require('gulp-riot'),
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
    sass: ['dev/sass/main.sass'],
    components: ['dev/components/izels-tag.tag']
};


gulp.task('riot', function(cb) {
  return gulp.src(paths.components)
    .pipe(riot())
    // .pipe(concat())
    .pipe(gulp.dest('build/source'))
})

gulp.task('sass', function(cb) {
  return sass(paths.sass, {
    sourcemap: true, compass: true,
    cacheLocation: "build/source/.sass-cache"
    }).on("error", function(err) { console.log(err) })
  .pipe(prefix())
  // .pipe(minifyCSS())
  .pipe(concat('production.min.css'))
  .pipe(gulp.dest('build/css'))
  cb()
});

gulp.task('scripts', function(cb) {
  return gulp.src(paths.scripts) //path.scripts array specifies the order of concat
    .pipe(coffee())
    .pipe(uglify())
    .pipe(concat('custom.min.js'))
    .pipe(gulp.dest('dev/source'))
    cb(err)
});

gulp.task('watch', function () {
  // gulp.watch(paths.scripts, ['scripts', 'compile-js-lib', 'compile-js']);
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
