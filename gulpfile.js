var gulp = require('gulp'); // 引入当前gulp版本

// 安装插件
var uglify = require('gulp-uglify');//js文件压缩插件
var clean  = require('gulp-clean-css');//css文件压缩插件
var rename = require('gulp-rename');//文件重新命名
var htmlmin= require('gulp-htmlmin');//html文件压缩插件
var concat = require('gulp-concat');//js、css文件合并插件
var connect= require('gulp-connect');//自动刷新插件
// var ruby   = require('gulp-ruby-sass'); sass自动转换css


/*
定义任务js  源文件路径  ./src/js/*.js  目标路径 ./dist/js
*/

gulp.task('yasuoJs',function(){
	gulp.src('./src/js/*.js')
	// .pipe(concat('catmain.js'))  压缩之前先合并，并给压缩完成的文件命名
	// .pipe(uglify('catmain.js'))	 压缩合并之后的文件
	.pipe(uglify())					//直接压缩
	.pipe(gulp.dest('./dist/js'));	//输出压缩后的文件
});


//定义任务css  源文件路径 ./src/css/*.css 目标路径 ./dist/css

gulp.task('yasuoCss',function(){
	gulp.src('./src/css/*.css')
	// .pipe(concat('catmain.css')) 压缩之前先合并，并给压缩完成的文件命名
	// .pipe(clean('catmain.css'))		压缩合并之后的文件
	.pipe(clean())					//压缩文件
	.pipe(gulp.dest('./dist/css')); //输出压缩后的文件
});


// 定义任务html 源文件路径 ./src/html/*.html 目标路径 ./dist/html

gulp.task('yasuoHtml',function(){
	gulp.src('./src/html/*.html')
	.pipe(htmlmin())		//压缩文件
	.pipe(gulp.dest('./dist/html'));	//输出压缩后的文件
});
gulp.task('zhuanhuanScss',function(){
	gulp.src('./src/scss*.scss')
	.pipe(ruby())		//压缩文件
	.pipe(gulp.dest('./src/css'));	//输出压缩后的文件
});



//定义 刷新任务  源文件路径 ./dist/html/*.html' 

gulp.task('jianting',function(){
	return gulp.src('./dist/html/*.html')
	.pipe(connect.reload());  //connect 定义的自动刷新插件
})
//设置  默认自动压缩任务
gulp.task('default',['yasuoJs','yasuoCss','yasuoHtml'],function(){
	//监听
	gulp.watch('./src/js/*.js',['yasuoJs','jianting']);
	gulp.watch('./src/css/*.css',['yasuoCss','jianting']);
	gulp.watch('./src/html/*.html',['yasuoHtml','jianting']);
	// gulp.watch('./src/scss/*.scss',['zhuanhuanScss','jianting']); 自动监听sass转换

	//开启服务器
	connect.server({
		//指定端口号
		root:'./dist',
		port:'8081',
		livereload:true  //自动刷新
	})

});




