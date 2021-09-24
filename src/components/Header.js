import React from 'react';
import Scoreboard from './Scoreboard';
import '../styles/Header.css';

const Header = ({ computerScore, playerScore }) => {
  return (
    <header>
      <Scoreboard
        computerScore={computerScore}
        playerScore={playerScore}
      />
    </header>
  );
}

export default Header;