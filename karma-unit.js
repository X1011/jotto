module.exports = function(config) {config.set({
	frameworks: ['mocha', 'chai'],
	files: [
		'app/jotto.js',
		'app/**/*_test.js'
	],
	
	autoWatch: true,
	
	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: false,

	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['PhantomJS'],
	
	// possible values: dots, progress
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['dots'],
	
	// possible values: DISABLE, ERROR, WARN, INFO, DEBUG
	logLevel: config.LOG_WARN,

	port: 9876,
	colors: true

});};
