import React from 'react';
import GameInterface from './GameInterface';
import '../styles/Gameboard.css';

const Gameboard = () => {
  return (
    <div className='gameboard'>
      <GameInterface competitor='Player' />
      <p>Temp</p>
      <GameInterface competitor='Computer' />
    </div>
  );
}

export default Gameboard;