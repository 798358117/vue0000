/*
    业务模块
*/

const request = require('request');
const data = require('./imgcategory.json');

// 获取新闻
exports.getnewslist = (req,res) => {
    request('http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html', function (error, response, body) {
        if (!error && response.statusCode == 200) {
           res.send(JSON.parse(body));
            // console.log(body)
        }
    })
}

// 获取图片分类
exports.getimgcategory = (req,res) => {
    res.send(data);
}

// 获取每个类别图片分类
exports.getimglist = (req,res) => {
    let id = req.query.id;
    request("https://3g.163.com/touch/reconstruct/article/list/"+ id +"/0-10.html", function (error, response, body) {
        let len = body.length;
        if (!error && response.statusCode == 200) {
           res.send(JSON.parse(body.substring(9,len-1)));   // 返回数据格式不正确，裁减之后OK
            // console.log(len)
            // console.log(body.substring(9,len-1))
        }
    })
}

// 获取商品列表（BAI6I0O5wangning）
exports.getgoodslist = (req,res) => {
    let pageindex = req.query.pageindex;
    // console.log(pageindex);
    request('https://3g.163.com/touch/reconstruct/article/list/BAI6I0O5wangning/0-'+ pageindex +'.html', function (error, response, body) {
        let len = body.length;
        if (!error && response.statusCode == 200) {
           res.send(JSON.parse(body.substring(9,len-1)));   // 返回数据格式不正确，裁减之后OK
            // console.log(len)
            // console.log(body.substring(9,len-1))
        } else {
            return
        }
    })
}
