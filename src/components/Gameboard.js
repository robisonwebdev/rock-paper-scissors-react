import React from 'react';
import GameInterface from './GameInterface';
import GameInfo from './GameInfo';
import '../styles/Gameboard.css';

const Gameboard = ({ gamePieceClick, gameStart, handleChange, handleSubmit, inputValue, message, playerName, showGameForm, showGameStatus, winner }) => {
  return (
    <div className='gameboard'>
      <GameInterface
        className='Player'
        competitor={playerName}
        gamePieceClick={gamePieceClick}
        gameStart={gameStart}
      />
      <GameInfo
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        message={message}
        showGameForm={showGameForm}
        showGameStatus={showGameStatus}
        winner={winner}
      />
      <GameInterface
        className='Computer'
        competitor='Computer'
      />
    </div>
  );
}

export default Gameboard;