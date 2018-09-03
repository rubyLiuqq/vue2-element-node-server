/**
 * Created by rubyliuqq on 18/9/4.
 */
/**
 * 控制层
 */
const logger = require('../services/logger.js');
const dataFormat = require('../services/dataFormat.js');
const fixedTime = require('../services/monitor/fixedTime.js');

const Controller = {
  // 设置允许跨域
  setAllowOrigin: (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  },
  
  scheduleAndSendDing: () =>{
    fixedTime.scheduleTime();
  },

  // 处理404
  handleNotFound: (req, res, next) => {
    logger.error(`404 ERROR: req: ${req.path}`);
    let error = new Error('Not Found');
    error.status = 404;
    next(error);
  },

  // 错误处理器
  handleError: (err, req, res, next) => {
    logger.error(`500 ERROR: ${err}`);
    res.json(dataFormat.errorMsg(err.status, err));
  }
};

module.exports = Controller;
