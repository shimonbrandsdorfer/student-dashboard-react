import  {Router} from "express"
const router =Router()

router.get('/',(req,res)=>{
    res.send('all students')
})
router.get('/teacher/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    res.send(id)
})


export default router