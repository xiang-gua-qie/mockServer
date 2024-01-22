var express = require("express");
var router = express.Router();
const fs = require("fs");

const ArticleModel = require("../models/ArticleModel.js");

/*   --------------------- 进行初始化数据库的数据  start  --------------------------- */
router.get("/mockServerInit", (req, res) => {
  ArticleModel.deleteMany({})
    .then(() => {
      console.log("成功清空集合中的所有数据");
    })
    .catch((err) => {
      if (err) {
        res.json({
          code: "101",
          message: "清空数据失败,初始化失败",
          data: null,
        });
        return;
      }
    });

  fs.readFile("public/data/initData.json", "utf8", (err, data) => {
    if (err) {
      res.json({
        code: "101",
        message: "读取文件失败,初始化失败",
        data: null,
      });
      return;
    }
    ArticleModel.create(JSON.parse(data).defaultData)
      .then(() => {
        res.json({
          code: "200",
          message: "初始化成功",
          data: null,
        });
      })
      .catch((error) => {
        res.json({
          code: "102",
          message: "初始化失败",
          data: null,
        });
      });
  });
});

module.exports = router;
