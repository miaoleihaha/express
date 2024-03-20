const headerMiddleware = (req, res, next) => {
    // *允许所有源访问 如果接口支持session 但是*不支持session
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500')// 设置允许跨域的域名 Origin|* 
    // 我们服务端默认只支持 GET POST HEAD请求
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH")
    // 支持application/json
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
};
export default headerMiddleware