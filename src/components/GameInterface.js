import React from 'react';
import GamePiece from './GamePiece';
import '../styles/GameInterface.css';

const GameInterface = ({ className, competitor }) => {
  return (
    <div className={`gameInterface ${className}`}>
      <h2>{competitor || className}</h2>
      <GamePiece icon='las la-hand-rock' />
      <GamePiece icon='las la-hand-paper' />
      <GamePiece icon='las la-hand-scissors' />
    </div>
  );
}

export default GameInterface;