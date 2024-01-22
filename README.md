# mockserver 使用介绍

## clone

 ```javascript
 git clone -b dev https://github.com/xiang-gua-qie/mockServer.git
 ```



## 进入项目根目录-运行命令行

```javascript
npm install     // 下载依赖
```



## 下载 MongoDB

```javascript
https://www.mongodb.com/try/download/community   // 下载 5.024 zip版本 进行安装
```



## 安装 MongoDB



  	

+ 将下载的压缩包 移动至  C:\Program Files 下进行解压缩

+ 在 C盘目录下 , 创建  data 文件夹, data文件夹内 再创建 db 文件夹

+ 配置用户环境变量

  + 系统属性 ----->  **环境变量** ----> xxx的**用户变量** ----> 选中 **Path** ----> 点击下方的  **编辑 ** 按钮 

  + 将下载的mongoDB解压缩后的文件,把里面的bin文件打开, 复制上方的路径

  + 新建,粘贴复制的路径

  + 在电脑桌面运行命令行

    ```javascript
     mongod   // 启动MongoDB服务端
    ```

    

  

  ![image-20240122191359275](C:\Users\香瓜茄\AppData\Roaming\Typora\typora-user-images\image-20240122191359275.png)

###  可以选择安装免费的可视化服务端软件

```javascript
https://github.com/Studio3T/robomongo/releases    // 下载电脑相应的软件
```



## 启动MongoDB服务器



```javascript
mongod          // 打开命令窗口 ,输入该命令
```



  

​	



## 下载 nodemon 插件 (可选择不下载)



```javascript
npm i -g nodemon   // 全局安装

npm i -D nodemon   // 本地安装

```





## 启动 mockserver  项目



在 mockserver   目录下 打开命令窗口

```js
npm start       // 启动  (修改mockserver代码后,需要手动重启)

npm run server  // 热启动 (修改mockserver代码后自动重启项目)
```





## 配置前端项目的代理服务器

根据不同项目,配置略有不同,根据自己的项目进行相关代理配置

