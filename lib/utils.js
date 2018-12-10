const fs = require('fs')

function fsExistsSync(path) {
	try{
			fs.accessSync(path, fs.F_OK)
	}catch(e){
			return false
	}
	return true
}

module.exports = {
	fsExistsSync,
}
