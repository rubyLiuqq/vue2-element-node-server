/**
 * Created by rubyliuqq on 18/9/4.
 */
const mongoose = require('mongoose');
const mogoJson = require('../config/mogo.json');
const logger = require('../services/logger.js');

/*
 * 用于解决: 过期
 *    DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated,
 *    plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
 * */
mongoose.Promise = global.Promise;

/*
 * {useMongoClient:true}
 * 用于解决:DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead,
 *       or set the `useMongoClient` option if using `connect()` or `createConnection()`.
 * */
mongoose.connect(mogoJson.dbUrl, {useMongoClient:true});

mongoose.connection.on('connected', () => {
  logger.info('mongoose conneted');
});

mongoose.connection.on('error', (err) => {
  logger.error(`mongoose conneted error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  logger.info('mongoose disconnected');
});

module.exports = mongoose;
