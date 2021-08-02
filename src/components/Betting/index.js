import React from 'react';
import './styles.css'


import { GAMESTATE } from '../../utils/states';


export default function Betting(props) {


  const enabledChips = (
    <div className="enableWrapper">
      <p>Click on an amount to bet with</p>
      <div className="priceWrapper">
        <div className="price"  onClick={() => props.handleChipsButtons(1)}>$1</div>
        <div className="price" onClick={() => props.handleChipsButtons(5)}>$5</div>
        <div className="price" onClick={() => props.handleChipsButtons(25)}>$25</div>
        <div className="price" onClick={() => props.handleChipsButtons(100)}>$100</div>
        <div className="price" onClick={() => props.handleChipsButtons(500)}>$500</div>
        <div className="price" onClick={() => props.handleChipsButtons(1000)}>$1000</div>
      </div>
      
    </div>
  )
  const disabledChips = (
    <div className="disabledWrapper">
      {/* <p style={{color: 'red'}}>Click on Reset button to play again</p> */}
      <div className="priceWrapper">
      <div className="price disabled">$1</div>
      <div className="price disabled">$5</div>
      <div className="price disabled">$25</div>
      <div className="price disabled">$100</div>
      <div className="price disabled">$500</div>
      <div className="price disabled">$1000</div>
    </div>
    </div>
    
  )

  return (
    <>{props.gameState === GAMESTATE.BET ? enabledChips : disabledChips}</>
  );
}
