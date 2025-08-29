import { Router } from "express";
import { getAll, getById } from "../services/courses.js";

const router = Router()


router.get('/', async (req, res) => {
    const courses = await getAll();
    res.send(courses);
});

router.get('/:id', async (req, res) => {
    const course = await getById(Number(req.params.id));
    res.send(course);
})


export default router;