import React from 'react';

function Card(props) {
  return (
    <div>
      <a href={props.link}>
        <img src={props.img} alt="Imagem de pasta roxa" />
      </a>
      <h4>{props.title}</h4>
    </div>
  );
}

export default Card;
