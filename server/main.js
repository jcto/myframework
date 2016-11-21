const express = require('express')
const webpack = require('webpack')
const path = require('path')
const app = express();
const webpackConfig = require('../build/webpack')
const config=require('../config/index')
const paths = config.app_paths

app.use(require('connect-history-api-fallback')({
	index: '/chn.html'
}))
if(config.env=='development'){
	// console.log(webpackConfig.entry)
	console.log(path.resolve(__dirname,webpackConfig.entry.app))
	const compiler = webpack(webpackConfig)
	app.use(require('webpack-dev-middleware')(compiler, {
//     index: "two.html",
//     publicPath  : webpackConfig.output.publicPath,
//     contentBase : paths.client(),
//     hot         : true,
//     quiet       : config.compiler_quiet,
// //  index				:	"index.html",
//     noInfo      : config.compiler_quiet,
//     lazy        : false,
//     stats       : config.compiler_stats
  }))

	console.log('development');
	console.log(paths.src('static'));
	app.use(express.static(paths.src('static')))
}else{
//	console.log('produlllllllllllllllllllllllllll');
}
module.exports=app