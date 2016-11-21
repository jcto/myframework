
const entry=require('./entry')
const output = require('./output')
const resolve = require('./resolve')
const plugins = require('./plugins')
const loaders = require('./loaders')
const webpackConfig={
	entry:entry,
	output:output,
	resolve:resolve,
	plugins:plugins,
	module:{
		loaders:loaders
	}

}

module.exports=webpackConfig