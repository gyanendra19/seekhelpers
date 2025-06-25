import { useState, useEffect } from 'react';
import type { Task, TaskFormData } from './types/task';
import { TaskForm } from './components/TaskForm';
import { TaskItem } from './components/TaskItem';
import { api } from './services/api';
import './styles/App.css';
import './styles/Background.css';

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const tasks = await api.getTasks();
      setTasks(tasks);
      setError(null);
    } catch (err) {
      setError('Failed to load tasks. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData: TaskFormData) => {
    try {
      const newTask = await api.createTask(taskData);
      setTasks([...tasks, newTask]);
      setError(null);
    } catch (err) {
      setError('Failed to create task. Please try again.');
    }
  };

  const handleToggleComplete = async (id: string) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (!task) return;

      const updatedTask = await api.updateTask(id, {
        completed: !task.completed
      });

      setTasks(tasks.map(t => t.id === id ? updatedTask : t));
      setError(null);
    } catch (err) {
      setError('Failed to update task. Please try again.');
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await api.deleteTask(id);
      setTasks(tasks.filter(t => t.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete task. Please try again.');
    }
  };

  if (loading) {
    return <div className="loading">Loading tasks...</div>;
  }

  return (
    <>
      <div className="background-animation">
        <div className="animated-squares">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
      <div className="container">
        <h1 className="app-title">Task Manager</h1>
        
        {error && <div className="error">{error}</div>}
        
        <TaskForm onSubmit={handleCreateTask} />
        
        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="loading">No tasks yet. Add one above!</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
