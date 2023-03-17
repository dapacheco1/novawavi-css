const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//compile styles with sass compiler and generate css file.
function buildStyles(){
    return src('novawavi/**/*.scss') //compile a file or any file inside this directory
    .pipe(sass())
    .pipe(dest('css'));
}
//watcher to recompiles every time scss file changes
function watchTask(){
    watch(['*novawavi/**/*.scss'],buildStyles);
}
exports.default = series(buildStyles,watchTask);