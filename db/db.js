const mongoose = require("mongoose");
const CONFIGOBJ = require("../config");
module.exports = function (success, error, config = {}) {
  let config_ = {};
  if (config?.DBHOST && config?.DEPORT && config?.DBNAME) {
    config_ = config;
  } else {
    config_ = CONFIGOBJ;
  }
  const { DBHOST, DEPORT, DBNAME } = config_;

  if (typeof error !== "function") {
    error = () => {
      console.log("连接失败");
    };
  }
  // 1. 连接数据库  mockserver数据库
  mongoose.connect(`mongodb://${DBHOST}:${DEPORT}/${DBNAME}`);

  // 2. 设置回调
  //连接成功的回调
  mongoose.connection.once("open", () => {
    success();
    console.log("连接成功~~~");
  });
  // 连接失败的回调
  mongoose.connection.on("error", () => {
    error();
  });
  // 连接关闭的回调
  mongoose.connection.on("close", () => {
    console.log("数据库连接关闭");
  });
};
