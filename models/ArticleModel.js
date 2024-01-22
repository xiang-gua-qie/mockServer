const mongoose = require("mongoose");

//  3.  创建文档的机构对象 ---- 设置集合中文档的属性以及属性值的类型
let ArticleSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  tags: {
    type: [],
    default: [],
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  musicUrl: {
    type: String,
  },
  isRemove: {
    type: Number,
  },
  createTime: {
    type: String,
  },
  createTimeStamp: {
    type: Number,
  },
});

// 4. 创建模型对象   --- 对文档操作的封装对象
let ArticleModel = mongoose.model("articles", ArticleSchema); // book是集合名称

module.exports = ArticleModel;
