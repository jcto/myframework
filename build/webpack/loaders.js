
const path = require('path');

const projectRoot =path.resolve(__dirname,'../../');
const loaders=[]
const jsBabel={
	 test: /\.js$/,
	 include: projectRoot,
     exclude: /node_modules/,
     loader: 'babel',
}
loaders.push(jsBabel)
module.exports=loaders