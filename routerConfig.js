/* 配置模块的路由请求路径 增,删,改,查 */
module.exports = {
  routePath: {
    // 用户
    user: "/user",
    // 文章
    article: {
      /* 
      article模块里的字段
          "title",
          "tags",
          "description",
          "content",
          "imageUrl",
          "videoUrl",
          "musicUrl",
          "isRemove", 1 是删除,0是未删除 
          "dateTime",  日期
          "timeStamp" , 时间戳
        */

      // 增加
      add: {
        method: "post",
        path: "/article/add",
        mode: {
          type: "body",
          value: [
            "title",
            "tags",
            "description",
            "content",
            "imageUrl",
            "videoUrl",
            "musicUrl",
            "isRemove",
            "dateTime",
            "timeStamp",
          ],
        },
      },
      // 删除
      del: {
        method: "delete",
        path: "/article/del",
        mode: {
          type: "query",
          required: "id",
          value: ["id"],
        },
      },
      // 更新
      update: {
        method: "post",
        path: "/article/update",
        mode: {
          type: "body",
          required: "id",
          value: ["title", "tags", "description", "content"],
        },
      },
      // 查询
      search: {
        method: "get",
        path: "/article/search",
        mode: {
          type: "query", // 查询参数
          value: ["title", "description", "content"],
        },
      },
    },
  },
};
