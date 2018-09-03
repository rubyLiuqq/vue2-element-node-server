/**
 * 关于数据格式化的管理模块
 */
const CONST = require('../config/consts.js');

module.exports = {
  // 请求成功时返回数据
  successMsg: (data) => {
    return {
      status: CONST.CODE.SUCCESS,
      message: 'success',
      data: data
    };
  },

  // 错误信息
  errorMsg: (status, message) => {
    return {
      status: status || CONST.CODE.SERVER_ERR,
      message: message || 'failed',
      data: {}
    }
  },
};
