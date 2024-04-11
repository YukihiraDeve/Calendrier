import React from 'react';
import { format, isToday } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Task } from './types'; // Importez les types ici

interface DayProps {
  isOdd: boolean;
  date: Date;
  tasks: Task[];
}

const Day: React.FC<DayProps> = ({ isOdd, date, tasks }) => {
    const formattedDate = format(date, 'EEE d', { locale: fr });
    const dayStyle = isToday(date) ? 'today' : '';
    const dayTasks = tasks.filter(task => task.day === format(date, 'EEEE', { locale: fr }));
  
    return (
      <div className="day">
        <span className={dayStyle}>{formattedDate}</span>
        {dayTasks.map(task => (
          <div key={task.id} className="task">
            {task.title} ({task.startTime}-{task.endTime})
          </div>
        ))}
      </div>
    );
  }

export default Day;
