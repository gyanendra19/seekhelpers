import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({ task, onToggleComplete, onDelete }: TaskItemProps) => {
  return (
    <div className="task-item">
      <div className="task-content">
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="checkbox"
          />
          <h3 className={`task-title ${task.completed ? 'completed' : ''}`}>
            {task.title}
          </h3>
        </div>
        {task.description && (
          <p className={`task-description ${task.completed ? 'completed' : ''}`}>
            {task.description}
          </p>
        )}
      </div>
      <div className="task-actions">
        <button
          onClick={() => onDelete(task.id)}
          className="button button-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}; 