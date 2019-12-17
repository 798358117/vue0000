/*
    路由模块
*/

const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 路由处理

// 获取新闻
router.get('/getnewslist',service.getnewslist);

module.exports = router;
