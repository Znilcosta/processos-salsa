function DateGenerator() {
  const newDate = new Date();

  const week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const weekDay = week[newDate.getDay()];
  const day = newDate.getDate();

}

export default DateGenerator;
