var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});

gulp.task('scripts', function() {
	gulp.src(['!./app/**/*_test.js','./app/**/*.js'])
		//disabling jshint for now, since i don't want it to run on bower_components.
		//maybe later i'll filter it
		//.pipe(plugins.jshint())
		//.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.concat('app.js'))
		.pipe(gulp.dest('./build'));
});

gulp.task('templates', function() {
	gulp.src([
			'!./app/index.html',
			'./app/**/*.html'
		])
		.pipe(plugins.angularTemplatecache('templates.js', {standalone:true}))
		.pipe(gulp.dest('./build'));
});

gulp.task('css', function() {
	gulp.src('./app/**/*.css')
		.pipe(plugins.concat('app.css'))
		.pipe(gulp.dest('./build'));
});

gulp.task('vendorJS', function() {
	gulp.src([
			'!./bower_components/**/*.min.js',
			'./bower_components/**/*.js'
		])
		.pipe(plugins.concat('lib.js'))
		.pipe(gulp.dest('./build'));
});

gulp.task('vendorCSS', function() {
	gulp.src([
			'!./bower_components/**/*.min.css',
			'./bower_components/**/*.css'
		])
		.pipe(plugins.concat('lib.css'))
		.pipe(gulp.dest('./build'));
});

gulp.task('copy-index', function() {
	gulp.src('./app/index.html')	
		.pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
	gulp.watch([
		'build/**/*.html',		  
		'build/**/*.js',
		'build/**/*.css'		
	], function(event) {
		return gulp.src(event.path)
			.pipe(plugins.connect.reload());
	});
	gulp.watch(['./app/**/*.js','!./app/**/*test.js'], ['scripts']);
	gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
	gulp.watch('./app/**/*.css', ['css']);
	gulp.watch('./app/index.html', ['copy-index']);

});

gulp.task('connect', plugins.connect.server({
	root: ['build'],
	port: 9000,
	livereload: true
}));

gulp.task('default',['connect', 'scripts', 'templates', 'css', 'copy-index', 'vendorJS', 'vendorCSS', 'watch']);