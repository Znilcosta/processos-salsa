import React from 'react';

import Card from './Card';
import procedures from '../utils/procedures';

function checkCard(procedures) {
  return (
    <Card
      link={procedures.urlFolders}
      img={procedures.imgFolder}
      title={procedures.procedureTitle}
    />
  );
}

function CreateCard() {
  return (
    <div>
      <h2>Processos Recentes</h2>
      <div>{procedures.map(checkCard)}</div>
    </div>
  );
}

export default CreateCard;
