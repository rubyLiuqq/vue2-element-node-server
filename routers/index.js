/**
 * Created by rubyliuqq on 18/9/4.
 */
/**
 * 主路由文件
 */

let controller = require('../controllers/index.js');

module.exports = (app) => {
  //设置跨域访问
  app.all('*', controller.setAllowOrigin);

  // 获取主页所有文件夹
  console.log('yes');
  controller.scheduleAndSendDing();
  app.use('/chrome-launcher', controller.sendExceptionChrome);
  app.use('/page-chart', controller.sendPageChartData);
  
  // 捕获404错误并传递给错误处理器
  app.use(controller.handleNotFound);

  // 错误处理器
  app.use(controller.handleError);
};
