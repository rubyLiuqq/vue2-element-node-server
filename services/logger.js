/**
 * 日志模块
 */
const log4js = require('log4js');
const logConfig = require('../config/log.json');

// 加载日志模块配置
log4js.configure(logConfig);

// 日志等级(目前只做了debug、info、error三级区分)
levels = {
  'trace'		: 	log4js.levels.TRACE,
  'debug'		: 	log4js.levels.DEBUG,
  'info'		: 	log4js.levels.INFO,
  'warn'		: 	log4js.levels.WARN,
  'error'		: 	log4js.levels.ERROR,
  'fatal'		: 	log4js.levels.FATAL
};

// debug等级日志，记录开发调试日志
let debug = (value) => {
	let logger = log4js.getLogger('logDebug');
	// logger.setLevel(levels['debug']);
	return logger.info(value);
};

// info等级日志，记录正常运行逻辑日志
let info = (value) => {
	let logger = log4js.getLogger('logInfo');
	// logger.setLevel(levels['info']);
	return logger.info(value);
};

// error等级日志，记录错误日志
let error = (value) => {
	let logger = log4js.getLogger('logError');
	// logger.setLevel(levels['error']);
	return logger.info(value);
};

module.exports = {
	debug	: debug,
	info	: info,
	error	: error
};
