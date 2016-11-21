
const path = require('path');

const projectRoot =path.resolve(__dirname,'../../');
const loaders=[]
const jsBabel={
	 test: /\.js$/,
	 include: projectRoot,
     exclude: /node_modules/,
     loader: 'babel',
}
const vueLoader={
	test:/\.vue$/,
	include: projectRoot,
	loader:'vue'
}
loaders.push(jsBabel)
loaders.push(vueLoader)
module.exports=loaders