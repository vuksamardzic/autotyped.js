/**
 * File: gulpfile.js
 * @desc Gulp configuration
 * @author Vuk Samardžić <samardzic.vuk@gmail.com>
 */

const gulp              = require('gulp');
const browser_sync       = require('browser-sync').create();
const sass              = require('gulp-sass');
const watch             = require('gulp-watch');
const postcss           = require('gulp-postcss');
const autoprefixer      = require('autoprefixer');
const concat            = require('gulp-concat');
const uglify            = require('gulp-uglify');
const surge             = require('gulp-surge');

/**
 * Development setup
 */

gulp.task('serve', ['compile:es6' ,'compile:scss'], function()
{
    browser_sync.init({ server: './' });

    gulp.watch('./src/scss/**/*.scss', ['compile:scss']);
    gulp.watch('*.html', browser_sync.reload);
    gulp.watch('./src/js/**/*.js', ['compile:es6', browser_sync.reload]);
});

gulp.task('compile:scss', function()
{
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sass({errLogToConsole: true, outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./dist/'))
        .pipe(browser_sync.stream());
});

function swallowError (error)
{
    console.log(error.toString());
    this.emit('end')
}

gulp.task('compile:es6',  function()
{
    return gulp.src('./src/js/**/*.js')
        .on('error', swallowError)
        .pipe(concat('autotyped.js'))
        .pipe(gulp.dest('./dist/'));
});

/**
 * Deploy setup
 */

gulp.task('minify:css', function()
{
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify:js',  function()
{
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('autotyped.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});


gulp.task('surge', ['minify:css', 'minify:js'], function ()
{
    return surge({
        project: './demo',
        domain: 'autotypedjs.surge.sh'
    })
});

/**
 * Main tasks
 */

gulp.task('deploy', ['surge']);
gulp.task('default', ['serve']);