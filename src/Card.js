import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
      <img src={`https://robohash.org/${id}?200x200`} alt={id + name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
