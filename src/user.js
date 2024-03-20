import express from 'express';
const router = express.Router();

// 添加用户 
router.post('/regUser', (req, res) => {
    res.json({
        code: 200,
        msg: '添加成功'
    })
})
// 用户登录 
router.post('/login', (req, res) => {
    res.json({
        code: 200,
        msg: '登录成功'
    })
})

export default router;