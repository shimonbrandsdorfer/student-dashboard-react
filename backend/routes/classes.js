import {Router} from "express" 

const router=Router()


router.get("/",(req,res)=>{
console.log('allclasses')
res.send('allcasses')})

router.get('/teacher/:id',(req,res)=>{
    const id =parseInt(req.params.id)

})

export default router
