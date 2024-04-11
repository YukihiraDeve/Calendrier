import React, { useState } from 'react';
import TaskForm from './Taskform';
import { TaskDetails } from './types';

interface CalendarHeaderProps {
  addTask: (taskDetails: TaskDetails) => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ addTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <header className="calendar-header">
      <button className='add-button' onClick={() => setShowAddTask(true)}></button>
      {/* {showAddTask && (
        <div className="add-task-container">
          <TaskForm addTask={addTask} />
          <button onClick={() => setShowAddTask(false)}>Fermer</button>
        </div>
      )}
      */}
    </header> 
  );

};

export default CalendarHeader;
