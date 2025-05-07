# Task Manager

A full-stack task management application built with React, Node.js, Express, and PostgreSQL.

## Features

- Add new tasks with title and description
- View all tasks
- Mark tasks as completed
- Delete tasks
- Tasks are sorted by creation date
- Responsive design

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Styling: CSS

## Prerequisites

- Node.js
- PostgreSQL
- npm or yarn

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/Stuti19/taskManager.git
cd taskManager
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=taskmanager
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

5. Create the database:
- Open PostgreSQL
- Create a new database named 'taskmanager'

6. Start the backend server:
```bash
npm run dev
```

7. Start the frontend development server:
```bash
cd client
npm start
```

The application will be available at http://localhost:3000

## API Endpoints

- GET /tasks - Get all tasks
- POST /tasks - Create a new task
- PUT /tasks/:id/complete - Toggle task completion
- DELETE /tasks/:id - Delete a task

## Author

Stuti19 