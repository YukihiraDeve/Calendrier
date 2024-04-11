import React, { useState } from 'react';
import './App.css';
import CalendarHeader from './components/CalendarHeader';
import TimeColumn from './components/TimeColumn';
import DaysColumn from './components/DaysColumn';
import DisplayTask from './components/DisplayTask';
import { Task } from './components/types'; // Assurez-vous que cet import est correct
import MouseLight from './components/mouseLight';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fonction pour ajouter une tâche avec id
  const addTask = (taskDetails: Task) => {
    const newTask: Task = {
      ...taskDetails,
      id: tasks.length + 1 // Générer un id simple basé sur la longueur actuelle de l'array
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <div className="App">     
      <MouseLight />
        <div className="calendar-container">
        <div className="app">
          <CalendarHeader addTask={addTask as any} />
          <div className="calendar-body">
            <TimeColumn />
            <DaysColumn tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
