import React from 'react';
import Card from '../Card';

export default function Hand({ cards, playerPoints }) {
  const currentCards = cards.map(card => <Card key={card.name} card={card} />);

  return (
  <div className="playerHandWrapper">
    <div className="cards">{currentCards}</div>
    <div>{playerPoints}</div>
  </div>
  );
}
