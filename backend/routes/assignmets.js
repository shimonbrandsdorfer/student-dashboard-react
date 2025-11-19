import { Router } from "express";
import { getAll } from "../services/assignments.js";

const router = Router()


router.get('/', async (req, res) => {
    const assignments = await getAll();
    res.send(assignments);
});

router.get('/teacher/:id', async(req,res)=>{
    const id =parseInt(req.params.id)

    //this should be replaed with function that fetch from db
    const assignments  =await getAll()
    const assignment = assignments.find((a)=>a.teacherId===id)
    res.send(assignment)
})
export default router;