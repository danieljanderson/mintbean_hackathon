export const calcScore = cards => {
  let score = 0;
  let numberOfAces = 0;

  const pointsArr1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const pointsArr2 = ['jack', 'queen', 'king'];

  cards.forEach(card => {
    if (!card.hidden) {
      if (pointsArr1.includes(card.rank)) {
        score = score + parseInt(card.rank);
      } else if (pointsArr2.includes(card.rank)) {
        score = score + 10;
       } 
      else if (card.rank === '1') {
        numberOfAces = numberOfAces + 1
        score = score + 11
      //   if (score + 11 <= 21) {
      //     score = score + 11;
      //   } else {
      //     score = score + 1;
      //   }
       }
       

    }
  });
  // Account for the aces
  for (let i = 1; i <= numberOfAces; i++) {
    console.log("number of aces" + numberOfAces)
    const isBust = score > 21;

    if (isBust) {
      // try to save
      score -= 10;
    }

    numberOfAces -= 1;
  }
  return score;
};

export const calcFullScore = cards => {
  let score = 0;
  let numberOfAces = 0
  const pointsArr1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const pointsArr2 = ['jack', 'queen', 'king'];

  if (cards.length > 1) {
    cards.forEach(card => {
      if (pointsArr1.includes(card.rank)) {
        score = score + parseInt(card.rank);
      } else if (pointsArr2.includes(card.rank)) {
        score = score + 10;
      } else if (card.rank === '1') {
        numberOfAces = numberOfAces + 1
        score = score + 11
      }
    });
  }
  // Account for the aces
  for (let i = 1; i <= numberOfAces; i++) {
    const isBust = score > 21;

    if (isBust) {
      // try to save
      score -= 10;
    }

    numberOfAces -= 1;
  }

  return score;
};

export const isBust = points => {
  if (points > 21) {
    return true;
  }
  return false;
};
