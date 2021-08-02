import React from 'react';
import Card from '../Card';

export default function Hand({ cards }) {
  const currentCards = cards.map(card => <Card key={card.name} card={card} />);

  return (
  <div className="playerHandWrapper">
    <div className="cards">{currentCards}</div>
  </div>
  );
}
