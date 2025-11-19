export const assignmentsNeedsGrade = [
  {
    assignmentId: 1,
    studentId: 1,
    title: 'Build a To-Do List App',
    dueDate: '2004-03-12T10:24:00Z',
    student: 'Yossi gee',
    img: '/gee2.png',
    pointsPossible: 100,
    description:
      'Create a simple task manager using HTML, CSS, and JavaScript. Users should be able to add, edit, delete, and mark tasks as complete. Store tasks in localStorage so they persist across sessions.',
    answer: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>To-Do List</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .task { display: flex; justify-content: space-between; margin-bottom: 10px; }
    .completed { text-decoration: line-through; color: gray; }
  </style>
</head>
<body>
  <h1>To-Do List</h1>
  <input id="taskInput" placeholder="New task..." />
  <button onclick="addTask()">Add</button>
  <ul id="taskList"></ul>

  <script>
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task' + (task.completed ? ' completed' : '');
        li.innerHTML = \`
          <span onclick="toggleComplete(\${index})">\${task.text}</span>
          <button onclick="deleteTask(\${index})">Delete</button>
        \`;
        taskList.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById('taskInput');
      if (input.value.trim()) {
        tasks.push({ text: input.value, completed: false });
        input.value = '';
        updateStorage();
      }
    }

    function toggleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      updateStorage();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      updateStorage();
    }

    function updateStorage() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }

    renderTasks();
  </script>
</body>
</html>
    `,
  },
  {
      assignmentId: 2,
    studentId: 1,
    title: 'Design a Library Database',
    dueDate: '2024-08-29T18:45:00Z',
    student: 'Yossi gee',
    img: '/gee2.png',
    pointsPossible: 100,
    description:
      'Design a relational database schema for a library system that tracks books, members, and loan history. Include an ER diagram, table creation scripts, and sample SQL queries for common operations like borrowing and returning books.',
    answer: `
-- Books Table
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  isbn TEXT UNIQUE NOT NULL,
  published_year INTEGER
);

-- Members Table
CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  date_joined DATE DEFAULT CURRENT_DATE
);

-- Loans Table
CREATE TABLE loans (
  id SERIAL PRIMARY KEY,
  book_id INTEGER NOT NULL REFERENCES books(id),
  member_id INTEGER NOT NULL REFERENCES members(id),
  borrow_date DATE NOT NULL,
  return_date DATE,
  CONSTRAINT one_active_loan_per_book UNIQUE (book_id, return_date)
);

-- Sample Queries
SELECT b.title, m.name, l.borrow_date
FROM loans l
JOIN books b ON l.book_id = b.id
JOIN members m ON l.member_id = m.id
WHERE l.return_date IS NULL;

SELECT m.name, COUNT(*) AS total_loans
FROM loans l
JOIN members m ON l.member_id = m.id
GROUP BY m.name;
    `,
  },
  {
      assignmentId: 2,
    studentId: 2,
    title: 'Design a Library Database',
    dueDate: '2024-08-29T18:45:00Z',
    student: 'Jack Smith',
    img: null,
    pointsPossible: 100,
    description:
      'Design a relational database schema for a library system that tracks books, members, and loan history. Include an ER diagram, table creation scripts, and sample SQL queries for common operations like borrowing and returning books.',
    answer: `
-- Table: LibraryBooks
CREATE TABLE LibraryBooks (
  book_id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  isbn TEXT UNIQUE,
  category_id INTEGER REFERENCES Categories(category_id),
  year_published INT
);

-- Table: LibraryMembers
CREATE TABLE LibraryMembers (
  member_id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  joined_on DATE DEFAULT CURRENT_DATE
);

-- Table: Categories
CREATE TABLE Categories (
  category_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Table: BookLoans
CREATE TABLE BookLoans (
  loan_id SERIAL PRIMARY KEY,
  book_id INTEGER NOT NULL REFERENCES LibraryBooks(book_id),
  member_id INTEGER NOT NULL REFERENCES LibraryMembers(member_id),
  borrowed_on DATE NOT NULL,
  returned_on DATE,
  CONSTRAINT prevent_duplicate_loans UNIQUE (book_id, returned_on)
);

-- Sample Queries
SELECT lb.title, lm.full_name, bl.borrowed_on
FROM BookLoans bl
JOIN LibraryBooks lb ON bl.book_id = lb.book_id
JOIN LibraryMembers lm ON bl.member_id = lm.member_id
WHERE bl.returned_on IS NULL;

SELECT lm.full_name, COUNT(*) AS active_loans
FROM BookLoans bl
JOIN LibraryMembers lm ON bl.member_id = lm.member_id
WHERE bl.returned_on IS NULL
GROUP BY lm.full_name
HAVING COUNT(*) > 3;
    `,
  },
  {
      assignmentId: 3,
    studentId: 2,
    title: 'Debug a Node.js API',
    dueDate: '2024-12-29T18:45:00Z',
    student: 'Jack Smith',
    img: null,
    pointsPossible: 100,
    description:
      'Fix bugs in a RESTful API built with Express. Identify runtime errors, add missing validation for incoming requests, and write unit tests for at least one route using a testing framework like Jest',
    answer:
      'Fixed a crash in the POST /register route caused by missing field checks. Added express-validator middleware and wrote Jest tests for valid and invalid payloads. Also added a 404 handler and improved error messages.',
  },
  {
      assignmentId: 3,
    studentId: 1,
    title: 'Debug a Node.js API',
    dueDate: '2024-12-29T18:45:00Z',
    student: 'Yossi gee',
    img: '/gee2.png',
    pointsPossible: 100,
    description:
      'Fix bugs in a RESTful API built with Express. Identify runtime errors, add missing validation for incoming requests, and write unit tests for at least one route using a testing framework like Jest',
    answer:
      'Added input validation to the /login route and fixed an issue where the server didn’t handle missing tokens. Wrote tests for login success and failure using Jest and Supertest. Improved error messages and added a global error handler.',
  },
  {
      assignmentId: 4,
    studentId: 1,
    title: 'Simulate a Git Workflow',
    dueDate: '2025-01-29T18:45:00Z',
    student: 'Yossi gee',
    img: '/gee2.png',
    pointsPossible: 100,
    description:
      'Use Git to simulate a collaborative development workflow. Fork a repository, create a feature branch, make changes, and resolve a merge conflict. Document each step and explain the purpose of the commands used.',
    answer:
      'Forked the repo, created a branch called feature/navbar, and added a new navigation bar. After pushing, pulled changes from main and resolved a conflict in index.html. Documented each step using Git commands and explained the purpose of each.',
  },
];