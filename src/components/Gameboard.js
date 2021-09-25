import React from 'react';
import GameInterface from './GameInterface';
import '../styles/Gameboard.css';

const Gameboard = () => {
  return (
    <div className='gameboard'>
      <GameInterface />
      <p>Temp</p>
      <GameInterface />
    </div>
  );
}

export default Gameboard;