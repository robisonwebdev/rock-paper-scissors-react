import React from 'react';
import GameInterface from './GameInterface';
import GameInfo from './GameInfo';
import '../styles/Gameboard.css';

const Gameboard = ({ handleChange, handleSubmit, inputValue, gamePieceClick, message, playerName, showGameForm, showGameStatus }) => {
  return (
    <div className='gameboard'>
      <GameInterface
        className='Player'
        competitor={playerName}
        gamePieceClick={gamePieceClick}
      />
      <GameInfo
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        message={message}
        showGameForm={showGameForm}
        showGameStatus={showGameStatus}
      />
      <GameInterface
        className='Computer'
        competitor='Computer'
      />
    </div>
  );
}

export default Gameboard;