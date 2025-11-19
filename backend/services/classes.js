import { knexClient } from "./db.js";

export const getClassByTeacher = async (teacherId) => {
  try {
    const classes = await knexClient('classes')
      .join('users', 'classes.teacher_id', 'users.id')
      .select('classes.id', 'classes.course_id', 'classes.date_started')
      .where('users.id', teacherId);
      console.log(classes);
    return classes;
  } catch (error) {
    console.error(`Error fetching assignments for teacher ${teacherId}:`, error);
    throw error; // Re-throw the error to be handled by the calling function (e.g., your route handler)
    }
}