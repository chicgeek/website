'use strict';

// global module, require
let gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*']
    }),
    fs = require('fs'),
    holo = require('holograph');

let settings = {
    source              : './source',
    cssSource           : '/css/',
    cssDestination      : './web',
    jsSource            : '/js/',
    jsDestination       : './web',
    imageSource         : '/images/',
    imageDestination    : './web/images',
    holoDestination     : './style-guide',
    cssLibs             : require('node-normalize-scss').includePaths,
    googleFonts         : 'https://fonts.googleapis.com/css?family=Roboto+Condensed',
    faviconData         : 'faviconData.json'
}

// compile SCSS to CSS
gulp.task('scss', function() {
    return gulp.src([settings.source + settings.cssSource + '/**/*.scss'])
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            includePaths: settings.cssLibs,
            outputStyle: 'compressed'
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['> 5%']
        }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(settings.cssDestination));
});

// compile JS
gulp.task('js', function() {
    return gulp.src(settings.source + settings.jsSource)
        .pipe($.sourcemaps.init())
        .pipe($.concat('main.js'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(settings.jsDestination));
});

// build holograph style guide
gulp.task('holograph', ['scss'], function(cb) {
    holo.holograph({
        source: settings.source + settings.cssSource,
        destination: settings.holoDestination,
        documentation_assets: './node_modules/holograph/assets',
        dependencies: [
            settings.cssDestination
        ],
        css_include: [
            settings.googleFonts,
            './web/main.css'
        ],
        index: 'home',
        nav_level: 'section',
        exit_on_warnings: false,
        index_title: 'chicgeek\'s style guide'
    }, cb);
});

// compile SVGs
gulp.task('svg', function () {
    return gulp
        .src([
            settings.source + settings.imageSource + '/svg/*.svg'
        ])
        .pipe($.svgmin(function (file) {
            var prefix = settings.basename(file.relative, settings.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix ? prefix + '-' : '',
                        minify: true
                    }
                }]
            }
        }))
        .pipe($.svgstore())
        .pipe(gulp.dest(settings.imageDestination));
});

// generate favicon files
gulp.task('favicon', function(done) {
    $.realFavicon.generateFavicon({
        masterPicture: './source/images/favicons/favicon.svg',
        dest: './',
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#ffffff',
                margin: '14%',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: false,
                    precomposedIcons: false,
                    declareOnlyDefaultIcon: true
                }
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'whiteSilhouette',
                backgroundColor: '#008080',
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles: {
                        small: false,
                        medium: true,
                        big: false,
                        rectangle: false
                    }
                }
            },
            androidChrome: {
                pictureAspect: 'shadow',
                themeColor: '#008080',
                manifest: {
                    name: 'Laura Kishimoto',
                    display: 'standalone',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false
                }
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: '#008080'
            }
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false
        },
        markupFile: settings.faviconData
    }, function() {
        done();
    });
});

// inject favicon markup on pages, copy markup to root
gulp.task('markup', function() {
    return gulp.src([ './source/markup/**/*.html' ])
        .pipe($.realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(settings.faviconData)).favicon.html_code))
        .pipe(gulp.dest('./'));
});

// update favicon rules
gulp.task('favicon-update', function(done) {
    var currentVersion = JSON.parse(fs.readFileSync(settings.faviconData)).version;
    $.realFavicon.checkForUpdates(currentVersion, function(err) {
        if (err) {
            throw err;
        }
    });
});

// watch for changes
gulp.task('dev', ['build'], function() {
    var watcher = gulp.watch(
        settings.source + '/**/*',
        ['build']
    );
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks…');
    });
});

// build
gulp.task('build', ['svg', 'scss', 'js', 'holograph', 'markup']);

// reserved for deployment tasks
gulp.task('default', ['build']);

// reserved for deployment tasks
gulp.task('deploy', ['build']);
