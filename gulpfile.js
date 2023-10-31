var gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  sass = require('gulp-sass')(require("sass")),
  connect = require('gulp-connect'),
  pug = require('gulp-pug'),
  sourcemaps = require('gulp-sourcemaps')
  ;

// Task html 
gulp.task('html', () => {
  return gulp.src('project/html/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'));
});

// Task css
gulp.task("css", function () {
  return gulp.src(['project/css/main.scss',])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

// javascript Task 
gulp.task("js", async function () {
  return gulp.src('project/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

// Task watch
gulp.task('watch', () => {
  connect.server({
    port: 8888,
    liveReload: true
  });
  gulp.watch('project/html/**/*.pug', gulp.parallel('html'));
  gulp.watch('project/css/**/*.*', gulp.parallel('css'));
});

