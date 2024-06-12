import React from 'react';

function DateHome() {
  const newDate = new Date();

  const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const weekDay = week[newDate.getDay()];
  const day = newDate.getDate();

  return (
    <div>
      <div>
        <h2>{day}</h2>
        <h2>{weekDay}</h2>
      </div>
    </div>
  );
}

export default DateHome;
