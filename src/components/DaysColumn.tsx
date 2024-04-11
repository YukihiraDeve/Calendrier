import React from 'react';
import Day from './Day';
import { addDays } from 'date-fns';

const DaysColumn: React.FC = () => {
  const startDate = new Date(); // Date du jour
  const days = [...Array(5)].map((_, i) => (
    <Day
      key={i}
      isOdd={i % 2 !== 0}
      date={addDays(startDate, i)} 
    />
  ));

  return (
    <section className="days-column">
      {days}
    </section>
  );
}

export default DaysColumn;
