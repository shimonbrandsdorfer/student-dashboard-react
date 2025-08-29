import { Router } from "express";
import { getAll } from "../services/assignments.js";

const router = Router()


router.get('/', async (req, res) => {
    const assignments = await getAll();
    res.send(assignments);
});


export default router;