import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <div className="dealer">
        <h1>Dealer</h1>
        <div style={{display: 'flex', width: '90px', justifyContent: "space-between"}}>
        <i class="fa fa-arrow-left"></i> <Link to="/">Back</Link>
        </div>
       
      </div>
      <div className="player">
        <h1>Player</h1>
      </div>
    </header>
  )
}

export default Header;