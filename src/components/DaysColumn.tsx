import React from 'react';
import Day from './Day';
import { format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale'; // Importez les types ici
import { Task } from './types'; // Importez les types ici

interface DaysColumnProps {
    tasks: Task[];
  }

  const DaysColumn: React.FC<DaysColumnProps> = ({ tasks }) => {
    const startDate = new Date(); // Date du jour
    const days = [...Array(5)].map((_, i) => (
      <Day
        key={i}
        isOdd={i % 2 !== 0}
        date={addDays(startDate, i)}
        tasks={tasks.filter(task => task.day === format(addDays(startDate, i), 'EEEE', { locale: fr }))}
      />
    ));
  
    return (
      <section className="days-column">
        {days}
      </section>
    );
  }

export default DaysColumn;


