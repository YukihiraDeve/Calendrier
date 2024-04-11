import React from 'react';

interface TaskDetails {
  description: string;
  date: string;
}

interface TaskFormProps {
  addTask: (taskDetails: TaskDetails) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const taskDetails = {
      description: event.currentTarget.description.value,
      date: event.currentTarget.date.value
    };
    addTask(taskDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="description" type="text" placeholder="Description de la tâche" required />
      <input name="date" type="datetime-local" required />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;
