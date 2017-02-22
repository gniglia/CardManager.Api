const gulp = require('gulp');
const babel = require('gulp-babel');
var clean = require('gulp-rimraf');

gulp.task('default', function() {
  console.log('this is the default task');
});

gulp.task('dist', function() {
  gulp.src('src/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-package-file', function() {
  console.log('Copy package.json file into dist folder');

  gulp.src('package.json')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  console.log('Clean all files in dist folder');

  gulp.src('dist/*', { read: false }).pipe(clean());
});

gulp.task('build', ['clean', 'dist', 'copy-package-file'], function() {
  console.log('The API has been built...');
});
