import {Router} from "express"
import {getClassByTeacher} from "../services/classes.js" 

const router=Router()


router.get("/",(req,res)=>{
console.log('allclasses')
res.send('allcasses')})

router.get('/teacher/:id',(req,res)=>{
    const id =parseInt(req.params.id)

    getClassByTeacher(id)
    .then(classes => res.send(classes))
    .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
})

export default router
