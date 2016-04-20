"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var reactify = require('reactify'); // Transforms JSX into JS
var source = require('vinyl-source-stream'); // Use conventional text streams with gulp
var concat = require('gulp-concat'); // concatenates files
var lint = require('gulp-eslint'); // Lint JS files, including JSX

// Configuration variables used in gulp build are defined here
var config = {
	port: 9010,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		img: './src/images/*',
		css: [
			'src/css/bootstrapSimplex.min.css',
			'node_modules/toastr/toastr.css',
			'src/css/custom.css'
		],
		dist: './dist',
		mainJs: './src/main.js'
	}
};

// Start a local development server
gulp.task('connect', function (){
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

// Open browser using default OS browser
gulp.task('open', ['connect'], function(){
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}))
});

// Source html files and copy them to dist folder
gulp.task('html', function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

// Source js files, transform them from jsx to js, bundle them into single file and copy them to dist folder
gulp.task('js', function(){
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

// Source css files, concatinate them into single css bundle and copy to dist folder
gulp.task('css', function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});

// Copy fonts to dist folder
gulp.task('copy-bs-fonts', function(){
  return gulp.src('node_modules/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest(config.paths.dist + '/fonts/'));
});

// Migrates images to dist folder
// Note I could even optimize images here
gulp.task('images', function(){
	gulp.src(config.paths.img)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());

		// Publish favicon
		gulp.src('./src/favicon.ico')
			.pipe(gulp.dest(config.paths.dist));
});

// Run eslint against the javscipt files to flag up any errors
gulp.task('lint', function(){
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

// Watch development files for changes
gulp.task('watch', function(){
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
	gulp.watch(config.paths.css, ['css']);
});

// Default task run when "gulp" command is run in cli
gulp.task('default', ['html', 'js', 'css', 'copy-bs-fonts', 'images', 'lint', 'open', 'watch']);
