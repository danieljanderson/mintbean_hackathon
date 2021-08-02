import React from 'react';
import './styles.css';


const Footer = (props) => {
  return (
    <div className="footerI">
      {
        !props.buttonState.dealDisabled ?     <div className="control deal" onClick={props.handleDealButton}>Deal</div> : null
      }
      {!props.buttonState.hitDisabled ? <div className="control hit" onClick={props.handleHitButton}>Hit</div> : null}
        {!props.buttonState.standDisabled ? <div className="control stand" onClick={props.handleStandButton}>Stand</div> : null}
        {!props.buttonState.newRoundDisabled ? <div className="control reset" onClick={props.handleNewRoundButton}>Reset</div> : null}
          
        {!props.buttonState.dblDownDisabled ? <div className="control doubleDown" onClick={props.handleDblDownButton}>Double Down</div> : null}
          
          
    </div>
  )
}

export default Footer;