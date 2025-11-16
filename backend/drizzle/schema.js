import { pgTable, bigint, text, varchar, integer, money, date, timestamp, boolean } from 'drizzle-orm/pg-core';

// Users
export const users = pgTable('users', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  username: text('username'),
  password: text('password'),
  role: text('role'),
  inviteCode: text('invite_code'),
  dateJoined: timestamp('date_joined'),
});

// Courses
export const courses = pgTable('courses', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  topic: text('topic'),
  cost: money('cost'),
  numOfSessions: integer('num_of_sessions'),
});

// Classes
export const classes = pgTable('classes', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  courseId: bigint('course_id', { mode: 'number' }),
  dateStarted: date('date_started'),
});

// Assignments
export const assignments = pgTable('assignments', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  title: text('title'),
  description: text('description'),
  dueDate: date('due_date'),
  dateCreated: timestamp('date_created'),
  lastUpdated: timestamp('last_updated'),
  userCreated: bigint('user_created', { mode: 'number' }),
  classId: bigint('class_id', { mode: 'number' }),
});

// Assignment Submissions
export const assignmentSubmissions = pgTable('assignment_submissions', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  userId: bigint('user_id', { mode: 'number' }),
  assignmentId: bigint('assignment_id', { mode: 'number' }),
  grade: integer('grade'),
  dateSubmitted: timestamp('date_submitted'),
  dateGraded: timestamp('date_graded'),
  gradedBy: bigint('graded_by', { mode: 'number' }),
});

// Logins
export const logins = pgTable('logins', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  userId: bigint('user_id', { mode: 'number' }),
  datetime: timestamp('datetime'),
  success: boolean('success'),
});

// Follows (commented block)
export const follows = pgTable('follows', {
  followingUserId: integer('following_user_id'),
  followedUserId: integer('followed_user_id'),
  createdAt: timestamp('created_at'),
});

// Posts (commented block)
export const posts = pgTable('posts', {
  id: integer('id').primaryKey(),
  title: varchar('title'),
  body: text('body'),
  userId: integer('user_id').notNull(),
  status: varchar('status'),
  createdAt: timestamp('created_at'),
});