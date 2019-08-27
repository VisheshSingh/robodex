import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if (true) {
    throw new Error('Nooo!');
  }
  const cardArray = robots.map(robot => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    );
  });

  return <div>{cardArray}</div>;
};

export default CardList;
