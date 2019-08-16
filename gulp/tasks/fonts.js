module.exports = function() {
    $.gulp.task("fonts", function() {
        return $.gulp.src("./src/fonts/*.{eot,ttf,woff,woff2}")
            .pipe($.gulp.dest("./dest/fonts/"))
            .pipe($.debug({"title": "fonts"}));
    });
};