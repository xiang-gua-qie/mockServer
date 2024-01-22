function dealSearchReq(req) {
  const _d = req.query;
  let searchObj = {};
  let pageObj = {
    pageNum: 1,
    pageSize: 20,
    isAll: "none",
    sort: "desc",
  };

  for (const key in _d) {
    if (
      Object.hasOwnProperty.call(_d, key) &&
      key !== "pageNum" &&
      key !== "pageSize" &&
      key !== "isAll" &&
      key !== "sort"
    ) {
      searchObj[key] = new RegExp(_d[key]);
    } else {
      pageObj[key] = _d[key];
    }
  }
  return { pageObj, searchObj };
}

function delay(res, data, isSuccess = true, time = 300) {
  setTimeout(() => {
    res.json({
      code: isSuccess ? "200" : "101",
      message: isSuccess ? "成功" : "失败",
      data: data,
    });
  }, time);
}

module.exports = {
  dealSearchReq,
  delay,
};
