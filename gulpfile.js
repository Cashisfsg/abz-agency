const gulp = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");

const responsive_img = () =>
    gulp
        .src("./src/assets/*.jpg")
        .pipe(
            sharpResponsive({
                formats: [
                    // webp
                    { format: "webp", rename: { suffix: "-original" } },
                    { width: 360, format: "webp", rename: { suffix: "-360w" } },
                    { width: 768, format: "webp", rename: { suffix: "-768w" } },
                    {
                        width: 1024,
                        format: "webp",
                        rename: { suffix: "-1024w" }
                    }
                ]
            })
        )
        .pipe(gulp.dest("./src/assets/responsive"));

module.exports = {
    responsive_img
};
