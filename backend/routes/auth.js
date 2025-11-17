import { Router } from "express";
import {  getAll } from "../services/auth.js";
import bcrypt from 'bcryptjs';


import jwt from 'jsonwebtoken';

const router = Router();


router.get('/users', async (req, res, next) => {
    try {
        const users = await getAll();
        res.send(users);
    } catch (e) { 
        next(e);
     }
})




function setToken(user, res, jwt) {

    const SESSION_DURATION_SECONDS = 60 * 60 * 24; // 1 day

    const token = jwt.sign(
        { userId: user.id, firstName: user.firstname, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: SESSION_DURATION_SECONDS }
    );

    res.cookie('authToken', token, {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
      
        secure: true,   // process.env.NODE_ENV === 'production',
        maxAge: SESSION_DURATION_SECONDS * 1000
    });

}

router.post('/login', async (req, res, next) => {
    try{
          const {username , password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'username and password are required.' });
    }
        const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username.toLowerCase()]);
        if (userResult.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const user = userResult.rows[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        setToken(user, res, jwt);
        const admin = user.role === 'admin' ? true : false;

        res.status(200).json({ message: 'Login successful.', user: { id: user.id, firstName: user.firstname, admin } });

    }catch(err) {
        next(err);
    }
});



export default router;