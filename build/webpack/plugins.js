const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const plugins=[];
const htmlWebpackPluginOption={
	title		 : 'chn\'s framework',
  	cache		 : true,
  	showErrors:true,
    template : path.resolve(__dirname,'../../src/templates/index.html'),
    hash     : false,
    //favicon  :paths.client('static/favicon.ico'),
    filename : 'chn.html',
    inject   : 'body',
    minify   : {

      collapseWhitespace : false
    },
    //chunks 	 : ['chn','vendor2'],
    chunksSortMode : 'auto',
    //excludeChunks :[]
}


plugins.push(new HtmlWebpackPlugin(htmlWebpackPluginOption))
module.exports = plugins