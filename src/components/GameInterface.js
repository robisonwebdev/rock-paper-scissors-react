import React from 'react';
import GamePiece from './GamePiece';
import '../styles/GameInterface.css';

const GameInterface = ({ className, competitor, gamePieceClick }) => {
  return (
    <div className={`gameInterface ${className}`}>
      <h2>{competitor || className}</h2>
      <GamePiece icon='las la-hand-rock' onClick={gamePieceClick} />
      <GamePiece icon='las la-hand-paper' onClick={gamePieceClick} />
      <GamePiece icon='las la-hand-scissors' onClick={gamePieceClick} />
    </div>
  );
}

export default GameInterface;