/**
 * Created by rubyliuqq on 18/9/4.
 */
const timeFormat = {
  /*
  * to 2018-08-22 11:52:48
  * */
  formatDateTime: () => {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    month = month < 10 ? ('0' + month) : month;
    let dates = date.getDate();
    dates = dates < 10 ? ('0' + dates) : dates;
    let hours = date.getHours();
    hours = hours < 10 ? ('0' + hours) : hours;
    let min = date.getMinutes();
    min = min < 10 ? ('0' + min) : min;
    let sec = date.getSeconds();
    sec = sec < 10 ? ('0' + sec) : sec;

    return year + '-' + (month + 1) + '-' + dates + ' ' + hours + ':' + min + ':' + sec;
  },

  /*
   * to 2018-08-22 00:00:00
   * */
  dateTimeHoursZero: () => {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    month = month < 10 ? ('0' + month) : month;
    let dates = date.getDate();
    dates = dates < 10 ? ('0' + dates) : dates;

    return year + '-' + (month + 1) + '-' + dates + ' ' + '00:00:00';
  },
};

module.exports = timeFormat;
