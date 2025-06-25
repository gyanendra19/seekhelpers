const express = require('express');
const router = express.Router();

// In-memory storage for tasks (replace with database in production)
let tasks = [];

// Generate a unique ID
const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET single task
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.json(task);
});

// POST new task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const newTask = {
    id: generateId(),
    title,
    description: description || '',
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update task
router.put('/:id', (req, res) => {
  const { title, description, completed } = req.body;
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title || tasks[taskIndex].title,
    description: description !== undefined ? description : tasks[taskIndex].description,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed,
    updatedAt: new Date().toISOString()
  };

  res.json(tasks[taskIndex]);
});

// DELETE task
router.delete('/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === req.params.id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks = tasks.filter(t => t.id !== req.params.id);
  res.status(204).send();
});

module.exports = router; 