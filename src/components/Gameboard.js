import React from 'react';
import GameInterface from './GameInterface';
import GameInfo from './GameInfo';
import '../styles/Gameboard.css';

const Gameboard = () => {
  return (
    <div className='gameboard'>
      <GameInterface competitor='Player' />
      <GameInfo />
      <GameInterface competitor='Computer' />
    </div>
  );
}

export default Gameboard;