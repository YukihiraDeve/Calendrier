import React from 'react';
import { TaskDetails } from './types'; 

interface TaskFormProps {
  addTask: (taskDetails: TaskDetails) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const title = (form.elements.namedItem('title') as HTMLInputElement).value;
    const startTime = (form.elements.namedItem('startTime') as HTMLInputElement).value;
    const endTime = (form.elements.namedItem('endTime') as HTMLInputElement).value;
    const day = (form.elements.namedItem('day') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLInputElement)?.value;
    const date = (form.elements.namedItem('date') as HTMLInputElement)?.value; 

    const taskDetails: TaskDetails = {
      title,
      startTime,
      endTime,
      day,
      description,
      date 
    };
    addTask(taskDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title: <input type="text" name="title" required />
      </label>
      <label>
        Start Time: <input type="time" name="startTime" required />
      </label>
      <label>
        End Time: <input type="time" name="endTime" required />
      </label>
      <label>
        Day: <input type="text" name="day" required />
      </label>
      <label>
        Description: <input type="text" name="description" /> 
      </label>
      <label>
        Date: <input type="date" name="date" /> 
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
