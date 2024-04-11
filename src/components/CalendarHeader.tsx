
import React, { useState } from 'react';
import TaskForm from './Taskform';  

interface TaskDetails {
    description: string;
    date: string;  
  }
  
  const CalendarHeader: React.FC = () => {
    const [showAddTask, setShowAddTask] = useState(false);
  
    const addTask = (taskDetails: TaskDetails): void => {
      console.log('Ajout de la tâche : ', taskDetails);
      setShowAddTask(false);  
    };
  
    return (
      <header className="calendar-header">
        <button className='add-button' onClick={() => setShowAddTask(true)}></button>
        {showAddTask && (
          <div className="add-task-container">
            <TaskForm addTask={addTask} />
            <button onClick={() => setShowAddTask(false)}>Fermer</button>
          </div>
        )}
      </header>
    );
  }
  
  export default CalendarHeader;