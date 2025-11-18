import { Router } from "express";
const router = Router();

import AssignmentsRouter from './assignmets.js';
import CoursesRouter from './courses.js';


router.use("/assignments", AssignmentsRouter);
router.use('/courses', CoursesRouter);

export default router;