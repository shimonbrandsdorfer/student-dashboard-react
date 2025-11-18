const {
    pgTable,
    bigint,
    text,
    timestamp,
    date,
    decimal,
    integer,
    boolean,
} = require('drizzle-orm/pg-core');

const { relations } = require('drizzle-orm');


// --- Users Table ---
const users = pgTable('users', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    username: text('username').notNull(),
    password: text('password').notNull(),
    role: text('role').notNull(),
    inviteCode: text('invite_code'),
    dateJoined: timestamp('date_joined', { withTimezone: true }).defaultNow(),
});

// --- Courses Table ---
const courses = pgTable('courses', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    topic: text('topic').notNull(),
    cost: decimal('cost', { precision: 12, scale: 2 }).notNull(),
    numOfSessions: integer('num_of_sessions').notNull(),
});

// --- Classes Table ---
const classes = pgTable('classes', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    courseId: bigint('course_id', { mode: 'number' }).notNull().references(() => courses.id),
    dateStarted: date('date_started').notNull(),
});

// --- Assignments Table ---
const assignments = pgTable('assignments', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    dueDate: date('due_date').notNull(),
    dateCreated: timestamp('date_created', { withTimezone: true }).defaultNow(),
    lastUpdated: timestamp('last_updated', { withTimezone: true }).$onUpdate(() => new Date()),
    userCreated: bigint('user_created', { mode: 'number' }).notNull().references(() => users.id),
    classId: bigint('class_id', { mode: 'number' }).notNull().references(() => classes.id),
});

// --- AssignmentSubmissions Table ---
const assignmentSubmissions = pgTable('assinment_submissions', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    userId: bigint('user_id', { mode: 'number' }).notNull().references(() => users.id),
    assignmentId: bigint('assignment_id', { mode: 'number' }).notNull().references(() => assignments.id),
    grade: integer('grade'),
    dateSubmitted: timestamp('date_submitted', { withTimezone: true }).defaultNow(),
    dateGraded: timestamp('date_graded', { withTimezone: true }),
    gradedBy: bigint('graded_by', { mode: 'number' }).references(() => users.id),
});

// --- Logins Table ---
const logins = pgTable('logins', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    userId: bigint('user_id', { mode: 'number' }).notNull().references(() => users.id),
    datetime: timestamp('datetime', { withTimezone: true }).defaultNow(),
    success: boolean('success').notNull(),
});


// ----------------------------------------------------
// Drizzle Relations (Crucial for joins)
// ----------------------------------------------------

const usersRelations = relations(users, ({ one, many }) => ({
    createdAssignments: many(assignments, { relationName: 'createdBy' }),
    submittedSubmissions: many(assignmentSubmissions, { relationName: 'submittedBy' }),
    gradedSubmissions: many(assignmentSubmissions, { relationName: 'gradedBy' }),
    logins: many(logins),
}));

const assignmentsRelations = relations(assignments, ({ one, many }) => ({
    creator: one(users, {
        fields: [assignments.userCreated],
        references: [users.id],
        relationName: 'createdBy'
    }),
    class: one(classes, {
        fields: [assignments.classId],
        references: [classes.id]
    }),
    submissions: many(assignmentSubmissions),
}));

const assignmentSubmissionsRelations = relations(assignmentSubmissions, ({ one }) => ({
    user: one(users, {
        fields: [assignmentSubmissions.userId],
        references: [users.id],
        relationName: 'submittedBy'
    }),
    assignment: one(assignments, {
        fields: [assignmentSubmissions.assignmentId],
        references: [assignments.id]
    }),
    grader: one(users, {
        fields: [assignmentSubmissions.gradedBy],
        references: [users.id],
        relationName: 'gradedBy'
    }),
}));

const classesRelations = relations(classes, ({ one, many }) => ({
    course: one(courses, {
        fields: [classes.courseId],
        references: [courses.id]
    }),
    assignments: many(assignments),
}));

module.exports = {
    users,
    courses,
    classes,
    assignments,
    assignmentSubmissions,
    logins,
    usersRelations,
    coursesRelations: relations(courses, ({ many }) => ({ classes: many(classes) })),
    classesRelations,
    assignmentsRelations,
    assignmentSubmissionsRelations,
    loginsRelations: relations(logins, ({ one }) => ({ user: one(users, { fields: [logins.userId], references: [users.id] }) })),
};