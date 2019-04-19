const gulp = require("gulp");
const server = require("gulp-webserver");

gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(server({
            open: true,
            livereload: true,
            host: "localhost",
            port: 8080
        }))
})