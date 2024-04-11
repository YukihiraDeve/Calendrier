import React from 'react';

const TimeColumn: React.FC = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
  
  return (
    <div className="time-column">
      {times.map(time => {
        const hour = parseInt(time.split(':')[0]); 
        const isPast = hour < currentHour;
        return (
          <div className={`time ${isPast ? 'past' : ''}`} key={time}>
            {time}
          </div>
        );
      })}
    </div>
  );
}

export default TimeColumn;
