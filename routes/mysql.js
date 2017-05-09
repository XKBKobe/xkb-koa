/**
 * Created by asto on 2017/5/8.
 */
var router = require('koa-router')();
var mysql = require('mysql');

router.get('/mysql', async function (ctx, next) {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'xkbhcq0621',
        database: 'mysql'
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });

    connection.query('SELECT *from users', function (error, results, fields) {
        if (error) throw error;

        console.log('The solution is: ', results);
        // ctx.response.body = 'come on'

    });


    // ctx.response.body = 'come on baby koa get';

    // await this.render('index', {
    //     title: 'Hello World foo!'
    // });
});

module.exports = router;
