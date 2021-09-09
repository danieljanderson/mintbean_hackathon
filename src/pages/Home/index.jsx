import React, { useState, useEffect } from 'react';
import './styles.css';
import { Header, Betting, Output, DealerHand, PlayerHand, Footer, Message } from '../../components';
import { getDeck, shuffle } from '../../utils/decks';
import { GAMESTATE, WINNER } from '../../utils/states';
import { calcScore, calcFullScore } from '../../utils/gameState';



const Home = () => {
  const [deck, setDeck] = useState(shuffle(getDeck()));
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerPoints, setDealerPoints] = useState(0);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [playerCash, setPlayerCash] = useState(100);
  const [currentBet, setCurrentBet] = useState(0);
  const [buttonState, setButtonState] = useState({
    dealDisabled: false,
    hitDisabled: true,
    standDisabled: true,
    splitDisabled: true,
    dblDownDisabled: true,
    newRoundDisabled: true,
  });

  const [gameState, setGameState] = useState(GAMESTATE.BET);
  const [winnerState, setWinnerState] = useState(null);
  const [message, setMessage] = useState('');

    // Check for naturals, e.g. dealer or player has 21 on first deal
    useEffect(() => {
      if (gameState === GAMESTATE.CHECKFORWINNER) {
        let secretDealerPoints = calcFullScore(dealerCards);
  
        if (playerPoints === 21 && secretDealerPoints === 21) {
          setGameState(GAMESTATE.DECLAREWINNER);
          setDealerPoints(secretDealerPoints);
          setWinnerState(WINNER.TIE);
        } else if (playerPoints === 21) {
          setGameState(GAMESTATE.DECLAREWINNER);
          setDealerPoints(secretDealerPoints);
          setWinnerState(WINNER.PLAYER);
        } else if (secretDealerPoints === 21) {
          setGameState(GAMESTATE.DECLAREWINNER);
          setDealerPoints(secretDealerPoints);
          setWinnerState(WINNER.DEALER);
        } else {
          setGameState(GAMESTATE.PLAYERTURN);
          const split = playerCards[0].rank === playerCards[1].rank;
          const dblDown = playerCash >= currentBet * 2 && playerCards.length < 3;
  
          setButtonState({
            dealDisabled: true,
            hitDisabled: false,
            standDisabled: false,
            splitDisabled: !split,
            dblDownDisabled: !dblDown,
            newRoundDisabled: true,
          });
        }
      }
    }, [
      gameState,
      playerPoints,
      dealerPoints,
      setWinnerState,
      dealerCards,
      currentBet,
      playerCash,
      playerCards,
    ]);

    // set message and flip cards
    useEffect(() => {
      if (gameState === GAMESTATE.DECLAREWINNER) {
        dealerCards.filter(card => {
          if (card.hidden === true) {
            card.hidden = false;
          }
          return card;
        });
        setDealerCards([...dealerCards]);
  
        if (winnerState === WINNER.DEALER) {
          setMessage('SORRY YOU LOST');
        }
        if (winnerState === WINNER.PLAYER) {
          setMessage('WOOHOO YOU WON! $$');
        }
        if (winnerState === WINNER.TIE) {
          setMessage('TIE');
        }
        setGameState(GAMESTATE.GAMEOVER);
        setButtonState({
          dealDisabled: true,
          hitDisabled: true,
          standDisabled: true,
          splitDisabled: true,
          dblDownDisabled: true,
          newRoundDisabled: false,
        });
      }
    }, [gameState, winnerState, dealerCards]);

    useEffect(() => {
      if (gameState === GAMESTATE.BET && currentBet === 0) {
        setButtonState({
          dealDisabled: true,
          hitDisabled: true,
          standDisabled: true,
          splitDisabled: true,
          dblDownDisabled: true,
          newRoundDisabled: true,
        });
      } else if (gameState === GAMESTATE.BET && currentBet > 0) {
        setButtonState({
          dealDisabled: false,
          hitDisabled: true,
          standDisabled: true,
          splitDisabled: true,
          dblDownDisabled: true,
          newRoundDisabled: true,
        });
      }
    }, [gameState, currentBet]);

    useEffect(() => {
      if (gameState === GAMESTATE.DEALERTURN) {
        let tempDealerCards = dealerCards;
        let tempDealerPoints = calcFullScore(tempDealerCards);
  
        while (tempDealerPoints < 17) {
          tempDealerCards.push(deck.pop());
          // TODO: legg til forsinkelse her eller noe.
          tempDealerPoints = calcFullScore(tempDealerCards);
        }
        setDealerCards(tempDealerCards);
        setDealerPoints(tempDealerPoints);
        if (tempDealerPoints > 21) {
          setWinnerState(WINNER.PLAYER);
        } else if (tempDealerPoints > playerPoints) {
          setWinnerState(WINNER.DEALER);
        } else if (tempDealerPoints < playerPoints) {
          setWinnerState(WINNER.PLAYER);
        } else if (tempDealerPoints === playerPoints) {
          setWinnerState(WINNER.TIE);
        }
        setGameState(GAMESTATE.DECLAREWINNER);
      }
    }, [gameState, dealerCards, deck, playerPoints]);

    const handleDealButton = () => {
      setGameState(GAMESTATE.DEAL);
      setButtonState({
        dealDisabled: false,
        hitDisabled: true,
        standDisabled: true,
        splitDisabled: true,
        dblDownDisabled: true,
        newRoundDisabled: true,
      });
  
      let tempDealerCards = [];
      let tempPlayerCards = [];
  
      let firstDealerCard = deck.pop();
      firstDealerCard.hidden = true;
  
      tempDealerCards.push(firstDealerCard);
      tempPlayerCards.push(deck.pop());
      tempDealerCards.push(deck.pop());
      tempPlayerCards.push(deck.pop());
  
      setDealerCards(tempDealerCards);
      setPlayerCards(tempPlayerCards);
  
      const tempDealerPoints = calcScore(tempDealerCards);
      const tempPlayerPoints = calcScore(tempPlayerCards);
      setDealerPoints(tempDealerPoints);
      setPlayerPoints(tempPlayerPoints);
  
      setGameState(GAMESTATE.CHECKFORWINNER);
    };

    // HANDLE HIT
    const handleHitButton = () => {
      let tempPlayerCards = playerCards;
  
      tempPlayerCards.push(deck.pop());
  
      setPlayerCards(tempPlayerCards);
  
      const tempPlayerPoints = calcScore(tempPlayerCards);
  
      setPlayerPoints(tempPlayerPoints);
  
      if (tempPlayerPoints > 21) {
        setGameState(GAMESTATE.DECLAREWINNER);
        setWinnerState(WINNER.DEALER);
        setButtonState({
          dealDisabled: true,
          hitDisabled: true,
          standDisabled: true,
          splitDisabled: true,
          dblDownDisabled: true,
          newRoundDisabled: false,
        });
      }
      setButtonState({
        dealDisabled: true,
        hitDisabled: false,
        standDisabled: false,
        splitDisabled: true,
        dblDownDisabled: true,
        newRoundDisabled: true,
      });
    };

// HANDLE STAND
    const handleStandButton = () => {
      setGameState(GAMESTATE.DEALERTURN);
      setButtonState({
        dealDisabled: true,
        hitDisabled: true,
        standDisabled: true,
        splitDisabled: true,
        dblDownDisabled: true,
        newRoundDisabled: true,
      });
    };

    ///HANDLE DOUBLE DOWN
    const handleDblDownButton = () => {
      // 1: double bet
      const originalBet = currentBet;
      setCurrentBet(originalBet * 2);
      setPlayerCash(playerCash - originalBet);
  
      // 2: take one card
      let tempPlayerCards = playerCards;
  
      tempPlayerCards.push(deck.pop());
  
      setPlayerCards(tempPlayerCards);
  
      const tempPlayerPoints = calcScore(tempPlayerCards);
  
      setPlayerPoints(tempPlayerPoints);
  
      if (tempPlayerPoints > 21) {
        setGameState(GAMESTATE.DECLAREWINNER);
        setWinnerState(WINNER.DEALER);
        setButtonState({
          dealDisabled: true,
          hitDisabled: true,
          standDisabled: true,
          splitDisabled: true,
          dblDownDisabled: true,
          newRoundDisabled: false,
        });
      } else {
        // 3. change to dealerturn
        setGameState(GAMESTATE.DEALERTURN);
      }
    };

    //HANDLE NEW ROUND
    const handleNewRoundButton = () => {
      switch (winnerState) {
        case WINNER.DEALER:
          // nothing happens, player just looses bet
          break;
        case WINNER.PLAYER:
          setPlayerCash(playerCash + currentBet * 2);
          break;
        case WINNER.TIE:
          setPlayerCash(playerCash + currentBet);
          break;
        default:
          break;
      }
  
      setDeck(shuffle(getDeck()));
      setDealerCards([]);
      setPlayerCards([]);
      setDealerPoints(0);
      setPlayerPoints(0);
      setCurrentBet(0);
      setButtonState({
        dealDisabled: false,
        hitDisabled: true,
        standDisabled: true,
        splitDisabled: true,
        dblDownDisabled: true,
        newRoundDisabled: true,
      });
      setWinnerState(null);
      setMessage('');
      setGameState(GAMESTATE.BET);
    };
  
    
    const handleChipsButtons = val => {
      if (playerCash >= val) {
        setCurrentBet(currentBet + val);
        setPlayerCash(playerCash - val);
      }
    };
  
    const handleClearBet = () => {
      setPlayerCash(playerCash + currentBet);
      setCurrentBet(0);
    };

    const handleSplitButton = () => {
      alert('Not implemented yet');
    };

  const handleClearMessage = () => {
    setMessage('');
  };

  const messageProps = {
    message,
    handleClearMessage,
  };

  const inputProps = {
    buttonState,
    handleDealButton,
    handleHitButton,
    handleStandButton,
    handleSplitButton,
    handleDblDownButton,
    handleNewRoundButton,
  };


    const outputProps = {
      dealerPoints,
      playerPoints,
      playerCash,
      gameState,
      currentBet
    };
    const bettingProps = {
      handleChipsButtons,
      handleClearBet,
      gameState,
    };
    
  return (
      <div className="homeWrapper">
          <Header />
          <Output {...outputProps} />
        <div className="contentWrapper">
          <Message {...messageProps}/>
          <Betting {...bettingProps} {...outputProps} />
          <div className="cardsWrapper">
          <div className="dearlerPointsSection">
              {dealerPoints === 0 ? null : <p style={{fontWeight:"bold"}}>Dealer Points: {dealerPoints}</p>}
               <DealerHand cards={dealerCards} dealerPoints={dealerPoints}/>
            </div>
            <div className="playerPointsSection">
                <PlayerHand cards={playerCards} playerPoints={playerPoints}/>
                {playerPoints === 0 ? null : <p style={{fontWeight:"bold"}}>Player Points: {playerPoints}</p>}
            </div>
          
          </div>
        </div>
         <Footer {...inputProps}/>
      </div>
  )
}

export default Home;