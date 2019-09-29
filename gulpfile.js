const gulp = require("gulp");
const htmlmin = require('gulp-htmlmin');
const cssClean = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const imagemin = require("gulp-imagemin");
const connect = require("gulp-connect");

// var LessAutoprefix = require('less-plugin-autoprefix');
// var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions',"Firefox>10","ie>=8"] });

const app = {
    src: "src/",
    dist: "dist/"
}

// 处理html
gulp.task("html", function () {
    gulp.src(app.src + "*.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(app.dist))
        .pipe(connect.reload());
})
// 处理css
gulp.task("css", function () {
    gulp.src(app.src + "css/*.css")
        .pipe(cssClean())
        .pipe(gulp.dest(app.dist + "css/"))
        .pipe(connect.reload());
})
// 处理js
gulp.task('js', function () {
    gulp.src(app.src + "js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        })).pipe(uglify()).pipe(gulp.dest(app.dist + "js/"))
        .pipe(connect.reload());
});



// 处理图片
gulp.task("img",function(){
    gulp.src(app.src+"images/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest(app.dist+"images"))
    .pipe(connect.reload());
});

// build 构建生产环境的代码
gulp.task("build",['html','css','js','img']);

// watch  监控文件

/* gulp.task("watch",function(){
    gulp.watch(app.src+"*.html",['html']);
}) */

//结合实时服务器 一起使用
/* 
gulp-connect
*/
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:9527,
        livereload:true
    });
    // 监听
    gulp.watch("src/*.html",['html']);
    gulp.watch("src/css/*.css",['css']);
    gulp.watch("src/js/*.js",['js']);
    gulp.watch("src/images/*.*",["img"]);

})