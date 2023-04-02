const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router') //引用模块 
    // parse application/x-www-form-urlencoded
    //配置模板引擎body-parser一定要在app.use(router)挂载路由之前
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
    // 全局 中间件  解决所有路由的 跨域问题
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT')
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Content-Type", "application/json;charset=utf-8");
    next()
})
app.use(router)

app.listen(3033, function() {
    console.log("中间服务已启动！监听端口3033")
})