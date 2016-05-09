var gulp = require('gulp');
var ts = require('gulp-typescript');

var paths = {
	npm: './node_modules/',
    bower: './bower_components/',
	lib: './lib/',
	tsAppRoot: './app/',
    assets: './assets/',
    dist: './dist/'
};

var tsAppProject = ts.createProject(paths.tsAppRoot + 'tsconfig.json');

var libs = [
    paths.npm + 'es6-shim/es6-shim.min.js',    
    paths.npm + 'systemjs/dist/system.src.js',
    paths.npm + 'zone.js/dist/zone.min.js',
    paths.npm + 'reflect-metadata/Reflect.js'
];

var assets = [
    paths.bower + 'bootstrap/dist/css/bootstrap.min.css',
    paths.bower + 'bootstrap/dist/css/bootstrap-theme.min.css',
    paths.bower + 'bootstrap/dist/css/bootstrap-theme.min.css.map',
    paths.bower + 'bootstrap/dist/css/bootstrap.min.css.map',
    paths.bower + 'bootstrap/dist/js/bootstrap.min.js',
    paths.bower + 'jquery/dist/jquery.min.js'
];

gulp.task('libs', function () {
	return gulp.src(libs)
	.pipe(gulp.dest(paths.lib));
});

gulp.task('assets', function(){
    return gulp.src(assets)
    .pipe(gulp.dest(paths.assets));
})

// tscompile
gulp.task('tsAppCompile', function () {	
    var tsResult = tsAppProject.src()
    .pipe(ts(tsAppProject));

	return tsResult.js
	.pipe(gulp.dest(paths.dist));	
})