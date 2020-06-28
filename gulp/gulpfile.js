const { src, dest } = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const $ = loadPlugins();

function icon() {
  return src('./favicon.png')
    .pipe($.imageResize({
      width: 100,
      height: 100,
      crop: true,
      upscale: false
    }))
    .pipe($.imagemin())
    .pipe($.rename({
      prefix:'hello-'
    }))
    .pipe(dest('./dist/images/icon'));
}

exports.icon = icon;
