const whiteList = ['localhost']//可以配置ip 
const preventHotLingKing = (req, res, next) => {
    // 直接访问取不到
    const referer = req.get("referer")
    if (referer) {
        const { hostname } = new URL(referer)
        if (!whiteList.includes(hostname)) {
            res.status(403).send('禁止访问')
            return
        }
    }
    console.log(referer, '===');
    next()
}
export default preventHotLingKing