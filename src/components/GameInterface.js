import React from 'react';
import GamePiece from './GamePiece';

const GameInterface = ({ competitor }) => {
  return (
    <div className='gameInterface'>
      <h2>{competitor}</h2>
      <GamePiece icon='las la-hand-rock' />
      <GamePiece icon='las la-hand-paper' />
      <GamePiece icon='las la-hand-scissors' />
    </div>
  );
}

export default GameInterface;