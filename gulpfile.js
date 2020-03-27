const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulpSass.compiler = require('node-sass')

var paths = {
    styles: {
        src: './dev/css/**/*.sass',
        css_dest: './dev/css',
        dest: './dist/css'
    },
    scripts: {
        src: './dev/js/**/*.js',
        dest:'./dist/js'
    },
    html: {
        src: './dev/*.html'
    }
}

gulp.task('sass', () => {
    return gulp.src(paths.styles.src)
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest(paths.styles.css_dest))
        .pipe(browserSync.stream());
});

gulp.task('default', () => {
    gulp.watch(paths.styles.src, gulp.series('sass'));
    gulp.watch(paths.html.src).on('change', browserSync.reload);
    gulp.watch(paths.scripts.src).on('change', browserSync.reload);

    browserSync.init({
        server:{
            baseDir: ['./', './dev/'],
            index: 'dev/index.html'
        }
    });



});