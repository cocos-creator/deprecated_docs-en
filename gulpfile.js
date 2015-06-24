var gulp = require('gulp');
var spawn = require('child_process').spawn;

gulp.task('generate', function(cb) {
    var child = spawn('hexo', ['generate']);
    child.on('data', function(data) {
        console.log(data.toString());
    });
    child.on('exit', function() {
        var stream1 = gulp.src('source/_api/**/*')
                        .pipe(gulp.dest('public/api'));
        var stream2 = gulp.src('source/_oldapi/**/*')
                        .pipe(gulp.dest('public/old-api'));
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
