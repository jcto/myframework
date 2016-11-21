
const entry=require('./entry')
const output = require('./output')
const resolve = require('./resolve')
const plugins = require('./plugins')
const loaders = require('./loaders')
const webpackConfig={
	name    : 'client',
  	target  : 'web',
  	devtool : 'source-map',
	entry:entry,
	output:output,
	resolve:resolve,
	plugins:plugins,
	module:{
		loaders:loaders
	},
	vue:{
		
	}

}

module.exports=webpackConfig