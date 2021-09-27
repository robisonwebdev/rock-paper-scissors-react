import React from 'react';
import GameInterface from './GameInterface';
import GameInfo from './GameInfo';
import '../styles/Gameboard.css';

const Gameboard = ({ setPlayerName }) => {
  return (
    <div className='gameboard'>
      <GameInterface competitor='Player' />
      <GameInfo
        setPlayerName={setPlayerName}
      />
      <GameInterface competitor='Computer' />
    </div>
  );
}

export default Gameboard;