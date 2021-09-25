import React from 'react';
import GamePiece from './GamePiece';

const GameInterface = ({ competitor }) => {
  return (
    <div className='gameInterface'>
      <h2>{competitor}</h2>
      <GamePiece />
      <GamePiece />
      <GamePiece />
    </div>
  );
}

export default GameInterface;