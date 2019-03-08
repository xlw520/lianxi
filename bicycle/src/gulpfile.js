var gulp = require("gulp");
var server = require("gulp-webserver");
var url = require("url");
var path = require("path")
var fs = require("fs")
var data = require("./data.json")
var sass = require("gulp-sass")

gulp.task("server",function(){
    gulp.src("./")
    .pipe(server({
        port:"5000",
        open:true,
        livereload:true,
        middleware:function(req,res,next){
            var pathname = url.parse(req.url).pathname;
            if(pathname == "/favicon.ico"){
                res.end('');
                return
            };
            pathname =  pathname == "/" ? "index.html" : pathname
            if(pathname == "/list"){
                res.end(JSON.stringify(data))
            }else{
                res.end(fs.readFileSync(path.join(__dirname,pathname)))
            }
        }
    }))
})

gulp.task("sass",function(){
    return gulp.src("./css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
})

gulp.task("watch",function(){
    gulp.watch("./css/*.scss",gulp.series("sass"))
})

gulp.task("dev",gulp.series("server","sass","watch"))