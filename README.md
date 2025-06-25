# Task Manager Application

A modern task management application built with React, TypeScript, and Express. Features a beautiful UI with animations and full CRUD operations for tasks.

## Features

- ✨ Modern, animated UI with glass-morphism effects
- 📝 Create, read, update, and delete tasks
- ✅ Mark tasks as complete/incomplete
- 🎨 Responsive design with smooth animations
- 🔄 Real-time updates
- 🌐 RESTful API backend

## Prerequisites

Before running this application, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

## Project Structure

```
seekhelpers/
├── client/          # Frontend React application
│   ├── src/
│   ├── package.json
│   └── ...
└── server/          # Backend Express API
    ├── routes/
    ├── package.json
    └── ...
```

## Installation & Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd seekhelpers
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

## Running the Application

You'll need to run both the backend server and the frontend development server.

1. Start the backend server:
```bash
cd server
npm run dev
```
The server will start on http://localhost:5000

2. In a new terminal, start the frontend development server:
```bash
cd client
npm run dev
```
The client application will start on http://localhost:5173

3. Open your browser and visit http://localhost:5173 to use the application.

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Development

### Backend (Express + Node.js)
- Located in the `server` directory
- Uses in-memory storage (can be extended to use a database)
- RESTful API design
- CORS enabled for frontend access

### Frontend (React + TypeScript + Vite)
- Located in the `client` directory
- Modern React with TypeScript
- Vite for fast development and building
- CSS animations and modern UI design
