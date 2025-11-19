import { Router } from "express";
import { getAll,getAssignmentByTeacher } from "../services/assignments.js";

const router = Router()


router.get('/', async (req, res) => {
    const assignments = await getAll();
    res.send(assignments);
});

router.get('/teacher/:id', async(req,res)=>{
    const id =parseInt(req.params.id)
    const assignments = await getAssignmentByTeacher(id)
    //this should be replaed with function that fetch from db
    // const assignments  =await getAll()
    // const assignment = assignments.find((a)=>a.teacherId===id)
    console.log(assignments)
    res.send(assignments)
})
export default router;