import React from 'react';
import { format, isToday } from 'date-fns';
import { fr } from 'date-fns/locale'; 

interface DayProps {
  isOdd: boolean;
  date: Date; 
}

const Day: React.FC<DayProps> = ({ isOdd, date }) => {
  const formattedDate = format(date, 'EEE d', { locale: fr }); 
  const dayStyle = isToday(date) ? 'today' : '';

  return (
    <div className="day">
      <span className={dayStyle}>{formattedDate}</span> 
    </div>
  );
}

export default Day;
