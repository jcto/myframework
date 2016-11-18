const path = require('path')
const ip = require('ip')
const config={
	env:process.env.NODE_ENV || 'development',
	base_path : path.resolve(__dirname,'..'),//项目根目录
	src_dir:'src',
	
	//服务器配置
	server_host : ip.address(), // 用localhost
    server_port : process.env.PORT || 3000,

}
/**
 * 计算目录
 */
function base(){
	const args=[config.base_path].concat([].slice.call(arguments))
	return path.resolve.apply(path,args)
}
//项目路径
config.app_paths={
	src:base.bind(null,config.src_dir) //src('test') => /src/test/
}
module.exports=config;