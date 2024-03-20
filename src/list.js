import express from "express"
const router = express.Router()
// 获取列表
router.get("/getList",(req,res)=>{
    console.log(req.body);
    res.json({
        code:200,
        msg:"获取列表成功",
        data:[{
            name:"张三",
            age:18,
        }]
    })
})
// 获取用户信息
router.get("/:id",(req,res)=>{
    console.log(req.params);
    if(req.params.id==99){
        res.json({
            code:200,
            msg:"获取列表成功",
            data:{
                name:"张三",
                age:18,
            }
        })
    }else{
        res.json({
            code:200,
            msg:"获取失败",
        })
    }
  
})
export default router