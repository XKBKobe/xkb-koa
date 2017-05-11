/**
 * Created by asto on 2017/5/8.
 */
const router = require('koa-router')();
const mongoose = require('mongoose');
//user加载
var User = require('../models/users');
//登录
router.post('/login', async function () {

    let db = mongoose.connect("mongodb://127.0.0.1:27017/test");

    db.connection.on("error", function (error) {
        console.log("数据库连接失败：" + error);
    });

    db.connection.on("open", function () {
        console.log("数据库连接成功");
    });

    console.log('ctx' + JSON.stringify(this.response));

    this.response.body = await User.find({});

});

module.exports = router;
