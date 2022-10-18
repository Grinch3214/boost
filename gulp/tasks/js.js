import webpack from 'webpack-stream'

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'JS',
				message: 'Error <%= error.message %>'
			})
		))
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			// entry only for this project, next time delete it
			// entry: {
			// 	app: './src/js/app.js',
			// 	mainLang: './src/js/mainLang.js'
			// },
			output: {
				filename: 'app.min.js'
				// filename: '[name].min.js'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream())
}