import { Router } from "express";
import { createUser, getAll } from "../services/auth.js";
import { findUserByUserName, matchPasswords } from "../services/auth.js";

const router = Router();


router.get('/users', async (req, res, next) => {
    try {
        const users = await getAll();
        res.send(users);
    } catch (e) { 
        next(e);
     }
})

/**
 * this is an endpoint to sign-up
 */
router.post('/signup', async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        res.send(user);
    } catch (err) {
        next(err);
    }
});

router.post('/login', async (req, res, next) => {
    try{
        const {username, password} = req.body;
        const user = await findUserByUserName(username, password);
        if(!user) return res.status(401).send('Unauthorized');

        const isMatchingPassword = await matchPasswords(password, user.password);

        if(!isMatchingPassword) return res.status(401).send('Unauthorized');

        res.send(user);
    }catch(err) {
        next(err);
    }
});



export default router;