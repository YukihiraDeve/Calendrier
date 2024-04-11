import React from 'react';
import './App.css';
import CalendarHeader from './components/CalendarHeader';
import TimeColumn from './components/TimeColumn';
import DaysColumn from './components/DaysColumn';

const App: React.FC = () => {
  return (
    <div className="calendar-container">
      <div className="app">
        <CalendarHeader />
        <div className="calendar-body">
          <TimeColumn />
          <DaysColumn />
        </div>
      </div>
    </div>
  );
}

export default App;
