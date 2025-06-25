import { useState } from 'react';
import type { TaskFormData } from '../types/task';

interface TaskFormProps {
  onSubmit: (task: TaskFormData) => void;
}

export const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    
    onSubmit(formData);
    setFormData({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Task description (optional)"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <button type="submit" className="button button-primary">
        Add Task
      </button>
    </form>
  );
}; 