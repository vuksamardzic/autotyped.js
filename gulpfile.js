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
const htmlmin           = require('gulp-htmlmin');
const htmlreplace       = require('gulp-html-replace');


/**
 * Development setup
 */

gulp.task('serve', ['compile:js', 'compile:customjs', 'compile:scss'], function()
{
    browser_sync.init({ server: './' });

    gulp.watch('./src/scss/**/*.scss', ['compile:scss']);
    gulp.watch('*.html', browser_sync.reload);
    gulp.watch('./src/js/autotyped.js', ['compile:js', browser_sync.reload]);
    gulp.watch('./src/js/custom.js', ['compile:customjs', browser_sync.reload]);
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

gulp.task('compile:js',  function()
{
    return gulp.src('./src/js/autotyped.js')
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(concat('autotyped.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('compile:customjs',  function()
{
    return gulp.src('./src/js/custom.js')
        .on('error', function (error) {
            console.log(error.toString());
            this.emit('end');
        })
        .pipe(concat('custom.js'))
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
    return gulp.src('./src/js/autotyped.js')
        .pipe(concat('autotyped.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

/**
 * Demo setup
 */

gulp.task('demo:html', function()
{
    return gulp
        .src('*.html')
        .pipe(htmlreplace({
            'ico': {
                src: './favicon.ico',
                tpl: '<link rel="icon" type="image/png" href="%s">'
            },
            'css': ['./css/autotyped.css','./css/custom.css'],
            'js': ['./js/autotyped.min.js','./js/custom.min.js']
        }))
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest('./demo'));
});

gulp.task('demo:css', function()
{
    return gulp
        .src('./src/scss/**/*.scss')
        .pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./demo/css'));
});

gulp.task('demo:js',  function()
{
    return gulp.src('./src/js/autotyped.js')
        .pipe(concat('autotyped.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./demo/js'));
});

gulp.task('demo:customjs',  function()
{
    return gulp.src('./src/js/custom.js')
        .pipe(concat('custom.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./demo/js'));
});


gulp.task('surge', ['demo:html','demo:css', 'demo:js', 'demo:customjs'], function ()
{
    return surge({
        project: './demo',
        domain: 'autotypedjs.surge.sh'
    })
});

/**
 * Main tasks
 */

gulp.task('deploy', ['minify:css', 'minify:js']);
gulp.task('demo', ['surge']);
gulp.task('default', ['serve']);