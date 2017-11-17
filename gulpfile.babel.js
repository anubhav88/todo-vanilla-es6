import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import webpack from 'webpack';
import gutil from 'gulp-util';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config';



const jsFiles = 'src/*.js';
const jsDest = 'dist';
const jsTarget = 'target';

gulp.task('babel', () => {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('target'));
});


gulp.task('webpack', (done) =>{
    webpack(webpackConfig).run(onBuild(done));
});

function onBuild(done) {
    return function(err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function(key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
            if (done) {
                done();
            }
        }
    }
}

gulp.task('default', ()=> {
	gulp.start('webpack');
});