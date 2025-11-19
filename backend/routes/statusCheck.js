import { Router } from "express";

const router = Router();



router.get('/userStatus', async (req, res, next) => {
   try{
res.status(200).json({ message: req.user, role: req.user.role});

   }catch(err) {
        next(err);
    }
});



export default router;