import React from 'react';
import '../styles/GameStatus.css';

const GameStatus = ({ message }) => {
    return (
        <div className='gameStatus'>{message}</div>
    );
}

export default GameStatus;