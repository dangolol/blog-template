const gulp = require('gulp'),
    uglify = require('gulp-uglify'),     // js文件压缩
    rename = require('gulp-rename'),     // 文件改命
    sass = require('gulp-sass'),         // sass文件编译
    imagemin = require('gulp-imagemin'); // 图片文件打包编译

const pngquant = require('imagemin-pngquant');

/**
 * 处理sass文件
 **/

gulp.task('sass-default', function() {
  gulp.src(['./default/sass/*.scss', './default/sass/console/*.scss'])
      .pipe(sass({                       // 压缩编译
        outputStyle: 'compressed'
      }))
      .pipe(rename(function(path) {
        path.basename += '.min';
      }))      // 压缩文件改名
      .pipe(gulp.dest('./default/html/style/')); // 压缩编译后输出生产路径

  console.log('sass文件处理完毕！');
});

/**
 * 监听文件改动
 **/

gulp.task('watch-default', ['sass-default'], function() {
  gulp.watch(['./default/sass/*.scss', './default/sass/console/*.scss'], ['sass-default']);
});
