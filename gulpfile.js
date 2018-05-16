var gulp = require('gulp'); // 引入当前gulp版本

// 安装插件
var uglify = require('gulp-uglify');//js文件压缩插件
var clean  = require('gulp-clean-css');//css文件压缩插件
var rename = require('gulp-rename');//文件重新命名
var htmlmin= require('gulp-htmlmin');//html文件压缩插件
var concat = require('gulp-concat');//js、css文件合并插件
var connect= require('gulp-connect');//自动刷新插件
var sass   = require('gulp-ruby-sass'); //sass自动转换cs
var imagemin = require('gulp-imagemin'); //图片压缩插件 cnpm install gulp-imagemin –-save-dev
// var pump     = require('pump');
var pngquant = require('imagemin-pngquant'); //图片深度压缩 cnpm install imagemin-pngquant --save-dev
var cache = require('gulp-cache');  //只压缩修改的图片 cnpm install gulp-cache --save-dev
/*
定义任务js  源文件路径  ./src/js/*.js  目标路径 ./dist/js
*/

gulp.task('yasuoJs',function(){
	return gulp.src('./src/js/*.js')
	.on('error', function (err) { console.log(err.message); })
	// .pipe(concat('catmain.js'))  压缩之前先合并，并给压缩完成的文件命名
	// .pipe(uglify('catmain.js'))	 压缩合并之后的文件
	.pipe(uglify())					//直接压缩
	.pipe(gulp.dest('./dist/js'));	//输出压缩后的文件
});


//定义任务css  源文件路径 ./src/css/*.css 目标路径 ./dist/css

gulp.task('yasuoCss',function(){
	return gulp.src('./src/css/*.css')
	.on('error', function (err) { console.log(err.message); })
	// .pipe(concat('catmain.css')) 压缩之前先合并，并给压缩完成的文件命名
	// .pipe(clean('catmain.css'))		压缩合并之后的文件
	.pipe(clean())					//压缩文件
	.pipe(gulp.dest('./dist/css')); //输出压缩后的文件
});


// 定义任务html 源文件路径 ./src/html/*.html 目标路径 ./dist/html

gulp.task('yasuoHtml',function(){
	return gulp.src('./src/html/*.html')
	.on('error', function (err) { console.log(err.message); })
	.pipe(htmlmin())		//压缩文件
	.pipe(gulp.dest('./dist/html'));	//输出压缩后的文件
});

//定义任务scss->css  源文件路径 ./src/scss/*.scss 目标路径./src/css
// gulp.task('zhuanhuanScss',function(){
// 	gulp.sass('./src/scss/*.scss')
// 	.pipe(ruby())		转换文件
// 	.pipe(gulp.dest('./src/css'));	输出压缩后的文件
// });
// gulp.task('sass', function(){
//      return sass('scss/index.scss')     编译文件
//           .on('error', sass.logError)   错误信息
//           .pipe(gulp.dest('css'));      输出路径
//       }
//   );
//定义任务scss->css  源文件路径 ./src/scss/*.scss 目标路径./src/css
gulp.task('sass', function () {
  return sass('./src/scss/*.{scss,css}')  //return是为了在错误位置打印错误的信息
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('./src/css'));
    // .pipe(livereload());  这个是重新加载，千万不能要，放出会出现 sass is not defined
});
// gulp.task('dist',function(){
//      gulp.watch('./scss/*.scss',['sass']);  监听的文件
//  });


//  定义任务  图片   源文件路径 ./src/img/*.{png,jpg,gif,ico} 目标文件路径 ./dist/img

//图片压缩基本用法

// gulp.task('testImagemin', function () {
//     gulp.src('./src/img/*.{png,jpg,gif,ico}')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./dist/img'));
// });

// 只压缩修改的图片

// gulp.task('testImagemin', function () {
//     gulp.src('src/img/*.{png,jpg,gif,ico}')
//         .pipe(cache(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('dist/img'));
// });

//定义 刷新任务  源文件路径 ./dist/html/*.html' 

gulp.task('jianting',function(){
	return gulp.src('./dist/html/*.html')
	.pipe(connect.reload());  //connect 定义的自动刷新插件
})
//设置  默认自动压缩任务
gulp.task('default',['yasuoCss','yasuoHtml','yasuoJs'],function(){
											// 'testImagemin'
	//监听
	gulp.watch('./src/js/*.js',['yasuoJs','jianting']);
	gulp.watch('./src/css/*.css',['yasuoCss','jianting']);
	gulp.watch('./src/html/*.html',['yasuoHtml','jianting']);
	//自动监听sass转换
	gulp.watch('./src/scss/*.{scss,css}',['sass']); 
	// gulp.watch('./src/img/*.{png,jpg,gif,ico}',['testImagemin']);

	//开启服务器
	connect.server({
		//指定端口号
		root:'./dist',
		port:'8081',
		livereload:true  //自动刷新
	})

});





