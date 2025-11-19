import { Router } from "express";
const router = Router();

import AssignmentsRouter from './assignmets.js';
import CoursesRouter from './courses.js';
import ClassesRoouter from './classes.js';
import UsersRouter from './users.js'

router.use("/assignments", AssignmentsRouter);
router.use('/courses', CoursesRouter);
router.use('/classes', ClassesRoouter);
router.use('/users',UsersRouter)
export default router;