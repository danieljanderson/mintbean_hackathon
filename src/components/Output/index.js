import React from 'react';
import './styles.css'



export default function Output({playerCash,currentBet}) {
  
  return (
    <>
      <div className="navbar">
        <div></div>
        <div>
          <p>Player Cash: ${playerCash}</p>
        </div>
        
      </div>
    </>
  );
}
