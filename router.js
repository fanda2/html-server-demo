//创建路由
const { Router } = require('express')
const router = new Router()
const axios = require("axios")

const api = 'http://192.168.1.116:8000/api/'

router.post('/inrecognition', (request, response) => { //处理post请求
    let obj = {
        deviceId: request.body.deviceId,
        deviceName: request.body.deviceName,
    }
    axios.post(api + 'inrecognition', obj) //请求外部接口
        .then((res) => {
            response.send(res.data)
        })
        .catch((error) => {
            console.error(error)
            response.send(error)
        })
})

module.exports = router