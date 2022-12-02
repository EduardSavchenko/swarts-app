///<binding Clean='clean' ProjectOpened='watch' />

const { src, dest, watch, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const svgSprite = require("gulp-svg-sprites");

function cleanCss() {
    return src('./styles/bundle/**/*.*', { read: false })
        .pipe(cleanCSS());
}

function svg() {
    return src('./wwwroot/icons/*.svg')
        .pipe(svgSprite({
            mode: "symbols",
            preview: false,
            svg: {
                symbols: "images/icons.svg"
            }
        }))
        .pipe(dest("./wwwroot"));
}

function css() {
    return src(['./src/styles/*.less'])
        .pipe(sourcemaps.init())
        .pipe(less({ javascriptEnabled: true }))
        .pipe(cleanCSS())
        .pipe(concat(`./bundle.css`))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./public/css'));
}

function watchCss() {
    return watch(["./styles/*"], css);
}

exports.build = parallel(css, svg);
exports.watch = watchCss;
exports.clean = parallel(cleanCss);
exports.svg = svg;
exports.default = parallel(css);