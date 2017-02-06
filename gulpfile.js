const gulp             = require('gulp');
//const eslint           = require('gulp-eslint');
const jsdoc            = require('gulp-jsdoc3');
//const excludeGitignore = require('gulp-exclude-gitignore');
const open             = require('gulp-open');
const ts   = require('gulp-typescript');
const lint = require('gulp-tslint');

/**
 * Check the source code quality based  in the rules defined
 * in .eslitrc file
 */
gulp.task('lint', () => {
    return gulp.src('./lib/**/*.ts')
    .pipe(lint({
        formater : 'verbose'
    }))
    .pipe(lint.report());
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

const tsProject = ts.createProject('tsconfig.json');

/**
 * Build ts files into js files
 */

gulp.task('build', () => {
    let tsResult = gulp.src('lib/**/*.ts')
      .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('build'));
});

/**
 * Recompile ts files when change something
 */
gulp.task('build:watch', gulp.series('build', () => {
    return gulp.watch('lib/**/*.ts', gulp.series('build'));
}));