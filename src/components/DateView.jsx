import React from 'react';
import NextEvent from './NextEvent';

function DateView(props) {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="text-center">
          <h3>{props.day}</h3>
          <h3>{props.weekDay}</h3>
        </div>
      </div>
      <h5 className="text-center">Próximos Eventos:</h5>
      <NextEvent />
    </div>
  );
}

export default DateView;
