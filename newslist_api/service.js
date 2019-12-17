/*
    业务模块
*/

const request = require('request');

// 获取新闻
exports.getnewslist = (req,res) => {
    request('http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html', function (error, response, body) {
        if (!error && response.statusCode == 200) {
           res.send(JSON.parse(body));
            // console.log(body)
        }
    })
}
