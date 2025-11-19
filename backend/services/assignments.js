import knexClient from "./db.js";

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

export const getAssignmentByTeacher = (teacherId) => {
    const res = knexClient('assignments')
  .join('users', 'assignments.user_created', 'users.id')
  .select('assignments.id', 'assignments.title', 'assignments.description')
  .where('users.id', teacherId);
  return res;

}