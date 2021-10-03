import React from 'react';
import GamePiece from './GamePiece';
import '../styles/GameInterface.css';

const GameInterface = ({ className, competitor, gamePieceClick, gameStart }) => {
  let iconHover;

  if (gameStart) {
    iconHover = 'iconHover';
  }

  return (
    <div className={`gameInterface ${className}`}>
      <h2>{competitor || className}</h2>
      <div className='gamePieces'>
        <GamePiece
          data_value='rock'
          className={iconHover}
          icon='las la-hand-rock'
          onClick={gamePieceClick}
        />
        <GamePiece
          data_value='paper'
          className={iconHover}
          icon='las la-hand-paper'
          onClick={gamePieceClick}
        />
        <GamePiece
          data_value='scissors'
          className={iconHover}
          icon='las la-hand-scissors'
          onClick={gamePieceClick}
        />
      </div>
    </div>
  );
}

export default GameInterface;