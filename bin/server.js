const server = require('../server/main')
const debug = require('debug')('app:bin:server')
const opn=require('opn');
const config = require('../config/index')
const port=config.server_port
server.listen(port,function(err){
	if(err){
		console.log(err);
		return
	}
	var uri='http://localhost:'+port;
	opn(uri)
})
debug(`Server is now running at http://localhost:${port}.`)