const express = require('express')
const app = express();
const config=require('../config/index')
const paths = config.app_paths
if(config.env=='development'){
	console.log('development');
	console.log(paths.src('static'));
	app.use(express.static(paths.src('static')))
}else{
//	console.log('produlllllllllllllllllllllllllll');
}
module.exports=app