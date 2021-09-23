import React from 'react';
import Display from './Display';

const Gameboard = () => {
  return (
    <div className='gameboard'>
      <Display />
      <p>Temp</p>
      <Display />
    </div>
  );
}

export default Gameboard;