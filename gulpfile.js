var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')(); // Load all gulp plugins
                                              // automatically and attach
                                              // them to the `plugins` object
var runSequence = require('run-sequence');    // Temporary solution until gulp 4
                                              // https://github.com/gulpjs/gulp/issues/355
var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories;

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('archive:create_archive_dir', function () {
    fs.mkdirSync(path.resolve(dirs.archive), '0755');
});

gulp.task('archive:zip', function (done) {

    var archiveName = path.resolve(dirs.archive, pkg.name + '_v' + pkg.version + '.zip');
    var archiver = require('archiver')('zip');
    var files = require('glob').sync('**/*.*', {
        'cwd': dirs.dist,
        'dot': true // include hidden files
    });
    var output = fs.createWriteStream(archiveName);

    archiver.on('error', function (error) {
        done();
        throw error;
    });

    output.on('close', done);

    files.forEach(function (file) {

        var filePath = path.resolve(dirs.dist, file);

        // `archiver.bulk` does not maintain the file
        // permissions, so we need to add files individually
        archiver.append(fs.createReadStream(filePath), {
            'name': file,
            'mode': fs.statSync(filePath)
        });

    });

    archiver.pipe(output);
    archiver.finalize();

});

gulp.task('clean', function (done) {
    require('del')([
        dirs.archive,
        dirs.dist
    ], done);
});

gulp.task('copy', [
    'copy:index.html',
    'copy:minify',
    'copy:minify.libs',
    'copy:uglify',
    'copy:uglify.libs',
    'copy:misc'
]);


gulp.task('copy:index.html', function () {
    return gulp.src(dirs.src + '/index.html')
       .pipe(plugins.replace(/{{JQUERY_VERSION}}/g, pkg.devDependencies.jquery))
       .pipe(plugins.replace(/\.js/g, '.min.js'))
       .pipe(plugins.replace(/\.css/g, '.min.css'))
       .pipe(gulp.dest(dirs.dist));
});

gulp.task('copy:minify', function () {

    return gulp.src(dirs.src + '/css/*.css')
       .pipe(plugins.minifyCss())
       .pipe(plugins.rename({ extname: '.min.css' }))
       .pipe(gulp.dest(dirs.dist + '/css'));

});

gulp.task('copy:minify.libs', function () {

   return gulp.src(dirs.src + '/libs/**/*.css')
      .pipe(plugins.minifyCss())
      .pipe(plugins.rename({ extname: '.min.css' }))
      .pipe(gulp.dest(dirs.dist + '/libs'));

});

gulp.task('copy:uglify', function () {

   return gulp.src(dirs.src + '/js/*.js')
      .pipe(plugins.uglify())
      .pipe(plugins.rename({ extname: '.min.js' }))
      .pipe(gulp.dest(dirs.dist + '/js'));

});

gulp.task('copy:uglify.libs', function () {

   return gulp.src(dirs.src + '/libs/**/*.js')
      .pipe(plugins.uglify())
      .pipe(plugins.rename({ extname: '.min.js' }))
      .pipe(gulp.dest(dirs.dist + '/libs'));

});

gulp.task('copy:misc', function () {
    return gulp.src([

        // Copy all files
        dirs.src + '/**/*',

        // Exclude the following files
        // (other tasks will handle the copying of these files)
        '!' + dirs.src + '/css/*',
        '!' + dirs.src + '/js/*',
        '!' + dirs.src + '/libs/**/*',
        '!' + dirs.src + '/index.html',
        '!' + dirs.src + '/.*'

    ], {

        // Include hidden files by default
        dot: true

    }).pipe(gulp.dest(dirs.dist));
});


gulp.task( 'deploy', function() {

   var conn = ftp.create( {
      host:     'ftp.studiolhama.com.br',
      user:     'italo@studiolhama.com.br',
      password: '$uAFo&Bpmn11',
      parallel: 10,
      log: gutil.log
   } );

   var globs = [
      dirs.dist + '/css/**',
      dirs.dist + '/font/**',
      dirs.dist + '/img/**',
      dirs.dist + '/js/**',
      dirs.dist + '/libs/**',
      dirs.dist + '/views/**',
      dirs.dist + '/index.html'
   ];

   // using base = '.' will transfer everything to /public_html correctly
   // turn off buffering in gulp.src for best performance

   return gulp.src( globs, { base: '.', buffer: false } )
      .pipe( conn.newer( dirs.dist ) ) // only upload newer files
      .pipe( conn.dest( '/' ) );

} );

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('archive', function (done) {
    runSequence(
       'build',
       'archive:create_archive_dir',
       'archive:zip',
       done);
});

gulp.task('build', function (done) {
    runSequence(
       ['clean'],
       'copy',
       done);
});

gulp.task('default', ['build']);
