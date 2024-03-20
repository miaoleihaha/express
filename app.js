import express from "express"
import List from "./src/list.js"
import User from "./src/user.js"
// 设置响应头
import headerMiddleware from "./middleware/header.js"
// logger中间件
import loggerMiddleware from "./middleware/logger.js"
// referer
import preventHotLingKing from "./middleware/prevent.js"
const app = express()
app.use(express.json())//post请求需要中间件支持 express.json做解析

// 防盗链
// app.use(preventHotLingKing)
// app.use("/node",express.static("statice"))
// 保存请求日志
// app.use(loggerMiddleware)
// 设置响应头
app.use('*', headerMiddleware)
app.use('/list', List)
app.use('/user', User)

// 动态参数req.params
// app.get("/get/:age", (req, res) => {
//     console.log(req.params.age);//23
//     res.send('get')
// })
// // get通过req.query获取参数
// app.get("/get", (req, res) => {
//     console.log(req.query);//{ name: 'ml', age: '23' }
//     res.send('get')
// })
// // post通过req.body获取参数
// // 需要中间件支持
// app.post("/post", (req, res) => {
//     console.log(req.body);//{ name: 'ml', age: 23 }
//     res.send('post')
// })
// 预检请求 OPTIONS 请求 由浏览器发起
// 满足三个条件才会发起预检请求
// 1、Content-Type application/json
// 2、自定义请求头
// 3、非普通请求 patch delete put
// restFui接口规范 get post put delete patch
// app.patch("/patch", (req, res) => {
//     res.send('patch')
// })
// // 自定义请求头
// app.get("/get", (req, res) => {
//     res.set('ml',23)
//     res.setHeader("Access-Control-Expose-Headers", "ml")
//     res.json({
//         code:200
//     })
// })
// sse webSocket属于全双工通讯，也就是前端可以给后端实时发送，后端也可以给前端实时发送，SSE属于单工通讯，后端可以给前端实时发送
// 增加该响应头text/event-stream就变成了sse
app.get("/sse", (req, res) => {
    console.log('in');
    res.setHeader('Content-Type', 'text/event-stream')
    res.status(200)
    // setInterval(() => {
    //     res.write('event: test\n')
    //     res.write('data: ' + new Date().getTime() + '\n\n')
    // }, 1000)
})
app.listen(3000, () => {
    // console.log('start');
    console.log("Listening on port 3000");
})
