import React from 'react';
import Scoreboard from './Scoreboard';

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