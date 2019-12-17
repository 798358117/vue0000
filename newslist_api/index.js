/*
    品牌列表管理系统
*/
const express = require('express');
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');
const app = express();

// 解决跨域问题*****************

app.use('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
//res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
  if (req.method == 'OPTIONS') {
    res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
  }
  else {
    next();
  }
});

// 处理请求参数
// 挂载参数处理中间件（post）

// app.use(bodyParser.urlencoded({ extended: false }));
// // 处理json格式的参数
// app.use(bodyParser.json());


// 启动服务器功能
// 配置路由
app.use(router);
// 监听端口
app.listen(3001,()=>{
    console.log('running...');
});