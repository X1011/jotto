var gulp = require('gulp')
  , task = gulp.task.bind(gulp)
  , src = gulp.src
  , dest = gulp.dest
  , watch = gulp.watch.bind(gulp)
  , spawn = require('child_process').spawn
  , concat = require('gulp-concat')
  , jshint = require('gulp-jshint')
  , templatecache = require('gulp-angular-templatecache')
  , connect = require('gulp-connect')
;

var build = gulp.dest('build');

var js = ['app/*.js',
		 '!app/*_test.js'];

task('js', function() {
	src(js)
		//disabling jshint for now, since i don't want it to run on bower_components.
		//maybe later i'll filter it
		//.pipe(jshint())
		//.pipe(jshint.reporter('default'))
		.pipe(concat('app.js'))
		.pipe(build);
});

task('templates', function() {
	src([
			'!app/index.html',
			'app/**/*.html'
		])
		.pipe(templatecache('templates.js', {standalone: true}))
		.pipe(build);
});

task('css', function() {
	src('app/**/*.css')
		.pipe(concat('app.css'))
		.pipe(build);
});

task('vendorJS', function() {
	src([
			'!app/bower_components/**/*.min.js',
			'app/bower_components/**/*.js'
		])
		.pipe(concat('lib.js'))
		.pipe(build);
});

task('vendorCSS', function() {
	src([
			'!bower_components/**/*.min.css',
			'bower_components/**/*.css'
		])
		.pipe(concat('lib.css'))
		.pipe(build);
});

task('copy-index', function() {
	src('app/index.html')	
		.pipe(build);
});

task('watch', function() {
	watch([
		'build/**/*.html',		  
		'build/**/*.js',
		'build/**/*.css'		
	], function(event) {
		return src(event.path)
			.pipe(connect.reload());
	});
	watch(js, ['js']);
	watch(['!app/index.html','app/**/*.html'], ['templates']);
	watch('app/**/*.css', ['css']);
	watch('app/index.html', ['copy-index']);

});

task('default', function() {
	var start = spawn.bind(this, 'gulp', ['serve'], {stdio: 'inherit'});
	var process = start();

	function restart() {
		process.kill();
		process = start();
	}

	watch('gulpfile.js', restart);
});

task('connect', connect.server({
	root: ['build'],
	port: 9000,
	livereload: {port: 9001},
	https: true
}));

task('serve', ['connect', 'js', 'templates', 'css', 'copy-index', 'vendorJS', 'vendorCSS', 'watch']);
