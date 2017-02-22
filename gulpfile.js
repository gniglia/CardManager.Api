const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function() {
  console.log('this is the default task');
});

gulp.task('dist', function() {
  gulp.src('src/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-package-file', function() {
  gulp.src('package.json')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['dist', 'copy-package-file'], function() {
  console.log('The API has been built...');
});
