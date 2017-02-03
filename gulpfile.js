const gulp             = require('gulp');
const eslint           = require('gulp-eslint');
const jsdoc            = require('gulp-jsdoc3');
const excludeGitignore = require('gulp-exclude-gitignore');
const open             = require('gulp-open');

/**
 * Check the source code quality based  in the rules defined
 * in .eslitrc file
 */
gulp.task('lint', () => {
    return gulp.src(['**/*.js', '!node_modules/**', '!docs/**'])
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


/**
 * Generate project code documentation using JSDoc3
 */
gulp.task('generate-doc', cb => {
    var config = require('./.jsdoc.json');
    gulp.src([
        'README.md',
        './lib/**/*.js'
    ], {
        read: false
    })
    .pipe(jsdoc(config, cb));
});


/**
 * Open JSDoc generated documentation
 */
gulp.task('open-doc', () => {
    return gulp.src('./docs/index.html')
        .pipe(open());
});


gulp.task('doc', gulp.series('generate-doc', 'open-doc'));

gulp.task('default', gulp.series('lint'));