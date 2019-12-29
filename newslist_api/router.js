/*
    路由模块
*/

const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 路由处理

// 获取新闻
router.get('/getnewslist',service.getnewslist);

// 获取图片分类
router.get('/getimgcategory',service.getimgcategory);

// 获取每个类别图片分类
router.get('/getimglist',service.getimglist);

// 获取商品列表
router.get('/getgoodslist',service.getgoodslist);

module.exports = router;
