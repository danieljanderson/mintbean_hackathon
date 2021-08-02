import React from 'react';
import Card from '../Card';
import './styles.css';

export default function Hand({ cards, dealerPoints }) {
  const currentCards = cards.map(card => <Card key={card.name} card={card} />);

  return <div className="dealerHandWrapper">
    <div className="cards">
    {currentCards}
    </div>
    <div>{dealerPoints}</div>
  </div>;
}
