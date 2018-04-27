var gulp = require('gulp');
var gfilelist = require('gulp-filelist');

var imgData = 'imgData.json'

function GetPath(file, options){
  this.push(file.path);
}

gulp.task('build', () =>{
  return gulp.src('./public/img/*')
  .pipe(gfilelist(imgData, {relative:true}))
  .pipe(gulp.dest('./public'));

})

