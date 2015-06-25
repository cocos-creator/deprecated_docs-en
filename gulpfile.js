var gulp = require('gulp');
var spawn = require('child_process').spawn;
var os = require('os');
var del = require('del');
var path = require('path');
var docSrcs = [];

gulp.task('generate', function(cb) {
    var child = spawn('hexo', ['generate']);
    child.on('data', function(data) {
        console.log(data.toString());
    });
    child.on('exit', function() {
        var stream1 = gulp.src('source/_api/**/*')
                        .pipe(gulp.dest('public/api'));
        var stream2 = gulp.src('source/_oldapi/**/*')
                        .pipe(gulp.dest('public/api-0.4'));
        var count = 2;
        stream1.on('exit', function() {
            if (--count <= 0) {
                return cb();
            }
        });
        stream2.on('exit', function() {
            if (--count <= 0) {
                return cb();
            }
        });
    });
});

gulp.task('download-doc-src', function(cb){
    var count = 2;
    downloadRepoToCache('fireball', function(folder) {
        if (--count <= 0) {
            cb();
        }
    });
    downloadRepoToCache('editor-framework', function() {
        if (--count <= 0) {
            cb();
        }
    });
});

gulp.task('copy-doc-src', ['download-doc-src'], function(cb) {
    var path = require('path');
    del([
        'source/_posts/fireball',
        'source/_posts/editor'
    ],function() {
        var stream1 = gulp.src(path.join(getCacheFolder('fireball'), 'docs', '**/*'))
                        .pipe(gulp.dest('source/_posts/fireball'));
        var stream2 = gulp.src(path.join(getCacheFolder('editor-framework'), 'docs', '**/*'))
                        .pipe(gulp.dest('source/_posts/editor'));
        var count = 2;
        stream1.on('exit', function() {
            if (--count <= 0) {
                return cb();
            }
        });
        stream2.on('exit', function() {
            if (--count <= 0) {
                return cb();
            }
        });
    });
});

function getCacheFolder(repoName) {
    return path.join(os.tmpDir(), 'fireball-doc-src', repoName);
}

function downloadRepoToCache(repoName, callback) {
    var Download = require('download');
    var cacheFolder = getCacheFolder(repoName);
    del(cacheFolder, {force: true}, function(err) {
        if (err) throw err;
        else {
            new Download({
                mode: '755',
                extract: true,
                strip: 1
            })
                .get('https://github.com/fireball-x/' + repoName + '/archive/master.zip')
                .dest(cacheFolder)
                .run(function(err,files){
                    if (err) throw err;
                    else callback(cacheFolder);
                });
        }
    });
}
