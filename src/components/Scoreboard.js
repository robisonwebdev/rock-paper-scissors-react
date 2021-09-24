import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ playerScore, computerScore}) => {
  return (
    <div className='scoreboard'>
      <p>{playerScore}</p>
      <p>|</p>
      <p>{computerScore}</p>
    </div>
  );
}

export default Scoreboard;