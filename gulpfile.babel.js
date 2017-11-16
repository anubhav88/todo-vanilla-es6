import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';

const jsFiles = 'src/*.js';
const jsDest = 'dist';

gulp.task('scripts', () =>{
    return gulp.src(jsFiles)
        .pipe(babel())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', ()=> {
	gulp.start('scripts');
    let watcher = gulp.watch('src/*.js', ['scripts']);
    watcher.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});