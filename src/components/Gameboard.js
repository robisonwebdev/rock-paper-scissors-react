import React from 'react';
import Display from './Display';
import '../styles/Gameboard.css';

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