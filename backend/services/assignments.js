import {knexClient} from "./db.js";

export const getAll = async () => {
    return [{
        title : 'JS',
        due_date : '08-26-2025',
        done : false,
        teacherId: 4
    },{
        title : 'JS',
        due_date : '08-26-2025',
        done : false,
        teacherId: 3
    }];
}

export const getAssignmentByTeacher = async (teacherId) => {
  try {
    const assignments = await knexClient('assignments')
      .join('users', 'assignments.user_created', 'users.id')
      .select('assignments.id', 'assignments.title', 'assignments.description')
      .where('users.id', teacherId);
      console.log(assignments);
    return assignments;
  } catch (error) {
    console.error(`Error fetching assignments for teacher ${teacherId}:`, error);
    throw error; // Re-throw the error to be handled by the calling function (e.g., your route handler)
  }
}