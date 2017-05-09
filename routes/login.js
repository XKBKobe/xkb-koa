/**
 * Created by asto on 2017/5/8.
 */
var router = require('koa-router')();


router.post('/login', async function (next) {

    console.log('ctx' + JSON.stringify(this));

    this.ctx.response.body = 'come on baby koa post';
});

module.exports = router;
