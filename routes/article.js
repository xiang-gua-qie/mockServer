var express = require("express");
const moment = require("moment");
var router = express.Router();
const { dealSearchReq, delay } = require("../utils/index.js");
const ArticleModel = require("../models/ArticleModel.js");

const {
  routePath: { article },
} = require("../routerConfig.js");

/*  增 删 改 查 */
const { add, del, update, search } = article;

// 查
router[search.method](search.path, (req, res) => {
  const { searchObj, pageObj } = dealSearchReq(req);
  const { pageNum, pageSize, isAll, sort } = pageObj;

  ArticleModel.find(searchObj)
    .skip(isAll === "all" ? 0 : (pageNum * 1 - 1) * pageSize * 1)
    .limit(isAll === "all" ? 1000 : pageSize * 1)
    .sort({ createTime: sort === "desc" ? -1 : 1 })
    .then((data) => {
      delay(res, data);
    })
    .catch(() => {
      delay(res, null, false);
    });
});

router[search.method](search.path, (req, res) => {
  const _d = dealReq(search.mode, req);
  ArticleModel.find(_d)
    .then((data) => {
      if (data) delay(res, data);
      delay(res, null);
    })
    .catch(() => {
      delay(res, null, false);
    });
});

// 增
router[add.method](add.path, (req, res) => {
  ArticleModel.create({
    ...req.body,
    isRemove: 1,
    dateTime: moment().format("YYYY-MM-DD h:mm:ss"),
    timeStamp: +new Date(),
  })
    .then((data) => {
      ArticleModel.findById(data._id).then((d) => {
        if (d._id) delay(res, d);
      });
    })
    .catch(() => {
      delay(res, null, false, 10);
    });
});

// 删
router[del.method](del.path, (req, res) => {
  ArticleModel.deleteOne({ _id: req.query.id })
    .then((data) => {
      if (data.deletedCount) {
        delay(res, null);
      } else {
        delay(res, null, false, 10);
      }
    })
    .catch(() => delay(res, null, false, 10));
});

// 改
router[update.method](update.path, (req, res) => {
  ArticleModel.updateOne({ _id: req.body.id }, req.body)
    .then((data) => {
      if (data.modifiedCount) {
        ArticleModel.findById(req.body.id).then((d) => {
          if (d._id) delay(res, d);
        });
      }
    })
    .catch(() => delay(res, null, false, 10));
});

module.exports = router;
