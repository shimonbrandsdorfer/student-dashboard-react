/* auth.js */

import { Router } from "express";
import {  getAll } from "../services/auth.js";









const router = Router();


router.get('/users', async (req, res, next) => {
    try {
        const users = await getAll();
        res.send(users);
    } catch (e) { 
        next(e);
     }
})







export default router;