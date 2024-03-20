// 中间件 请求日志
import Log4js from "log4js";
// 控制台输出 文件输出
Log4js.configure({
    appenders: {
        // 控制台输出
        out: {
            type: "console",
            // 颜色样式
            latout: {
                type: "colored",
            }
        },
        file: {
            filename: "logs/app.log",
            type: "file"
        }
    },
    categories: {
        default: {
            appenders: ["out", "file"],
            level: "debug"
        }
    }
})
const logger = Log4js.getLogger("categories");
// request 请求日志
// response 响应日志
// next 下一个中间件//不调用一只卡在这
const loggerMiddleware = (req, res, next) => {
    // req.methods 请求方法
    // req.url 请求路径
    let params = ''
    if (req.method === 'GET') {
        params = req.query ? req.query : req.params
    } else if (req.method === 'POST') {
        console.log(req.body,'===');
        params = req.body
    }
    logger.info(`${req.method} ${req.url} ${params ? JSON.stringify(params) : ''}`)
    next()
}
export default loggerMiddleware