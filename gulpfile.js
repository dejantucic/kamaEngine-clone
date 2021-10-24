import pkg from "gulp";
const { src, dest, watch, series } = pkg;
// import { src, dest, watch, series } from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
const sass = gulpSass(dartSass);
import concat from "gulp-concat";
import prefix from "gulp-autoprefixer";
import minify from "gulp-clean-css";
import terser from "gulp-terser";
import imagemin, { mozjpeg, optipng, svgo } from "gulp-imagemin";
import imagewebp from "gulp-webp";

//compile, prefix, and min scss
function compilescss() {
  return src("src/scss/*.scss")
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(minify())
    .pipe(dest("dist/css"));
}

//optimize and move images
function optimizeimg() {
  return src("src/images/*.{jpg,png}")
    .pipe(
      imagemin([
        mozjpeg({ quality: 80, progressive: true }),
        optipng({ optimizationLevel: 2 }),
        svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

//optimize and move images
function webpImage() {
  return src("dist/images/*.{jpg,png}")
    .pipe(imagewebp())
    .pipe(dest("dist/images"));
}

// minify js
function jsmin() {
  return src("src/js/*.js")
    .pipe(terser())
    .pipe(concat("main.js"))
    .pipe(dest("dist/js"));
}

//watchtask
function watchTask() {
  watch("src/scss/**/*.scss", compilescss);
  watch("src/js/*.js", jsmin);
  watch("src/images/*", optimizeimg);
  watch("dist/images/*.{jpg,png}", webpImage);
}

// Default Gulp task
const _default = series(compilescss, optimizeimg, jsmin, webpImage, watchTask);
const _build = series(compilescss, optimizeimg, jsmin, webpImage);
export { _default as default };
export { _build as build };
