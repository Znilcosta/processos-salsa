import React from 'react';
import DateView from './DateView';

function DateHome() {
  const newDate = new Date();

  const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const weekDay = week[newDate.getDay()];
  const day = newDate.getDate();

  return <DateView day={day} weekDay={weekDay} />;
}

export default DateHome;
