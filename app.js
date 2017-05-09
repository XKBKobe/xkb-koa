const app = require('koa')();
const logger = require('koa-logger');
const json = require('koa-json');
const views = require('koa-views');
const onerror = require('koa-onerror');
const cors = require('koa-cors');

const index = require('./routes/index');
const users = require('./routes/users');
const mysql = require('./routes/mysql');
const login = require('./routes/login');

//跨域请求设置
app.use(cors());

// error handler
onerror(app);


// global middlewares
app.use(views('views', {
    root: __dirname + '/views',
    default: 'jade'
}));


app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(mysql.routes(), users.allowedMethods());
app.use(login.routes(), users.allowedMethods());

module.exports = app;
